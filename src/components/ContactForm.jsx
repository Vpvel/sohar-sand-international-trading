/**
 * Contact enquiry form with client-side validation.
 * Process: collect visitor details, validate required fields, surface success
 * or error messages, and keep content editable for future backend wiring.
 * Note: submission is handled locally until a verified mail endpoint is connected.
 */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/pages.css';

/** Initial empty form values */
const initial_form = {
  full_name: '',
  company_name: '',
  email_address: '',
  phone_number: '',
  subject: '',
  message: '',
};

/** Basic email pattern for client-side validation */
const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  // Form field values
  const [form_data, set_form_data] = useState(initial_form);
  // Field-level validation messages
  const [errors, set_errors] = useState({});
  // Overall submission feedback for the user
  const [form_status, set_form_status] = useState({ type: '', message: '' });
  // Optional subject prefill from product enquiry links
  const [search_params] = useSearchParams();

  // Prefill subject when arriving from a product enquiry CTA
  useEffect(() => {
    const subject_param = search_params.get('subject');
    if (subject_param) {
      set_form_data((prev) => ({ ...prev, subject: subject_param }));
    }
  }, [search_params]);

  /** Updates a single form field and clears its previous error */
  const handle_change = (event) => {
    const { name, value } = event.target;
    set_form_data((prev) => ({ ...prev, [name]: value }));
    set_errors((prev) => ({ ...prev, [name]: '' }));
    set_form_status({ type: '', message: '' });
  };

  /** Validates all required fields and returns an error map */
  const validate_form = () => {
    const next_errors = {};

    if (!form_data.full_name.trim()) {
      next_errors.full_name = 'Full name is required.';
    }

    if (!form_data.company_name.trim()) {
      next_errors.company_name = 'Company name is required.';
    }

    if (!form_data.email_address.trim()) {
      next_errors.email_address = 'Email address is required.';
    } else if (!email_pattern.test(form_data.email_address.trim())) {
      next_errors.email_address = 'Please enter a valid email address.';
    }

    if (!form_data.phone_number.trim()) {
      next_errors.phone_number = 'Phone number is required.';
    } else if (form_data.phone_number.trim().length < 7) {
      next_errors.phone_number = 'Please enter a valid phone number.';
    }

    if (!form_data.subject.trim()) {
      next_errors.subject = 'Subject is required.';
    }

    if (!form_data.message.trim()) {
      next_errors.message = 'Message is required.';
    } else if (form_data.message.trim().length < 10) {
      next_errors.message = 'Please provide a message of at least 10 characters.';
    }

    return next_errors;
  };

  /** Handles form submission with validation and local success feedback */
  const handle_submit = (event) => {
    event.preventDefault();
    const validation_errors = validate_form();

    if (Object.keys(validation_errors).length > 0) {
      set_errors(validation_errors);
      set_form_status({
        type: 'error',
        message: 'Please correct the highlighted fields and try again.',
      });
      return;
    }

    // Local success handling until a verified mail endpoint is connected
    set_form_status({
      type: 'success',
      message:
        'Thank you. Your enquiry has been submitted successfully. Our team will follow up with you shortly.',
    });
    set_form_data(initial_form);
    set_errors({});
  };

  return (
    <form className="contact_form" onSubmit={handle_submit} noValidate>
      <div className="form_grid">
        <div className="form_field">
          <label htmlFor="full_name">Full Name</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            value={form_data.full_name}
            onChange={handle_change}
            placeholder="Enter your full name"
          />
          {errors.full_name ? <span className="field_error">{errors.full_name}</span> : null}
        </div>

        <div className="form_field">
          <label htmlFor="company_name">Company Name</label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            value={form_data.company_name}
            onChange={handle_change}
            placeholder="Enter your company name"
          />
          {errors.company_name ? <span className="field_error">{errors.company_name}</span> : null}
        </div>

        <div className="form_field">
          <label htmlFor="email_address">Email Address</label>
          <input
            id="email_address"
            name="email_address"
            type="email"
            value={form_data.email_address}
            onChange={handle_change}
            placeholder="Enter your email address"
          />
          {errors.email_address ? (
            <span className="field_error">{errors.email_address}</span>
          ) : null}
        </div>

        <div className="form_field">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            id="phone_number"
            name="phone_number"
            type="tel"
            value={form_data.phone_number}
            onChange={handle_change}
            placeholder="Enter your phone number"
          />
          {errors.phone_number ? <span className="field_error">{errors.phone_number}</span> : null}
        </div>

        <div className="form_field full">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form_data.subject}
            onChange={handle_change}
            placeholder="What is your enquiry about?"
          />
          {errors.subject ? <span className="field_error">{errors.subject}</span> : null}
        </div>

        <div className="form_field full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form_data.message}
            onChange={handle_change}
            placeholder="Share your requirements or questions"
          />
          {errors.message ? <span className="field_error">{errors.message}</span> : null}
        </div>
      </div>

      <button type="submit" className="btn btn_primary" style={{ marginTop: '1.2rem' }}>
        Submit Enquiry
      </button>

      {/* Success or error summary for accessibility and clarity */}
      {form_status.message ? (
        <div className={`form_message ${form_status.type}`} role="status">
          {form_status.message}
        </div>
      ) : null}
    </form>
  );
}

export default ContactForm;
