/**
 * Scroll restoration helper for React Router navigation.
 * Process: scroll the window to the top whenever the pathname changes.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Read current location pathname from the router
  const { pathname } = useLocation();

  // Reset scroll position on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
