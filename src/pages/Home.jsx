/**
 * Homepage for SOHAR SAND INTERNATIONAL TRADING.
 * Process: compose hero, about preview, business highlights, product preview,
 * why-choose section, and closing call-to-action.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Handshake,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import about_image from '../assets/images/about-trading.jpg';
import cta_image from '../assets/images/cta-bg.jpg';
import '../styles/home.css';
import '../styles/pages.css';

/** Four homepage business highlight cards */
const business_highlights = [
  {
    title: 'Quality Commitment',
    description: 'A consistent focus on quality-oriented trading and careful customer alignment.',
    icon: ShieldCheck,
  },
  {
    title: 'Reliable Supply',
    description: 'Organised supply coordination that supports dependable business planning.',
    icon: Truck,
  },
  {
    title: 'Customer Relationships',
    description: 'Professional communication designed to build lasting commercial trust.',
    icon: Handshake,
  },
  {
    title: 'Business Excellence',
    description: 'A disciplined trading approach centred on clarity, reliability, and service.',
    icon: BadgeCheck,
  },
];

/** Why Choose Us supporting points */
const why_points = [
  {
    title: 'Customer-oriented approach',
    description: 'Every enquiry is handled with attention to practical business needs.',
    icon: Sparkles,
  },
  {
    title: 'Quality-focused business',
    description: 'Trading discussions prioritise suitable materials and clear expectations.',
    icon: ShieldCheck,
  },
  {
    title: 'Professional coordination',
    description: 'Supply and commercial follow-up are managed with structured communication.',
    icon: Truck,
  },
  {
    title: 'Reliable communication',
    description: 'Customers receive clear responses throughout the enquiry and coordination process.',
    icon: MessageSquare,
  },
  {
    title: 'Long-term business relationships',
    description: 'SSI aims to build partnerships based on trust and consistent service.',
    icon: Handshake,
  },
];

function Home() {
  // Homepage preview order for Materials and trading solutions (same row)
  const preview_product_ids = [
    'sulfur-granules',
    'urea-granules',
    'sulfur-lumps',
    'crude-oil-fob-cif',
  ];
  const preview_products = preview_product_ids
    .map((product_id) => products.find((item) => item.id === product_id))
    .filter(Boolean);

  // Restore homepage SEO title when returning from other routes
  useEffect(() => {
    document.title = 'SOHAR SAND INTERNATIONAL TRADING | SSI';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'SOHAR SAND INTERNATIONAL TRADING (SSI) — professional international trading company based in Al Buraimi, Sultanate of Oman. CR No. 1299862.'
      );
    }
  }, []);

  return (
    <div>
      <Hero />

      {/* About company preview */}
      <section className="section">
        <div className="container about_preview">
          <div className="about_preview_media fade_up">
            <img src={about_image} alt="Professional trading and logistics coordination" />
            <div className="about_preview_panel">
              <strong>SOHAR SAND INTERNATIONAL TRADING</strong>
              <span>Al Buraimi, Sultanate of Oman · CR No. 1299862</span>
            </div>
          </div>

          <div className="about_preview_copy">
            <SectionTitle
              eyebrow="Who We Are"
              title="An Oman-based trading company built on trust and professionalism"
              description="SOHAR SAND INTERNATIONAL TRADING supports customers through professional trading coordination and a clear commitment to reliable business relationships."
            />
            <ul className="about_list">
              <li>
                <CheckCircle2 size={18} /> Professional business approach
              </li>
              <li>
                <CheckCircle2 size={18} /> Customer-focused trading
              </li>
              <li>
                <CheckCircle2 size={18} /> Reliable business relationships
              </li>
              <li>
                <CheckCircle2 size={18} /> Commitment to quality
              </li>
              <li>
                <CheckCircle2 size={18} /> International business opportunities
              </li>
            </ul>
            <Link to="/about" className="btn btn_primary">
              Learn More About SSI <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Business highlights */}
      <section className="section section_muted">
        <div className="container">
          <SectionTitle
            center
            eyebrow="Business Highlights"
            title="What defines our trading approach"
            description="A clear focus on quality, reliability, and customer relationships across every engagement."
          />
          <div className="grid_4">
            {business_highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article className="highlight_card" key={item.title}>
                  <div className="highlight_icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Products"
            title="Materials and trading solutions"
            description="Explore an editable product catalogue that can be updated as SSI confirms its official product range."
          />
          <div className="product_grid product_grid_home">
            {preview_products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/products" className="btn btn_outline">
              View Full Catalogue <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section_muted">
        <div className="container why_grid">
          <div>
            <SectionTitle
              eyebrow="Why Choose Us"
              title="A partner focused on clarity, quality, and lasting cooperation"
              description="SSI works to create dependable trading experiences through professional coordination and customer commitment."
            />
            <Link to="/strength" className="btn btn_primary">
              Discover Our Strength <ArrowRight size={18} />
            </Link>
          </div>
          <div className="why_points">
            {why_points.map((item) => {
              const Icon = item.icon;
              return (
                <article className="why_point" key={item.title}>
                  <div className="why_point_icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section
        className="cta_band"
        style={{ backgroundImage: `linear-gradient(110deg, rgba(7, 31, 54, 0.92), rgba(28, 90, 171, 0.78)), url(${cta_image})` }}
      >
        <div className="container">
          <div>
            <h2>Looking for a Reliable Trading Partner?</h2>
            <p>
              Connect with SOHAR SAND INTERNATIONAL TRADING to discuss your business requirements.
            </p>
          </div>
          <Link to="/contact" className="btn btn_light">
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
