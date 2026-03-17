

## Plan: Integrate EmailJS with Contact Form

Since the EmailJS public key, template ID, and service ID are all **public/publishable keys**, they can be stored directly in the codebase.

### Changes

**1. Install `@emailjs/browser` package**

**2. Update `src/components/ContactSection.tsx`**
- Import `emailjs` from `@emailjs/browser`
- Add a `sending` state for loading feedback
- Replace the `onSubmit` handler to call `emailjs.send()` with:
  - Service ID: `service_4pr55p9`
  - Template ID: `template_yec0bjt`
  - Public Key: `wUFrzEd1gDMTiUbDR`
  - Template params: `{ from_name, from_email, message }`
- Show success/error feedback using `sonner` toast
- Disable button and show spinner while sending
- Clear form on success

