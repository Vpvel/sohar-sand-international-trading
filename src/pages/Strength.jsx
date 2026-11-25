/**
 * Our Strength page highlighting SSI’s business differentiators.
 * Process: present quality, reliability, service, coordination, and relationship
 * strengths with icons and a supporting corporate image.
 */
import { useEffect } from 'react';
import {
  BadgeCheck,
  Headphones,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { strengths } from '../data/services';
import strength_image from '../assets/images/strength-quality.jpg';
import '../styles/pages.css';

/** Maps strength icon names from data to Lucide components */
const icon_map = {
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Network,
  Users,
};

function Strength() {
  // SEO metadata for the strength page
  useEffect(() => {
    document.title = 'Our Strength | SOHAR SAND INTERNATIONAL TRADING';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Discover the strengths of SOHAR SAND INTERNATIONAL TRADING: quality commitment, reliability, customer service, and professional relationships.'
      );
    }
  }, []);

  return (
    <div className="page_shell">
      <section
        className="page_banner"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(7, 31, 54, 0.88), rgba(28, 90, 171, 0.72)), url(${strength_image})`,
        }}
      >
        <div className="container">
          <h1>Our Strength</h1>
          <p>
            A clean corporate view of the principles that support SSI’s trading relationships and
            customer commitment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container strength_layout">
          <div className="strength_media">
            <img
              src={strength_image}
              alt="Professional business coordination and quality commitment"
            />
          </div>

          <div>
            <SectionTitle
              eyebrow="Why Partners Work With SSI"
              title="Strengths that support dependable trading relationships"
              description="SSI focuses on practical strengths that matter in international and regional trading engagements."
            />
            <div className="strength_cards">
              {strengths.map((item) => {
                const Icon = icon_map[item.icon] || ShieldCheck;
                return (
                  <article className="strength_card" key={item.id}>
                    <div className="highlight_icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div style={{ marginTop: '1.6rem' }}>
              <Link to="/contact" className="btn btn_primary">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Strength;
