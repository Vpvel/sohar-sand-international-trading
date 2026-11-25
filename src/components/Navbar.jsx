/**
 * Sticky responsive navigation bar for SSI.
 * Process: render logo, desktop/mobile navigation links, and a hamburger
 * drawer that closes on route change or overlay click.
 */
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
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
  // Tracks scroll state for subtle sticky navbar elevation
  const [is_scrolled, set_is_scrolled] = useState(false);
  // Current route used to close the mobile menu after navigation
  const location = useLocation();

  // Close mobile menu whenever the active route changes
  useEffect(() => {
    set_menu_open(false);
  }, [location.pathname]);

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

  return (
    <header className={`navbar ${is_scrolled ? 'navbar_scrolled' : ''}`}>
      <div className="container navbar_inner">
        {/* Brand mark linking back to the homepage */}
        <Link to="/" className="navbar_logo" aria-label="SOHAR SAND INTERNATIONAL TRADING home">
          <img src={logo} alt="SSI - SOHAR SAND INTERNATIONAL TRADING" />
        </Link>

        {/* Desktop and mobile navigation links */}
        <nav className={`navbar_links ${menu_open ? 'open' : ''}`} aria-label="Main navigation">
          {nav_links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
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
