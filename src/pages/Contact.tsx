import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

// ─── Client-side Validation (mirrors server rules) ────────────────────────────

const EMAIL_REGEX = /^[a-zA-Z0-9._%+]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;;
const NAME_REGEX  = /^[a-zA-Z ]+$/;;

function validateField(field: keyof FormData, value: string): string | undefined {
    const v = value.trim();

    if (field === 'name') {
        if (!v) return 'Name is required.';
        if (!NAME_REGEX.test(v)) return 'Name must contain letters and spaces only.';
        if (v.length < 2) return 'Name must be at least 2 characters.';
        if (v.length > 100) return 'Name must not exceed 100 characters.';
    }

    if (field === 'email') {
        if (!v) return 'Email address is required.';
        if (!EMAIL_REGEX.test(v)) return 'Please enter a valid email address.';
    }

    if (field === 'message') {
        if (!v) return 'Message is required.';
        if (v.length < 10) return 'Message must be at least 10 characters.';
        if (v.length > 2000) return 'Message must not exceed 2000 characters.';
    }

    return undefined;
}

function validateAll(data: FormData): FormErrors {
    const errors: FormErrors = {};
    (['name', 'email', 'message'] as (keyof FormData)[]).forEach((field) => {
        const error = validateField(field, data[field]);
        if (error) errors[field] = error;
    });
    return errors;
}

// ─── Component ────────────────────────────────────────────────────────────────

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [apiError, setApiError] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Clear field error while the user types, keep api error banner visible for now
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    // Validate a single field on blur for instant feedback
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const error = validateField(name as keyof FormData, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setApiError(null);

        // Client-side validation first
        const validationErrors = validateAll(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch('/.netlify/functions/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim(),
                }),
            });

            const data = await res.json() as {
                success: boolean;
                message: string;
                errors?: FormErrors;
            };

            if (!data.success) {
                // Server returned validation/field errors → surface them inline
                if (data.errors && Object.keys(data.errors).length > 0) {
                    setErrors(data.errors);
                } else {
                    setApiError(data.message ?? 'Something went wrong. Please try again.');
                }
                return;
            }

            // Success
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            setIsSubmitted(true);

        } catch {
            setApiError('Unable to send your message. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSendAnother = () => {
        setIsSubmitted(false);
        setApiError(null);
        setErrors({});
    };

    return (
        <div className="contact-page container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="contact-layout"
            >
                {/* Contact Info */}
                <div className="contact-info-section">
                    <h1>Get in Touch</h1>
                    <p className="contact-subtitle">
                        Ready to transform your business? Reach out to us. Whether you have a question about our services, pricing, or just want to say hello, we're here to answer.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon-wrapper">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-item-content">
                                <h4>Visit Us</h4>
                                <p>Hyderabad, Telangana,<br />India, 500001</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-wrapper">
                                <FaEnvelope />
                            </div>
                            <div className="contact-item-content">
                                <h4>Email Us</h4>
                                <p><a href="mailto:contact@fraylontech.com">contact@fraylontech.com</a></p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-wrapper">
                                <FaPhone />
                            </div>
                            <div className="contact-item-content">
                                <h4>Call Us</h4>
                                <p><a href="tel:+919381617904">+91 93816 17904</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-card">
                    {isSubmitted ? (
                        <motion.div
                            className="success-message"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <FaCheckCircle className="success-icon" />
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                            <button className="btn btn-outline" onClick={handleSendAnother}>
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>

                            {/* API Error Banner */}
                            {apiError && (
                                <div className="form-api-error" role="alert">
                                    <FaExclamationCircle className="form-api-error-icon" />
                                    <span>{apiError}</span>
                                </div>
                            )}

                            {/* Name */}
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className={`form-input${errors.name ? ' form-input--error' : ''}`}
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="name"
                                />
                                {errors.name && (
                                    <p className="form-error-text" role="alert">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-input${errors.email ? ' form-input--error' : ''}`}
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="email"
                                />
                                {errors.email && (
                                    <p className="form-error-text" role="alert">{errors.email}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className={`form-input${errors.message ? ' form-input--error' : ''}`}
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.message && (
                                    <p className="form-error-text" role="alert">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn btn-primary form-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>

            </motion.div>
        </div>
    );
};

export default Contact;
