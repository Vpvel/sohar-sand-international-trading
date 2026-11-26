/**
 * Centralized product catalogue for SOHAR SAND INTERNATIONAL TRADING.
 * Process: edit this file to add, update, or remove products and categories.
 * Notes: product names follow the official petroleum trading menu.
 * Images are loaded from src/assets/Products and matched to each product title.
 */
import product_crude_oil from '../assets/Products/Crude-oil.jpg';
import product_bitumen from '../assets/Products/Bitumen.png';
import product_gas_oil from '../assets/Products/gas-oil-diesel.jpg';
import product_fuel_oil from '../assets/Products/fueloil.png';
import product_lpg from '../assets/Products/lpg.jpeg';
import product_lng from '../assets/Products/lng.png';
import product_cng from '../assets/Products/cng.png';
import product_jet_fuel from '../assets/Products/getfuel.png';
import product_sulfur_granules from '../assets/Products/sulfur_granules.png';
import product_sulfur_lumps from '../assets/Products/sulfur_lumps.png';
import product_urea_granules from '../assets/Products/urea_granules.png';

/** Editable product categories used for filtering on the Products page. */
export const product_categories = [
  { id: 'all', label: 'All Products' },
  { id: 'petroleum', label: 'Petroleum Products' },
  { id: 'chemicals', label: 'Chemical Products' },
];

/**
 * Editable product list aligned with the petroleum trading catalogue.
 * Update name, description, specifications, category, and image per item.
 */
export const products = [
  {
    id: 'crude-oil-fob-cif',
    name: 'Crude Oil FOB / CIF',
    category: 'petroleum',
    short_description:
      'Crude oil supply offered on FOB and CIF trading terms for international buyers.',
    description:
      'Crude oil traded under FOB and CIF arrangements to support international petroleum demand. Volumes, grades, and delivery windows are confirmed with each enquiry.',
    specifications: [
      'Category: Petroleum Products',
      'Incoterms: FOB / CIF',
      'Supply: Subject to enquiry and availability',
      'Coordination: International trading support',
    ],
    image: product_crude_oil,
  },
  {
    id: 'bitumen',
    name: 'Bitumen',
    category: 'petroleum',
    short_description:
      'Bitumen products for road construction, waterproofing, and industrial applications.',
    description:
      'Bitumen traded for construction and industrial use. Product grades and shipment quantities are aligned with buyer specifications during the enquiry process.',
    specifications: [
      'Category: Petroleum Products',
      'Application: Roads, waterproofing, industry',
      'Supply: Enquiry-based',
      'Delivery: Coordinated as per agreement',
    ],
    image: product_bitumen,
  },
  {
    id: 'gas-oil',
    name: 'Gas Oil',
    category: 'petroleum',
    short_description:
      'Gas oil trading support for commercial and industrial fuel requirements.',
    description:
      'Gas oil supplied through professional petroleum trading coordination. Specifications and volumes are confirmed based on customer requirements.',
    specifications: [
      'Category: Petroleum Products',
      'Application: Commercial and industrial fuel',
      'Supply: Subject to availability',
      'Quality focus: Specification alignment',
    ],
    image: product_gas_oil,
  },
  {
    id: 'fuel-oil',
    name: 'Fuel Oil',
    category: 'petroleum',
    short_description:
      'Fuel oil available for industrial and marine trading requirements.',
    description:
      'Fuel oil traded to support industrial and marine demand. Grades, quantities, and delivery terms are confirmed with each buyer enquiry.',
    specifications: [
      'Category: Petroleum Products',
      'Application: Industrial and marine use',
      'Supply: Enquiry-based',
      'Trading support: End-to-end coordination',
    ],
    image: product_fuel_oil,
  },
  {
    id: 'en590-10ppm',
    name: 'EN590 10PPM CIF / FOB / STS',
    category: 'petroleum',
    short_description:
      'EN590 10PPM diesel traded on CIF, FOB, and STS terms for compliant fuel supply.',
    description:
      'EN590 10PPM diesel offered under CIF, FOB, and STS trading options. Product compliance and shipment details are confirmed during enquiry and contracting.',
    specifications: [
      'Category: Petroleum Products',
      'Specification: EN590 10PPM',
      'Incoterms: CIF / FOB / STS',
      'Supply: Subject to enquiry and availability',
    ],
    image: product_gas_oil,
  },
  {
    id: 'lpg',
    name: 'LPG',
    category: 'petroleum',
    short_description:
      'Liquefied Petroleum Gas (LPG) trading for commercial and industrial buyers.',
    description:
      'LPG traded to support commercial and industrial energy needs. Supply volumes and delivery arrangements are coordinated based on buyer requirements.',
    specifications: [
      'Category: Petroleum Products',
      'Product: Liquefied Petroleum Gas',
      'Supply: Enquiry-based',
      'Coordination: Professional trading support',
    ],
    image: product_lpg,
  },
  {
    id: 'lng',
    name: 'LNG',
    category: 'petroleum',
    short_description:
      'Liquefied Natural Gas (LNG) trading solutions for energy and industrial demand.',
    description:
      'LNG offered through SSI petroleum trading coordination. Contract terms, volumes, and delivery windows are confirmed with each customer enquiry.',
    specifications: [
      'Category: Petroleum Products',
      'Product: Liquefied Natural Gas',
      'Supply: Subject to availability',
      'Model: Enquiry-led trading',
    ],
    image: product_lng,
  },
  {
    id: 'cng',
    name: 'CNG',
    category: 'petroleum',
    short_description:
      'Compressed Natural Gas (CNG) trading support for cleaner fuel applications.',
    description:
      'CNG traded to support cleaner fuel requirements. Supply planning and commercial terms are aligned with buyer specifications upon enquiry.',
    specifications: [
      'Category: Petroleum Products',
      'Product: Compressed Natural Gas',
      'Application: Cleaner fuel solutions',
      'Supply: Enquiry-based',
    ],
    image: product_cng,
  },
  {
    id: 'jet-fuel',
    name: 'Jet Fuel',
    category: 'petroleum',
    short_description:
      'Jet fuel trading for aviation and related commercial fuel requirements.',
    description:
      'Jet fuel supplied through professional petroleum trading coordination. Grades, volumes, and delivery terms are confirmed during the enquiry process.',
    specifications: [
      'Category: Petroleum Products',
      'Application: Aviation fuel supply',
      'Supply: Subject to enquiry and availability',
      'Coordination: International trading support',
    ],
    image: product_jet_fuel,
  },
  {
    id: 'sulfur-granules',
    name: 'Sulfur Granules',
    category: 'chemicals',
    short_description:
      'Sulfur granules traded for agricultural, industrial, and chemical processing needs.',
    description:
      'Sulfur granules supplied through professional trading coordination for fertilizer and industrial applications. Grades, packing, and shipment volumes are confirmed with each enquiry.',
    specifications: [
      'Category: Chemical Products',
      'Form: Granules',
      'Application: Agriculture and industry',
      'Supply: Subject to enquiry and availability',
    ],
    image: product_sulfur_granules,
  },
  {
    id: 'sulfur-lumps',
    name: 'Sulfur Lumps',
    category: 'chemicals',
    short_description:
      'Sulfur lumps traded for industrial, chemical, and agricultural processing needs.',
    description:
      'Sulfur lumps supplied through professional trading coordination for industrial and agricultural applications. Grades, packing, and shipment volumes are confirmed with each enquiry.',
    specifications: [
      'Category: Chemical Products',
      'Form: Lumps',
      'Application: Industry, chemicals, and agriculture',
      'Supply: Subject to enquiry and availability',
    ],
    image: product_sulfur_lumps,
  },
  {
    id: 'urea-granules',
    name: 'Urea Granules',
    category: 'chemicals',
    short_description:
      'Urea granules traded for fertilizer and industrial nitrogen applications.',
    description:
      'Urea granules offered for agricultural fertilizer and industrial use. Product specifications, packing options, and delivery terms are aligned with buyer requirements upon enquiry.',
    specifications: [
      'Category: Chemical Products',
      'Form: Granules',
      'Application: Fertilizer and industrial nitrogen',
      'Supply: Enquiry-based',
    ],
    image: product_urea_granules,
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
