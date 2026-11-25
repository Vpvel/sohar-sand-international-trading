/**
 * Reusable section heading component.
 * Process: render optional eyebrow, title, and supporting description with
 * centered or left-aligned layout based on the center prop.
 */
import '../styles/pages.css';

function SectionTitle({ eyebrow, title, description, center = false }) {
  // Build class names for optional centered alignment
  const section_class = center ? 'section_title center' : 'section_title';

  return (
    <div className={section_class}>
      {/* Optional small label above the main heading */}
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      {/* Primary section heading */}
      <h2>{title}</h2>
      {/* Optional supporting copy under the heading */}
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionTitle;
