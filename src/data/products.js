// src/data/products.js

/* =======================
   CATEGORIES (HOME PAGE)
======================= */
export const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    name: "Shoes",
    slug: "shoes",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 3,
    name: "Books",
    slug: "books",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 4,
    name: "Fashion & Apparel",
    slug: "fashion",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    slug: "beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: 6,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 7,
    name: "Toys & Games",
    slug: "toys",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
  },
  {
    id: 8,
    name: "Fitness",
    slug: "fitness",
    image:
      "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
  },
];

/* =======================
   PRODUCTS (WITH SUB-CATEGORY)
======================= */
export const products = [
  /* ========= ELECTRONICS ========= */
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    category: "electronics",
    subCategory: "audio",
    image:
      "https://images.unsplash.com/photo-1518441902117-f58c8f5d6e8b",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    category: "electronics",
    subCategory: "smart-watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1499,
    category: "electronics",
    subCategory: "audio",
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552262b35",
  },

  /* ========= SHOES ========= */
  {
    id: 4,
    name: "Running Shoes",
    price: 2499,
    category: "shoes",
    subCategory: "running-shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 5,
    name: "Casual Sneakers",
    price: 1999,
    category: "shoes",
    subCategory: "casual-shoes",
    image:
      "https://images.unsplash.com/photo-1528701800489-20be3c97c8f1",
  },

  /* ========= BOOKS ========= */
  {
    id: 6,
    name: "Atomic Habits",
    price: 499,
    category: "books",
    subCategory: "self-help",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 7,
    name: "Think Like a Monk",
    price: 399,
    category: "books",
    subCategory: "self-help",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646",
  },

  /* ========= FASHION ========= */
  {
    id: 8,
    name: "Men T-Shirt",
    price: 799,
    category: "fashion",
    subCategory: "men-clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 9,
    name: "Women Kurti",
    price: 1299,
    category: "fashion",
    subCategory: "women-clothing",
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
  },

  /* ========= BEAUTY ========= */
  {
    id: 10,
    name: "Face Serum",
    price: 599,
    category: "beauty",
    subCategory: "skincare",
    image:
      "https://images.unsplash.com/photo-1585238342028-4c9d3a35c5f3",
  },
  {
    id: 11,
    name: "Hair Dryer",
    price: 1499,
    category: "beauty",
    subCategory: "hair-care",
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552262b35",
  },

  /* ========= HOME & KITCHEN ========= */
  {
    id: 12,
    name: "Mixer Grinder",
    price: 2499,
    category: "home-kitchen",
    subCategory: "kitchen-appliances",
    image:
      "https://images.unsplash.com/photo-1586201375754-1421e0d76fbb",
  },
  {
    id: 13,
    name: "Non-Stick Pan",
    price: 999,
    category: "home-kitchen",
    subCategory: "cookware",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646",
  },

  /* ========= TOYS ========= */
  {
    id: 14,
    name: "Remote Control Car",
    price: 1499,
    category: "toys",
    subCategory: "remote-toys",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
  },
  {
    id: 15,
    name: "Building Blocks",
    price: 899,
    category: "toys",
    subCategory: "educational-toys",
    image:
      "https://images.unsplash.com/photo-1581579185169-1c3b44bcd0d0",
  },

  /* ========= FITNESS ========= */
  {
    id: 16,
    name: "Yoga Mat",
    price: 699,
    category: "fitness",
    subCategory: "yoga",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
  },
  {
    id: 17,
    name: "Dumbbell Set",
    price: 1999,
    category: "fitness",
    subCategory: "gym-equipment",
    image:
      "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0",
  },
];
