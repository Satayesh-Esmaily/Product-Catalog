const products = [
  /* Coffee (7) */
  {
    id: "c1",
    name: "Ember Dark Roast",
    price: 18,
    category: "Coffee",
    description: "Deep, bold coffee with smoky notes.",
    origin: "Colombia",
    intensity: "Strong",
    weight: "250g"
  },
  {
    id: "c2",
    name: "Amber Medium Roast",
    price: 16,
    category: "Coffee",
    description: "Balanced flavor with caramel undertones.",
    origin: "Brazil",
    intensity: "Medium",
    weight: "250g"
  },
  {
    id: "c3",
    name: "Golden Light Roast",
    price: 15,
    category: "Coffee",
    description: "Bright acidity with fruity aroma.",
    origin: "Ethiopia",
    intensity: "Light",
    weight: "250g"
  },
  {
    id: "c4",
    name: "Espresso Ember",
    price: 19,
    category: "Coffee",
    description: "Intense espresso blend for strong lovers.",
    origin: "Italy",
    intensity: "Very Strong",
    weight: "250g"
  },
  {
    id: "c5",
    name: "Mocha Blend",
    price: 17,
    category: "Coffee",
    description: "Coffee with natural chocolate notes.",
    origin: "Peru",
    intensity: "Medium",
    weight: "250g"
  },
  {
    id: "c6",
    name: "Vanilla Brew",
    price: 16,
    category: "Coffee",
    description: "Smooth coffee with vanilla aroma.",
    origin: "Mexico",
    intensity: "Light",
    weight: "250g"
  },
  {
    id: "c7",
    name: "Cold Brew Ember",
    price: 14,
    category: "Coffee",
    description: "Slow-brewed, refreshing and smooth.",
    origin: "Kenya",
    intensity: "Medium",
    weight: "300ml"
  },

  /* Chocolate (7) */
  {
    id: "ch1",
    name: "Dark Chocolate 70%",
    price: 9,
    category: "Chocolate",
    description: "Rich dark chocolate with deep cocoa flavor.",
    origin: "Belgium",
    intensity: "Bitter",
    weight: "100g"
  },
  {
    id: "ch2",
    name: "Milk Chocolate Classic",
    price: 8,
    category: "Chocolate",
    description: "Smooth and creamy milk chocolate.",
    origin: "Switzerland",
    intensity: "Sweet",
    weight: "100g"
  },
  {
    id: "ch3",
    name: "Hazelnut Chocolate",
    price: 10,
    category: "Chocolate",
    description: "Chocolate blended with roasted hazelnuts.",
    origin: "Italy",
    intensity: "Medium Sweet",
    weight: "100g"
  },
  {
    id: "ch4",
    name: "Almond Crunch",
    price: 10,
    category: "Chocolate",
    description: "Crunchy almonds inside premium chocolate.",
    origin: "France",
    intensity: "Medium",
    weight: "100g"
  },
  {
    id: "ch5",
    name: "White Chocolate",
    price: 8,
    category: "Chocolate",
    description: "Sweet and creamy white chocolate.",
    origin: "Germany",
    intensity: "Sweet",
    weight: "100g"
  },
  {
    id: "ch6",
    name: "Cocoa Ember Bar",
    price: 11,
    category: "Chocolate",
    description: "Signature EMBER cocoa bar.",
    origin: "Belgium",
    intensity: "Rich",
    weight: "120g"
  },
  {
    id: "ch7",
    name: "Spiced Chocolate",
    price: 10,
    category: "Chocolate",
    description: "Chocolate with warm spices.",
    origin: "Spain",
    intensity: "Warm",
    weight: "100g"
  },

  /* Warm Moments (7) */
  {
    id: "w1",
    name: "Coffee Scent Candle",
    price: 14,
    category: "Warm Moments",
    description: "Warm coffee aroma candle.",
    origin: "Handmade",
    intensity: "Soft",
    weight: "200g"
  },
  {
    id: "w2",
    name: "Chocolate Scent Candle",
    price: 14,
    category: "Warm Moments",
    description: "Sweet chocolate scented candle.",
    origin: "Handmade",
    intensity: "Soft",
    weight: "200g"
  },
  {
    id: "w3",
    name: "Ceramic Coffee Mug",
    price: 12,
    category: "Warm Moments",
    description: "Minimal ceramic mug for daily coffee.",
    origin: "Local Studio",
    intensity: "—",
    weight: "350ml"
  },
  {
    id: "w4",
    name: "Ember Gift Box",
    price: 25,
    category: "Warm Moments",
    description: "Coffee & chocolate gift set.",
    origin: "EMBER Collection",
    intensity: "—",
    weight: "Bundle"
  },
  {
    id: "w5",
    name: "Wooden Coffee Tray",
    price: 20,
    category: "Warm Moments",
    description: "Rustic wooden tray.",
    origin: "Handcrafted",
    intensity: "—",
    weight: "—"
  },
  {
    id: "w6",
    name: "Minimal Teaspoon Set",
    price: 9,
    category: "Warm Moments",
    description: "Minimal metal spoon set.",
    origin: "Japan",
    intensity: "—",
    weight: "6 pcs"
  },
  {
    id: "w7",
    name: "Ember Notebook",
    price: 7,
    category: "Warm Moments",
    description: "Warm-toned notebook for calm moments.",
    origin: "EMBER Design",
    intensity: "—",
    weight: "A5"
  }
];

export default products;