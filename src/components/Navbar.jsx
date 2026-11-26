/**
 * Sticky responsive navigation bar for SSI.
 * Process: render logo, desktop/mobile navigation links, Products dropdown
 * from the petroleum catalogue, and a hamburger drawer that closes on route
 * change or overlay click.
 */
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { products } from '../data/products';
import '../styles/navbar.css';

/** Primary website navigation destinations */
const nav_links = [
  { path: '/', label: 'Home' },
  { path: '/certification', label: 'Certification' },
  { path: '/contact', label: 'Contact Us' },
];

function Navbar() {
  // Tracks whether the mobile menu drawer is open
  const [menu_open, set_menu_open] = useState(false);
  // Tracks whether the Products dropdown menu is open
  const [products_open, set_products_open] = useState(false);
  // Tracks scroll state for subtle sticky navbar elevation
  const [is_scrolled, set_is_scrolled] = useState(false);
  // Current route used to close menus after navigation
  const location = useLocation();

  // Close all menus whenever the active route changes
  useEffect(() => {
    set_menu_open(false);
    set_products_open(false);
  }, [location.pathname, location.hash]);

  // Add scrolled styling when the page moves past the top
  useEffect(() => {
    const handle_scroll = () => {
      set_is_scrolled(window.scrollY > 12);
    };

    handle_scroll();
    window.addEventListener('scroll', handle_scroll);
    return () => window.removeEventListener('scroll', handle_scroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menu_open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menu_open]);

  // Toggle Products dropdown open or closed
  const toggle_products_menu = () => {
    set_products_open((open) => !open);
  };

  return (
    <header className={`navbar ${is_scrolled ? 'navbar_scrolled' : ''}`}>
      <div className="container navbar_inner">
        {/* Brand mark linking back to the homepage */}
        <Link to="/" className="navbar_logo" aria-label="SOHAR SAND INTERNATIONAL TRADING home">
          <img src={logo} alt="SSI - SOHAR SAND INTERNATIONAL TRADING" />
        </Link>

        {/* Desktop and mobile navigation links */}
        <nav className={`navbar_links ${menu_open ? 'open' : ''}`} aria-label="Main navigation">
          {/* Home link rendered first */}
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>

          {/* Products menu with petroleum catalogue dropdown */}
          <div
            className={`nav_dropdown ${products_open ? 'open' : ''}`}
            onMouseEnter={() => set_products_open(true)}
            onMouseLeave={() => set_products_open(false)}
          >
            <button
              type="button"
              className={`nav_dropdown_trigger ${location.pathname.startsWith('/products') ? 'active' : ''}`}
              aria-expanded={products_open}
              aria-haspopup="true"
              onClick={toggle_products_menu}
            >
              Products
              <ChevronDown size={16} className="nav_dropdown_chevron" />
            </button>

            <div className="nav_dropdown_menu" role="menu" aria-label="Product catalogue">
              {/* Category heading for the scrollable products menu */}
              <div className="nav_dropdown_heading">Products</div>

              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="nav_dropdown_item"
                  role="menuitem"
                  onClick={() => set_products_open(false)}
                >
                  {product.name}
                </Link>
              ))}

              {/* Shortcut to the full products catalogue page */}
              <Link
                to="/products"
                className="nav_dropdown_item nav_dropdown_all"
                role="menuitem"
                onClick={() => set_products_open(false)}
              >
                View All Products
              </Link>
            </div>
          </div>

          {/* Remaining primary destinations after Products */}
          {nav_links
            .filter((item) => item.path !== '/')
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
        </nav>

        <div className="navbar_actions">
          {/* Hamburger toggle for small screens */}
          <button
            type="button"
            className="navbar_toggle"
            aria-label={menu_open ? 'Close menu' : 'Open menu'}
            aria-expanded={menu_open}
            onClick={() => set_menu_open((open) => !open)}
          >
            {menu_open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Dimmed overlay behind the open mobile menu */}
      <div
        className={`navbar_overlay ${menu_open ? 'open' : ''}`}
        onClick={() => set_menu_open(false)}
        aria-hidden="true"
      />
    </header>
  );
}

export default Navbar;
