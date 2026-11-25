/**
 * Contact Us page for SOHAR SAND INTERNATIONAL TRADING.
 * Process: present invitation copy, confirmed Get in Touch details, enquiry form,
 * and a closing commitment statement using verified company contact information.
 */
import { useEffect } from 'react';
import { Building2, MapPin, Phone, Mailbox } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import contact_image from '../assets/images/cta-bg.jpg';
import '../styles/pages.css';

function Contact() {
  // SEO metadata for the contact page
  useEffect(() => {
    document.title = 'Contact Us | SOHAR SAND INTERNATIONAL TRADING';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Contact SOHAR SAND INTERNATIONAL TRADING in Sohar, Sultanate of Oman. Tel: +968 99311366 / +968 90602477. P.O. Box 514/54.'
      );
    }
  }, []);

  return (
    <div className="page_shell">
      <section
        className="page_banner"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(7, 31, 54, 0.88), rgba(28, 90, 171, 0.72)), url(${contact_image})`,
        }}
      >
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let&apos;s Build Business Together</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Contact"
            title="Let's Build Business Together"
            description="We welcome your enquiries and business opportunities. Contact SOHAR SAND INTERNATIONAL TRADING to discuss your requirements and explore opportunities for cooperation."
          />

          <div className="contact_layout">
            {/* Confirmed Get in Touch details */}
            <aside className="contact_info_card">
              <h2>Get in Touch</h2>
              <p>
                <strong>SOHAR SAND INTERNATIONAL TRADING</strong>
              </p>
              <ul className="contact_info_list">
                <li>
                  <MapPin size={20} />
                  <div>
                    <strong>Location</strong>
                    <br />
                    Sohar, Sultanate of Oman
                  </div>
                </li>
                <li>
                  <Mailbox size={20} />
                  <div>
                    <strong>P.O. Box</strong>
                    <br />
                    514/54
                  </div>
                </li>
                <li>
                  <Phone size={20} />
                  <div>
                    <strong>Telephone</strong>
                    <br />
                    <a href="tel:+96899311366">+968 99311366</a>
                  </div>
                </li>
                <li>
                  <Phone size={20} />
                  <div>
                    <strong>Telephone</strong>
                    <br />
                    <a href="tel:+96890602477">+968 90602477</a>
                  </div>
                </li>
                <li>
                  <Building2 size={20} />
                  <div>
                    <strong>Company</strong>
                    <br />
                    SOHAR SAND INTERNATIONAL TRADING
                  </div>
                </li>
              </ul>
            </aside>

            {/* Enquiry form section */}
            <div>
              <SectionTitle
                eyebrow="Enquiry"
                title="Send Us an Enquiry"
                description="We would be pleased to hear from you. Submit your enquiry using the contact form, and our team can follow up with you."
              />
              <ContactForm />
            </div>
          </div>

          {/* Google Map for confirmed Sohar location */}
          <div className="map_section">
            <SectionTitle
              eyebrow="Location"
              title="Find Us in Sohar"
              description="SOHAR SAND INTERNATIONAL TRADING — Sohar, Sultanate of Oman. P.O. Box 514/54."
            />
            <div className="map_frame">
              <iframe
                title="SOHAR SAND INTERNATIONAL TRADING location map - Sohar, Oman"
                src="https://www.google.com/maps?q=Sohar,+Sultanate+of+Oman&hl=en&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Closing commitment statement */}
          <div className="registration_box" style={{ marginTop: '2.5rem' }}>
            <h3>Our Commitment</h3>
            <p>
              Building reliable business relationships through professional communication and
              customer-focused service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
