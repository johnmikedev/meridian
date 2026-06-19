// Central content for the site. Editing copy/prices here keeps the
// section components focused on layout.

// roast: 0 = lightest, 4 = darkest (drives the roast-meter signature)
export const coffees = [
  {
    id: 'kiriga',
    name: 'Kiriga AA',
    origin: 'Nyeri, Kenya',
    altitude: '1,750 m',
    process: 'Washed',
    roast: 1,
    notes: ['Blackcurrant', 'Cane sugar', 'Bergamot'],
    price: 22,
    image:
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'finca-loma',
    name: 'Finca La Loma',
    origin: 'Huila, Colombia',
    altitude: '1,900 m',
    process: 'Honey',
    roast: 2,
    notes: ['Red apple', 'Brown sugar', 'Cocoa nib'],
    price: 20,
    image:
      'https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'yirga',
    name: 'Yirgacheffe Konga',
    origin: 'Gedeo, Ethiopia',
    altitude: '2,050 m',
    process: 'Natural',
    roast: 0,
    notes: ['Jasmine', 'Stone fruit', 'Honey'],
    price: 24,
    image:
      'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'tarrazu',
    name: 'Tarrazú Reserve',
    origin: 'Los Santos, Costa Rica',
    altitude: '1,650 m',
    process: 'Washed',
    roast: 2,
    notes: ['Toffee', 'Orange zest', 'Almond'],
    price: 21,
    image:
      'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cerrado',
    name: 'Cerrado Dark',
    origin: 'Minas Gerais, Brazil',
    altitude: '1,150 m',
    process: 'Pulped natural',
    roast: 4,
    notes: ['Dark chocolate', 'Hazelnut', 'Molasses'],
    price: 18,
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'house',
    name: 'Meridian House',
    origin: 'Seasonal blend',
    altitude: 'Multi-origin',
    process: 'Washed + natural',
    roast: 3,
    notes: ['Milk chocolate', 'Roasted hazelnut', 'Dried cherry'],
    price: 17,
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80',
  },
]

export const testimonials = [
  {
    quote:
      'The Kiriga AA changed how our café thinks about a pour-over program. Consistent week to week, and the roast notes on every bag actually match the cup.',
    name: 'Dana Okafor',
    role: 'Owner, Northbeam Coffee Bar',
  },
  {
    quote:
      'I started with the Explorer subscription to get out of a rut. Six months later I can taste the difference between a washed and a natural. The brew cards do half the teaching.',
    name: 'Marcus Lin',
    role: 'Home brewer, two years in',
  },
  {
    quote:
      'We roast to order means it arrives days off the roaster, not weeks. For a small restaurant that detail is the whole difference at the table.',
    name: 'Priya Raman',
    role: 'Chef, Field & Fennel',
  },
]

export const plans = [
  {
    id: 'explorer',
    name: 'Explorer',
    blurb: 'For the curious cup. A new single-origin every delivery.',
    price: 19,
    cadence: 'every 2 weeks',
    featured: false,
    features: [
      'One 250g bag, roaster’s choice',
      'Printed brew card with each lot',
      'Skip or pause anytime',
      'Free shipping over $35',
    ],
    cta: 'Start exploring',
  },
  {
    id: 'devotee',
    name: 'Devotee',
    blurb: 'A steady rhythm for daily drinkers who know what they like.',
    price: 34,
    cadence: 'every 2 weeks',
    featured: true,
    features: [
      'Two 250g bags, your pick or ours',
      'First access to micro-lots',
      'Brew cards + tasting notes',
      'Free shipping, always',
      '10% off extra bags',
    ],
    cta: 'Become a devotee',
  },
  {
    id: 'reserve',
    name: "Roaster's Reserve",
    blurb: 'The rare and the experimental, before anyone else.',
    price: 58,
    cadence: 'monthly',
    featured: false,
    features: [
      'Three bags incl. one reserve micro-lot',
      'Limited & competition lots',
      'Quarterly roaster video notes',
      'Free shipping, always',
      'Invitations to cupping sessions',
    ],
    cta: 'Reserve a spot',
  },
]
