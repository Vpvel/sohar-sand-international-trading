/**
 * Product card used on homepage and Products catalogue pages.
 * Process: show product image, name, short description, and action buttons for
 * details navigation and enquiry requests.
 */
import { Link } from 'react-router-dom';
import '../styles/pages.css';

function ProductCard({ product }) {
  return (
    <article className="product_card" id={product.id}>
      {/* Product photograph */}
      <div className="product_card_image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product_card_body">
        <h3>{product.name}</h3>
        <p>{product.short_description}</p>

        {/* Interactive actions kept inside the card container */}
        <div className="product_card_actions">
          <Link to={`/products/${product.id}`} className="btn btn_outline">
            View Details
          </Link>
          <Link
            to={`/contact?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}`}
            className="btn btn_primary"
          >
            Request Enquiry
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
