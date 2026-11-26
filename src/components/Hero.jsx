/**
 * Full-bleed homepage hero with ad-style motion design.
 * Process: auto-slide banner images, play cinematic left-aligned text reveals,
 * show a progress indicator, and keep CTAs visually prominent.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import banner_one from '../assets/banner_image/banner_images_1.jpg';
import banner_two from '../assets/banner_image/banner_images_2.jpg';
import banner_three from '../assets/banner_image/banner_images_3.jpg';
import banner_four from '../assets/banner_image/banner_images_4.png';
import banner_five from '../assets/banner_image/banner_images_5.png';
import banner_six from '../assets/banner_image/banner_images_6.png';
import '../styles/home.css';

/**
 * Homepage banner slides matched to banner_image folder count (6 images).
 * Each slide title and subtitle follows the visual focus of its banner.
 */
const banner_slides = [
  {
    id: 'banner_one',
    image: banner_one,
    eyebrow: 'SOHAR SAND INTERNATIONAL TRADING',
    title: 'Your Trusted Partner in Petroleum Trading',
    subtitle:
      'SSI delivers reliable international trading across petroleum products, energy commodities, and customer-focused supply solutions.',
  },
  {
    id: 'banner_two',
    image: banner_two,
    eyebrow: 'BITUMEN SUPPLY',
    title: 'Bitumen 60/70',
    subtitle:
      'High-quality bitumen for road construction, waterproofing, and industrial applications, traded with dependable supply coordination.',
  },
  {
    id: 'banner_three',
    image: banner_three,
    eyebrow: 'CHEMICAL PRODUCTS',
    title: 'Sulfur & Urea Granules',
    subtitle:
      'Sulfur granules, sulfur lumps, and urea granules supplied for agricultural, industrial, and chemical trading requirements.',
  },
  {
    id: 'banner_four',
    image: banner_four,
    eyebrow: 'SULFUR LUMPS',
    title: 'Sulfur Lumps',
    subtitle:
      'Quality sulfur lumps traded for industrial, chemical, and agricultural processing needs with reliable supply coordination.',
  },
  {
    id: 'banner_five',
    image: banner_five,
    eyebrow: 'SULFUR GRANULES',
    title: 'Sulfur Granules',
    subtitle:
      'Sulfur granules supplied for fertilizer and industrial applications through professional international trading support.',
  },
  {
    id: 'banner_six',
    image: banner_six,
    eyebrow: 'UREA GRANULES',
    title: 'Urea Granules',
    subtitle:
      'Urea granules traded for agricultural fertilizer and industrial nitrogen requirements with enquiry-based supply.',
  },
];

/** Auto-advance interval for banner slides in milliseconds */
const slide_interval_ms = 6000;

function Hero() {
  // Active slide index for the auto image slider
  const [active_index, set_active_index] = useState(0);
  // Key used to restart left-aligned text animations on each slide change
  const [text_key, set_text_key] = useState(0);
  // Direction used for cinematic slide enter/exit motion
  const [slide_direction, set_slide_direction] = useState('next');

  /** Advances to a chosen slide and restarts ad-style text animation */
  const go_to_slide = (next_index) => {
    set_slide_direction(next_index > active_index || (active_index === banner_slides.length - 1 && next_index === 0) ? 'next' : 'prev');
    set_active_index(next_index);
    set_text_key((current) => current + 1);
  };

  // Automatically advance slides on a timed loop
  useEffect(() => {
    const timer_id = window.setInterval(() => {
      set_slide_direction('next');
      set_active_index((current) => (current + 1) % banner_slides.length);
      set_text_key((current) => current + 1);
    }, slide_interval_ms);

    return () => window.clearInterval(timer_id);
  }, [active_index]);

  // Current slide content for left-aligned title and subtitle
  const active_slide = banner_slides[active_index];

  return (
    <section className="hero" aria-label="SOHAR SAND INTERNATIONAL TRADING introduction">
      {/* Auto-sliding full-bleed banner images with ad motion */}
      <div className="hero_media" aria-hidden="true">
        {banner_slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero_slide ${index === active_index ? 'is_active' : ''} ${
              index === active_index ? `slide_${slide_direction}` : ''
            }`}
          >
            <img src={slide.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
        <div className="hero_overlay" />
        <div className="hero_light_sweep" />
      </div>

      {/* Left-aligned cinematic copy block */}
      <div className="container hero_content" key={text_key}>
        <span className="hero_eyebrow hero_animate hero_animate_1">{active_slide.eyebrow}</span>
        <h1 className="hero_animate hero_animate_2">{active_slide.title}</h1>
        <p className="hero_animate hero_animate_3">{active_slide.subtitle}</p>

        <div className="btn_group hero_animate hero_animate_4">
          <Link to="/about" className="btn btn_primary hero_cta_primary">
            Explore Our Business <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn_secondary hero_cta_secondary">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Simple slide indicators */}
      <div className="hero_dots" role="tablist" aria-label="Banner slides">
        {banner_slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero_dot ${index === active_index ? 'is_active' : ''}`}
            aria-label={`Show slide ${index + 1}`}
            aria-selected={index === active_index}
            onClick={() => go_to_slide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
