/**
 * Root application shell for SOHAR SAND INTERNATIONAL TRADING.
 * Process: configure React Router routes, wrap pages with sticky navbar and
 * corporate footer, and restore scroll position on navigation.
 */
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Strength from './pages/Strength';
import Contact from './pages/Contact';
import Certification from './pages/Certification';

function App() {
  return (
    <>
      {/* Smooth scroll reset on route changes */}
      <ScrollToTop />
      {/* Sticky site navigation */}
      <Navbar />
      {/* Page content area */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:product_id" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/strength" element={<Strength />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* Corporate footer with registration details */}
      <Footer />
      {/* Fixed WhatsApp brand icon on all pages */}
      <FloatingWhatsApp />
    </>
  );
}

export default App;
