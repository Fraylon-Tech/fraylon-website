# Contact API Cleanup

## What Was Changed

### 1. `netlify/functions/contact.ts` _(New File)_
A real Netlify Serverless Function to handle contact form submissions.

**Validation Rules:**
| Field | Rules |
|---|---|
| `name` | Required · 2–100 chars · Letters & spaces only |
| `email` | Required · Valid email format |
| `message` | Required · 10–2000 chars |

**Response Format:**

✅ Success `200`:
```json
{
  "success": true,
  "message": "Your message has been received. We'll be in touch shortly."
}
```

❌ Validation Error `400`:
```json
{
  "success": false,
  "message": "Validation failed. Please fix the errors below.",
  "errors": {
    "name": "Name must be at least 2 characters.",
    "email": "Please enter a valid email address."
  }
}
```

❌ Wrong Method `405`:
```json
{ "success": false, "message": "Method not allowed. Use POST." }
```

❌ Server Error `500`:
```json
{ "success": false, "message": "Something went wrong on our end. Please try again later." }
```

---

### 2. `netlify.toml` _(Modified)_
Added the `[functions]` block so Netlify registers the function directory:
```toml
[functions]
  directory = "netlify/functions"
```

---

### 3. `src/pages/Contact.tsx` _(Modified)_
| Before | After |
|---|---|
| Fake `setTimeout` mock | Real `fetch('/.netlify/functions/contact')` |
| No validation | Client-side validation before submit |
| No error messages | Per-field errors on blur, clear on change |
| HTML `required` only | Full JS validation with user-friendly messages |
| No API error handling | Error banner if server fails |

---

### 4. `src/pages/Contact.css` _(Modified)_
Three new CSS classes added:
- `.form-input--error` — Red border on invalid fields
- `.form-error-text` — Red helper text below each field
- `.form-api-error` — Error banner for server-level failures

---

## How to Test

### Option A — With Netlify Dev (Full Function Testing)

```bash
# Step 1: Install Netlify CLI (one-time)
npm install -g netlify-cli

# Step 2: Run local dev server with functions
netlify dev
```
Then open **http://localhost:8888/contact**

---

### Option B — Vite Only (UI Testing, no real API)

```bash
npm run dev
```
Open **http://localhost:5173/contact**

> Note: The fetch will fail since the function isn't running, but all **client-side validations** (field errors, blur feedback, error clearing) work fine.

---

### Test Cases

| Test | Steps | Expected Result |
|---|---|---|
| Empty submit | Click "Send Message" without filling anything | All 3 fields show red errors |
| Short name | Type `A` → click outside | "Name must be at least 2 characters." |
| Bad name | Type `John123` → click outside | "Name must contain letters and spaces only." |
| Invalid email | Type `notanemail` → click outside | "Please enter a valid email address." |
| Short message | Type `Hi` → click outside | "Message must be at least 10 characters." |
| Error clears | Type in a field that has an error | Error disappears immediately |
| Valid submit | Fill all fields correctly → submit | Success card: "Message Sent!" |
| Send Another | Click "Send Another" on success card | Form resets cleanly |

---

## Build Verification

```bash
# TypeScript check + production build
npm run build

# Lint check
npm run lint
```

Both pass with **exit code 0**.
