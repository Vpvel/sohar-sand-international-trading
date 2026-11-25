/**
 * Certification page for SOHAR SAND INTERNATIONAL TRADING.
 * Process: show a compact professional two-column preview of the Commercial
 * Registration Certificate pages with clear alignment and full-view links.
 */
import { useEffect } from 'react';
import { ExternalLink, FileCheck2 } from 'lucide-react';
import certificate_page_one from '../assets/sohar_company_details_page_2.png';
import certificate_page_two from '../assets/sohar_company_details_page_3.png';
import banner_image from '../assets/images/cta-bg.jpg';
import '../styles/pages.css';

/** Official Commercial Registration Certificate document pages */
const certificate_pages = [
  {
    id: 'cr_page_1',
    label: 'Page 1 of 2',
    title: 'Registration Details',
    image: certificate_page_one,
    alt: 'SOHAR SAND INTERNATIONAL TRADING Commercial Registration Certificate page 1',
  },
  {
    id: 'cr_page_2',
    label: 'Page 2 of 2',
    title: 'Authorized Signatories',
    image: certificate_page_two,
    alt: 'SOHAR SAND INTERNATIONAL TRADING Commercial Registration Certificate page 2',
  },
];

function Certification() {
  // SEO metadata for the certification page
  useEffect(() => {
    document.title = 'Certification | SOHAR SAND INTERNATIONAL TRADING';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'View the Commercial Registration Certificate for SOHAR SAND INTERNATIONAL TRADING. CR No. 1299862, Sultanate of Oman.'
      );
    }
  }, []);

  return (
    <div className="page_shell">
      <section
        className="page_banner page_banner_compact"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(7, 31, 54, 0.88), rgba(28, 90, 171, 0.72)), url(${banner_image})`,
        }}
      >
        <div className="container">
          <h1>Certification</h1>
          <p>Official Commercial Registration Certificate — CR No. 1299862</p>
        </div>
      </section>

      <section className="section section_cert">
        <div className="container">
          {/* Compact certificate summary strip */}
          <div className="certificate_summary">
            <div className="certificate_summary_icon">
              <FileCheck2 size={22} />
            </div>
            <div>
              <h2>Commercial Registration Certificate</h2>
              <p>
                SOHAR SAND INTERNATIONAL TRADING · Oman Business Platform · Ministry of Commerce,
                Industry & Investment Promotion
              </p>
            </div>
          </div>

          {/* Side-by-side professional preview cards */}
          <div className="certificate_grid">
            {certificate_pages.map((page) => (
              <article className="certificate_card" key={page.id}>
                <div className="certificate_card_head">
                  <div>
                    <span className="certificate_label">{page.label}</span>
                    <h3>{page.title}</h3>
                  </div>
                  <a
                    href={page.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate_view_btn"
                  >
                    View Full <ExternalLink size={15} />
                  </a>
                </div>

                <a
                  href={page.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate_preview"
                  aria-label={`Open ${page.title} full document`}
                >
                  <img src={page.image} alt={page.alt} loading="lazy" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certification;
