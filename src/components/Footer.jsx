/**
 * Premium corporate footer for SSI.
 * Process: show footer logo, short description, quick links, product links,
 * confirmed contact details, and copyright. Social links are omitted until
 * official accounts are supplied.
 */
import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mailbox } from 'lucide-react';
import logo_footer from '../assets/logo_footer.png';
import { products } from '../data/products';
import '../styles/footer.css';

function Footer() {
  // Limit product links to a short, maintainable preview list
  const product_links = products.slice(0, 4);

  return (
    <footer className="footer">
      <div className="container footer_grid">
        {/* Brand column with horizontal footer logo */}
        <div className="footer_brand">
          <img
            src={logo_footer}
            alt="SOHAR SAND INTERNATIONAL TRADING - Sultanate of Oman"
          />
          <p>
            SOHAR SAND INTERNATIONAL TRADING is an Oman-based trading company focused on
            professional coordination, customer relationships, and quality-oriented business
            solutions.
          </p>
        </div>

        {/* Quick page navigation */}
        <div>
          <h3 className="footer_title">Quick Links</h3>
          <div className="footer_links">
            <Link to="/">Home</Link>
            <Link to="/certification">Certification</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Product shortcuts from centralized data */}
        <div>
          <h3 className="footer_title">Products</h3>
          <div className="footer_links">
            {product_links.map((item) => (
              <Link key={item.id} to={`/products#${item.id}`}>
                {item.name}
              </Link>
            ))}
            <Link to="/products">View All Products</Link>
          </div>
        </div>

        {/* Confirmed contact information */}
        <div>
          <h3 className="footer_title">Contact Information</h3>
          <div className="footer_contact">
            <div className="footer_contact_item">
              <Building2 size={18} />
              <span>SOHAR SAND INTERNATIONAL TRADING</span>
            </div>
            <div className="footer_contact_item">
              <MapPin size={18} />
              <span>Sohar, Sultanate of Oman</span>
            </div>
            <div className="footer_contact_item">
              <Mailbox size={18} />
              <span>P.O. Box: 514/54</span>
            </div>
            <div className="footer_contact_item">
              <Phone size={18} />
              <a href="tel:+96899311366">+968 99311366</a>
            </div>
            <div className="footer_contact_item">
              <Phone size={18} />
              <a href="tel:+96890602477">+968 90602477</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer_bottom">
        <span>© 2026 SOHAR SAND INTERNATIONAL TRADING. All Rights Reserved.</span>
        <span>SSI | Sohar, Oman | CR No. 1299862</span>
      </div>
    </footer>
  );
}

export default Footer;
