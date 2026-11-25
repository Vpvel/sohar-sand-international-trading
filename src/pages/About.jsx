/**
 * About Us page for SOHAR SAND INTERNATIONAL TRADING.
 * Process: present company introduction, vision, mission, values, business
 * approach, and confirmed commercial registration details only.
 */
import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { core_values } from '../data/services';
import about_image from '../assets/images/about-trading.jpg';
import '../styles/pages.css';

function About() {
  // Set page-level SEO title and description
  useEffect(() => {
    document.title = 'About Us | SOHAR SAND INTERNATIONAL TRADING';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Learn about SOHAR SAND INTERNATIONAL TRADING (SSI), an Oman-based trading company in Al Buraimi. CR No. 1299862.'
      );
    }
  }, []);

  return (
    <div className="page_shell">
      <section
        className="page_banner"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(7, 31, 54, 0.88), rgba(28, 90, 171, 0.72)), url(${about_image})`,
        }}
      >
        <div className="container">
          <h1>About Us</h1>
          <p>
            A professional trading company based in Al Buraimi, Sultanate of Oman, focused on
            reliable business relationships and customer-centred solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Company Introduction"
            title="SOHAR SAND INTERNATIONAL TRADING"
            description="SSI is an Oman-based trading company committed to professional coordination, quality-focused business practices, and dependable customer engagement."
          />

          <div className="content_block">
            <p>
              SOHAR SAND INTERNATIONAL TRADING operates from Al Buraimi in the Sultanate of Oman.
              The company supports customers through structured trading discussions, clear
              communication, and a practical approach to business requirements.
            </p>
            <p>
              SSI focuses on building reliable commercial relationships. Content on this website is
              limited to confirmed company details and maintainable business information, without
              fabricated history, certifications, or unverified claims.
            </p>
          </div>

          <div className="grid_2" style={{ marginTop: '2.5rem' }}>
            <article className="value_card">
              <h3>Our Vision</h3>
              <p>
                To be recognised as a trusted trading partner known for professionalism, reliability,
                and customer commitment in regional and international business engagements.
              </p>
            </article>
            <article className="value_card">
              <h3>Our Mission</h3>
              <p>
                To deliver professional trading coordination that helps customers meet their business
                requirements through clear communication, quality focus, and dependable service.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section_muted">
        <div className="container">
          <SectionTitle
            center
            eyebrow="Our Core Values"
            title="Principles that guide every engagement"
            description="SSI’s values shape how the company approaches trading discussions and customer relationships."
          />
          <div className="values_grid">
            {core_values.map((item) => (
              <article className="value_card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid_2">
          <div>
            <SectionTitle
              eyebrow="Our Business Approach"
              title="Clear, practical, and customer-focused trading"
            />
            <div className="content_block">
              <p>
                SSI works with customers to understand requirements, discuss suitable trading options,
                and coordinate next steps with professionalism and transparency.
              </p>
              <p>
                The company’s approach emphasises quality, reliability, and long-term cooperation
                rather than short-term transactions alone.
              </p>
            </div>
          </div>

          <div className="registration_box">
            <h3>Company Registration Information</h3>
            <p>
              <strong>Company Name:</strong> SOHAR SAND INTERNATIONAL TRADING
            </p>
            <p>
              <strong>Location:</strong> Al Buraimi, Sultanate of Oman
            </p>
            <p>
              <strong>Commercial Registration:</strong> CR No. 1299862
            </p>
            <p>
              Additional contact channels and a verified street address will be published once
              officially confirmed by the company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
