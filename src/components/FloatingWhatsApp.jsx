/**
 * Floating WhatsApp action button.
 * Process: render a fixed bottom-right WhatsApp brand icon that opens a chat
 * with the company's confirmed telephone number and a prefilled greeting.
 */

/** Confirmed SSI WhatsApp number in international format without plus sign */
const whatsapp_number = '96899311366';

/** Default greeting prefilled in the WhatsApp chat composer */
const whatsapp_message = encodeURIComponent(
  'Hello SOHAR SAND INTERNATIONAL TRADING, I would like to enquire about your trading services.'
);

function FloatingWhatsApp() {
  // Build the WhatsApp deep link with company number and enquiry message
  const whatsapp_url = `https://wa.me/${whatsapp_number}?text=${whatsapp_message}`;

  return (
    <a
      className="floating_whatsapp"
      href={whatsapp_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SSI on WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* Official WhatsApp brand mark for clear recognition */}
      <svg
        className="floating_whatsapp_icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M16.01 2.03C8.62 2.03 2.6 8.04 2.6 15.43c0 2.35.62 4.64 1.8 6.66L2 30l7.99-2.09a13.35 13.35 0 0 0 6.02 1.45h.01c7.39 0 13.4-6.01 13.4-13.4 0-3.58-1.39-6.94-3.92-9.47a13.33 13.33 0 0 0-9.49-3.46zm0 24.53h-.01a11.1 11.1 0 0 1-5.66-1.55l-.41-.24-4.74 1.24 1.26-4.62-.27-.47a11.1 11.1 0 0 1-1.7-5.92c0-6.13 4.99-11.12 11.13-11.12 2.97 0 5.77 1.16 7.87 3.26a11.07 11.07 0 0 1 3.25 7.86c0 6.14-4.99 11.12-11.12 11.12zm6.1-8.33c-.33-.17-1.97-.97-2.28-1.08-.3-.11-.53-.17-.75.17-.22.33-.87 1.08-1.06 1.3-.2.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-0.99-.88-1.65-1.97-1.85-2.3-.19-.33-.02-.51.15-.67.15-.15.33-.39.5-.58.17-.2.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.75-1.8-1.03-2.47-.27-.65-.55-.56-.75-.57h-.64c-.22 0-.58.08-.88.42-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.22 2.32 3.54 5.62 4.96 2.1.91 2.92.98 3.97.83.64-.1 1.97-.8 2.25-1.58.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39z"
        />
      </svg>
    </a>
  );
}

export default FloatingWhatsApp;
