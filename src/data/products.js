// src/data/products.js

/* =======================
   CATEGORY ICONS
======================= */
import {
  FaMobileAlt,
  FaPaintBrush,
  FaBook,
  FaHome,
  FaGamepad,
  FaDumbbell,
} from "react-icons/fa";

/* =======================
   MAIN CATEGORIES
======================= */
export const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    icon: FaMobileAlt,
  },
  {
    id: 2,
    name: "Beauty Care",
    slug: "beauty",
    icon: FaPaintBrush,
  },
  {
    id: 3,
    name: "Books",
    slug: "books",
    icon: FaBook,
  },
  {
    id: 4,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    icon: FaHome,
  },
  {
    id: 5,
    name: "Toys & Games",
    slug: "toys",
    icon: FaGamepad,
  },
  {
    id: 6,
    name: "Fitness",
    slug: "fitness",
    icon: FaDumbbell,
  },
];

/* =======================
   SUB-CATEGORIES
======================= */
export const subCategories = {
  electronics: [
    "Charger",
    "USB Cable",
    "Mobile Case",
    "Smart Watch",
    "Headset (Wired)",
    "Headset (Wireless)",
    "Bluetooth Speaker",
  ],

  beauty: [
    "Hair Oil",
    "Face Wash",
    "Cream",
    "Baby Oil",
    "Skin Toner",
    "Eye Shadow",
    "Kajal",
    "Sunscreen",
  ],

  books: [
    "Education",
    "Sci-Fi",
    "Fantasy",
    "Comedy",
    "Biography",
    "Documentation",
  ],

  "home-kitchen": {
    home: [
      "Wallpaper",
      "Plastic Flowers",
      "Sofa",
      "Chair",
      "Pillow",
      "Bedsheet",
    ],
    kitchen: [
      "Cooking Tools",
      "Instant Meals",
      "Snacks",
      "Dhal",
      "Nuts",
    ],
  },

  toys: {
    boys: ["Cars", "Action Figures"],
    girls: ["Dolls", "Soft Toys"],
    age: ["0-3 Years", "4-7 Years", "8-12 Years"],
  },

  fitness: [
    "Resistance Bands",
    "Gym Bags",
    "Water Bottle",
    "Energy Supplements",
  ],
};

/* =======================
   PRODUCTS (REALISTIC)
======================= */
export const products = [
  /* ---------- ELECTRONICS ---------- */
  {
    id: 1,
    name: "Fast Charging Adapter",
    price: 599,
    category: "electronics",
    subCategory: "Charger",
    image:
      "https://images.unsplash.com/photo-1583225173050-6d5a1a63d6f7",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headset",
    price: 1299,
    category: "electronics",
    subCategory: "Headset (Wireless)",
    image:
      "https://images.unsplash.com/photo-1518441902117-f58c8f5d6e8b",
    rating: 4.4,
  },

  /* ---------- BEAUTY ---------- */
  {
    id: 3,
    name: "Natural Hair Oil",
    price: 399,
    category: "beauty",
    subCategory: "Hair Oil",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Vitamin C Face Serum",
    price: 699,
    category: "beauty",
    subCategory: "Skin Toner",
    image:
      "https://images.unsplash.com/photo-1585238342028-4c9d3a35c5f3",
    rating: 4.6,
  },

  /* ---------- BOOKS ---------- */
  {
    id: 5,
    name: "Atomic Habits",
    price: 499,
    category: "books",
    subCategory: "Education",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    rating: 4.8,
  },

  /* ---------- HOME & KITCHEN ---------- */
  {
    id: 6,
    name: "Decorative Cushion Pillow",
    price: 899,
    category: "home-kitchen",
    subCategory: "Home",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11",
    rating: 4.3,
  },
  {
    id: 7,
    name: "Non-Stick Cooking Pan",
    price: 1199,
    category: "home-kitchen",
    subCategory: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646",
    rating: 4.5,
  },

  /* ---------- TOYS ---------- */
  {
    id: 8,
    name: "Remote Control Car",
    price: 1499,
    category: "toys",
    subCategory: "Boys",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
    rating: 4.4,
  },
  {
    id: 9,
    name: "Soft Doll Toy",
    price: 899,
    category: "toys",
    subCategory: "Girls",
    image:
      "https://images.unsplash.com/photo-1581579185169-1c3b44bcd0d0",
    rating: 4.2,
  },

  /* ---------- FITNESS ---------- */
  {
    id: 10,
    name: "Yoga Mat",
    price: 699,
    category: "fitness",
    subCategory: "Resistance Bands",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Dumbbell Set",
    price: 1999,
    category: "fitness",
    subCategory: "Energy Supplements",
    image:
      "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0",
    rating: 4.7,
  },
];
