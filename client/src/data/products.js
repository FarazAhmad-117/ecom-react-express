export const categories = [
  { id: "all", label: "All" },
  { id: "electronics", label: "Electronics" },
  { id: "fashion", label: "Fashion" },
  { id: "home", label: "Home" },
  { id: "fitness", label: "Fitness" },
];

export const products = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 189.99,
    category: "electronics",
    rating: 4.8,
    reviews: 324,
    badge: "Best seller",
    description:
      "Premium over-ear headphones with adaptive noise cancellation, 40-hour battery life, and studio-grade sound for work and travel.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  },
  {
    id: "2",
    name: "Minimal Leather Crossbody Bag",
    price: 74.5,
    category: "fashion",
    rating: 4.6,
    reviews: 89,
    badge: "New",
    description:
      "Hand-finished full-grain leather with adjustable strap, magnetic closure, and a slim profile that fits everyday essentials.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
  },
  {
    id: "3",
    name: "Smart Watch Series Pro",
    price: 249.0,
    category: "electronics",
    rating: 4.7,
    reviews: 512,
    description:
      "Health tracking, GPS, and always-on display in a lightweight aluminum case. Water resistant to 50 meters.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    id: "4",
    name: "Ceramic Pour-Over Coffee Set",
    price: 58.0,
    category: "home",
    rating: 4.9,
    reviews: 156,
    badge: "Staff pick",
    description:
      "Includes dripper, carafe, and filters. Brews a clean, balanced cup with heat-retaining ceramic construction.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
  {
    id: "5",
    name: "Organic Cotton Oversized Tee",
    price: 32.0,
    category: "fashion",
    rating: 4.5,
    reviews: 201,
    description:
      "Soft, breathable GOTS-certified cotton in a relaxed fit. Pre-washed for a lived-in feel from day one.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    id: "6",
    name: "Adjustable Dumbbell Set",
    price: 129.99,
    category: "fitness",
    rating: 4.4,
    reviews: 67,
    description:
      "Quick-adjust weights from 5–25 lb per hand. Compact design for home gyms without a rack of plates.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  },
  {
    id: "7",
    name: "Desk Lamp with Wireless Charging",
    price: 45.99,
    category: "home",
    rating: 4.3,
    reviews: 44,
    description:
      "Warm dimmable LED with USB-C passthrough and a built-in Qi pad for your phone on the nightstand or desk.",
    image:
      "https://images.unsplash.com/photo-1507473889964-16ef07e3fe96?w=800&q=80",
  },
  {
    id: "8",
    name: "Running Shoes — Cloud Stride",
    price: 98.0,
    category: "fitness",
    rating: 4.8,
    reviews: 278,
    badge: "Trending",
    description:
      "Responsive foam midsole and breathable mesh upper. Designed for daily miles and all-day comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
