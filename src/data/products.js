/**
 * Centralized product catalogue for SOHAR SAND INTERNATIONAL TRADING.
 * Process: edit this file to add, update, or remove products and categories.
 * Notes: names and specifications remain editable until the company confirms
 * its final product catalogue. Replace images and specs as needed.
 */
import product_sand from '../assets/images/product-sand.jpg';
import product_aggregate from '../assets/images/product-aggregate.jpg';
import product_materials from '../assets/images/product-materials.jpg';
import product_logistics from '../assets/images/product-logistics.jpg';

/** Editable product categories used for filtering on the Products page. */
export const product_categories = [
  { id: 'all', label: 'All Products' },
  { id: 'sand', label: 'Sand Materials' },
  { id: 'aggregates', label: 'Aggregates' },
  { id: 'construction', label: 'Construction Materials' },
  { id: 'trading', label: 'Trading Solutions' },
];

/**
 * Editable product list.
 * Update name, description, specifications, category, and image per item.
 */
export const products = [
  {
    id: 'construction-sand',
    name: 'Construction Sand',
    category: 'sand',
    short_description:
      'Quality construction sand suitable for building and civil works, supplied through professional trading coordination.',
    description:
      'Construction sand traded to support building and infrastructure requirements. Product grades and supply volumes can be aligned with buyer specifications upon enquiry.',
    specifications: [
      'Category: Sand Materials',
      'Application: Construction and civil works',
      'Supply: Subject to enquiry and availability',
      'Packaging / delivery: Coordinated as per agreement',
    ],
    image: product_sand,
  },
  {
    id: 'fine-sand',
    name: 'Fine Sand',
    category: 'sand',
    short_description:
      'Fine sand for finishing and specialised construction applications, available through enquiry-based supply.',
    description:
      'Fine sand offered as part of SSI trading activities. Exact grading and volumes are confirmed with each customer based on project needs.',
    specifications: [
      'Category: Sand Materials',
      'Application: Finishing and specialised works',
      'Supply: Enquiry-based',
      'Quality focus: Customer specification alignment',
    ],
    image: product_sand,
  },
  {
    id: 'crushed-aggregates',
    name: 'Crushed Aggregates',
    category: 'aggregates',
    short_description:
      'Crushed aggregate materials for concrete, road works, and structural applications.',
    description:
      'Crushed aggregates traded to support construction projects. Size ranges and quantities are confirmed during the enquiry process.',
    specifications: [
      'Category: Aggregates',
      'Application: Concrete, roads, and structures',
      'Sizes: Confirmed per enquiry',
      'Supply coordination: Available on request',
    ],
    image: product_aggregate,
  },
  {
    id: 'building-materials',
    name: 'Building Materials',
    category: 'construction',
    short_description:
      'Selected building materials coordinated through SSI trading support for project requirements.',
    description:
      'Building materials trading support for customers seeking reliable sourcing coordination. Specific items and brands are confirmed with each enquiry.',
    specifications: [
      'Category: Construction Materials',
      'Scope: Enquiry-based material coordination',
      'Focus: Quality and reliability',
      'Delivery: Arranged as agreed',
    ],
    image: product_materials,
  },
  {
    id: 'bulk-supply',
    name: 'Bulk Material Supply',
    category: 'trading',
    short_description:
      'Bulk trading and supply coordination for sand and related construction materials.',
    description:
      'Bulk material supply solutions designed for businesses that require dependable trading coordination and clear communication throughout the order cycle.',
    specifications: [
      'Category: Trading Solutions',
      'Model: Bulk / project-based supply',
      'Coordination: End-to-end trading support',
      'Relationship focus: Long-term business partnerships',
    ],
    image: product_logistics,
  },
  {
    id: 'custom-trading',
    name: 'Custom Trading Requirements',
    category: 'trading',
    short_description:
      'Tailored trading support for customers with specific material or supply requirements.',
    description:
      'Custom trading arrangements for buyers with specialised requirements. SSI works with customers to understand needs and coordinate suitable supply options.',
    specifications: [
      'Category: Trading Solutions',
      'Approach: Requirement-led',
      'Communication: Professional and responsive',
      'Outcome: Reliable business coordination',
    ],
    image: product_logistics,
  },
];

/** Returns products filtered by category id, or all products when category is "all". */
export function get_products_by_category(category_id) {
  if (!category_id || category_id === 'all') {
    return products;
  }
  return products.filter((item) => item.category === category_id);
}

/** Finds a single product by its unique id. */
export function get_product_by_id(product_id) {
  return products.find((item) => item.id === product_id) || null;
}
