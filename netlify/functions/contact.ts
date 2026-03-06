import type { Handler, HandlerEvent } from '@netlify/functions';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactBody {
    name: string;
    email: string;
    message: string;
}

interface ValidationErrors {
    name?: string;
    email?: string;
    message?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Hyphen placed at the end of character class to avoid useless-escape warnings
const EMAIL_REGEX = /^[a-zA-Z0-9._%+]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[a-zA-Z ]+$/;

function validate(body: ContactBody): ValidationErrors {
    const errors: ValidationErrors = {};

    // Name
    const name = body.name?.trim() ?? '';
    if (!name) {
        errors.name = 'Name is required.';
    } else if (!NAME_REGEX.test(name)) {
        errors.name = 'Name must contain letters and spaces only.';
    } else if (name.length < 2) {
        errors.name = 'Name must be at least 2 characters.';
    } else if (name.length > 100) {
        errors.name = 'Name must not exceed 100 characters.';
    }

    // Email
    const email = body.email?.trim() ?? '';
    if (!email) {
        errors.email = 'Email address is required.';
    } else if (!EMAIL_REGEX.test(email)) {
        errors.email = 'Please enter a valid email address.';
    }

    // Message
    const message = body.message?.trim() ?? '';
    if (!message) {
        errors.message = 'Message is required.';
    } else if (message.length < 10) {
        errors.message = 'Message must be at least 10 characters.';
    } else if (message.length > 2000) {
        errors.message = 'Message must not exceed 2000 characters.';
    }

    return errors;
}

function respond(statusCode: number, body: object) {
    return {
        statusCode,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export const handler: Handler = async (event: HandlerEvent) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return respond(405, {
            success: false,
            message: 'Method not allowed. Use POST.',
        });
    }

    try {
        // Parse body
        let body: ContactBody;
        try {
            body = JSON.parse(event.body ?? '{}') as ContactBody;
        } catch {
            return respond(400, {
                success: false,
                message: 'Invalid request body. Expected JSON.',
            });
        }

        // Validate
        const errors = validate(body);
        if (Object.keys(errors).length > 0) {
            return respond(400, {
                success: false,
                message: 'Validation failed. Please fix the errors below.',
                errors,
            });
        }

        // ── In production, send an email here (Nodemailer, SendGrid, Resend, etc.)
        //    For now we return success after validation passes.

        return respond(200, {
            success: true,
            message: "Your message has been received. We'll be in touch shortly.",
        });

    } catch (err) {
        console.error('[contact-function] Unexpected error:', err);
        return respond(500, {
            success: false,
            message: 'Something went wrong on our end. Please try again later.',
        });
    }
};
