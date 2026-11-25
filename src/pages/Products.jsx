/**
 * Products catalogue and product detail views.
 * Process: filter products by category from centralized data, render cards,
 * and show a detail page with specifications and enquiry CTA.
 */
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import {
  get_product_by_id,
  get_products_by_category,
  product_categories,
} from '../data/products';
import product_banner from '../assets/images/product-materials.jpg';
import '../styles/pages.css';

function Products() {
  // Optional product id from nested route for detail view
  const { product_id } = useParams();
  // Active category filter for the catalogue view
  const [active_category, set_active_category] = useState('all');

  // Resolve selected product when viewing details
  const selected_product = useMemo(
    () => (product_id ? get_product_by_id(product_id) : null),
    [product_id]
  );

  // Filtered list for the catalogue grid
  const filtered_products = useMemo(
    () => get_products_by_category(active_category),
    [active_category]
  );

  // Update document title based on catalogue or detail mode
  useEffect(() => {
    if (selected_product) {
      document.title = `${selected_product.name} | SOHAR SAND INTERNATIONAL TRADING`;
    } else {
      document.title = 'Products | SOHAR SAND INTERNATIONAL TRADING';
    }
  }, [selected_product]);

  // Scroll to a product card when arriving via footer hash links
  useEffect(() => {
    if (product_id) {
      return;
    }
    const hash_id = window.location.hash.replace('#', '');
    if (!hash_id) {
      return;
    }
    const target = document.getElementById(hash_id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [product_id, filtered_products]);

  // Product detail page when a valid id is present
  if (product_id) {
    if (!selected_product) {
      return (
        <div className="page_shell section">
          <div className="container">
            <SectionTitle
              title="Product not found"
              description="The requested product could not be located. Please return to the catalogue."
            />
            <Link to="/products" className="btn btn_primary">
              Back to Products
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="page_shell">
        <section
          className="page_banner"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(7, 31, 54, 0.88), rgba(28, 90, 171, 0.72)), url(${selected_product.image})`,
          }}
        >
          <div className="container">
            <h1>{selected_product.name}</h1>
            <p>{selected_product.short_description}</p>
          </div>
        </section>

        <section className="section">
          <div className="container product_detail">
            <div className="product_detail_media">
              <img src={selected_product.image} alt={selected_product.name} />
            </div>
            <div className="product_detail_copy">
              <h2>{selected_product.name}</h2>
              <p>{selected_product.description}</p>
              <h3>Specifications</h3>
              <ul className="spec_list">
                {selected_product.specifications.map((spec) => (
                  <li key={spec}>
                    <CheckCircle2 size={18} />
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="btn_group">
                <Link
                  to={`/contact?subject=${encodeURIComponent(`Enquiry: ${selected_product.name}`)}`}
                  className="btn btn_primary"
                >
                  Request Enquiry
                </Link>
                <Link to="/products" className="btn btn_outline">
                  Back to Catalogue
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Default catalogue page with category filtering
  return (
    <div className="page_shell">
      <section
        className="page_banner"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(7, 31, 54, 0.88), rgba(28, 90, 171, 0.72)), url(${product_banner})`,
        }}
      >
        <div className="container">
          <h1>Products</h1>
          <p>
            Browse the editable SSI product catalogue. Names and specifications can be updated as
            the company confirms its official product range.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Catalogue"
            title="Materials and trading solutions"
            description="Use category filters to explore available product groups. All catalogue content is maintained from a centralized data file."
          />

          <div className="product_filters" role="tablist" aria-label="Product categories">
            {product_categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={active_category === category.id ? 'active' : ''}
                onClick={() => set_active_category(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="product_grid">
            {filtered_products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
