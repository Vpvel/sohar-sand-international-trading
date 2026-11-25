/**
 * Services page describing confirmed SSI trading and supply activities.
 * Process: render editable service panels from centralized data with icons
 * and supporting points, avoiding unverified service claims.
 */
import { useEffect } from 'react';
import {
  CheckCircle2,
  Handshake,
  Package,
  Search,
  Truck,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data/services';
import services_image from '../assets/images/services-supply.jpg';
import '../styles/pages.css';

/** Maps string icon names from data to Lucide components */
const icon_map = {
  Package,
  Truck,
  Search,
  Handshake,
};

function Services() {
  // SEO metadata for the services page
  useEffect(() => {
    document.title = 'Services | SOHAR SAND INTERNATIONAL TRADING';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Explore trading and supply coordination services from SOHAR SAND INTERNATIONAL TRADING in Al Buraimi, Oman.'
      );
    }
  }, []);

  return (
    <div className="page_shell">
      <section
        className="page_banner"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(7, 31, 54, 0.88), rgba(28, 90, 171, 0.72)), url(${services_image})`,
        }}
      >
        <div className="container">
          <h1>Services</h1>
          <p>
            Professional trading and supply coordination activities designed around customer
            requirements and clear commercial communication.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="What We Offer"
            title="Trading and supply support for business customers"
            description="Service descriptions are editable and limited to activities aligned with SSI’s trading focus."
          />

          <div className="service_stack">
            {services.map((service) => {
              const Icon = icon_map[service.icon] || Package;
              return (
                <article className="service_panel" key={service.id}>
                  <div className="service_panel_icon">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className="service_points">
                      {service.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
