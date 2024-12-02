// slider
import slide1 from "../assets/slider/slide1.webp";
import slide2 from "../assets/slider/slider2.webp";
import slide3 from "../assets/slider/slider3.webp";
import slide4 from "../assets/slider/slider4.webp";
// category
import CategoryImage1 from "../assets/products/img1.jpg";
import CategoryImage2 from "../assets/products/apparel1.jpg";
import CategoryImage3 from "../assets/products/home3.jpg";
import CategoryImage4 from "../assets/products/shoe1-2.jpg";

// best product
import bestImage1 from "../assets/products/The north coat.jpg";
import bestImage2 from "../assets/products/labtop.jpg";
import bestImage3 from "../assets/products/Gaming.jpg";
import bestImage4 from "../assets/products/shoe1-3.jpg";
import bestImage5 from "../assets/products/Small BookSelf.jpg";
import bestImage6 from "../assets/products/Quilted Satin Jacket.jpg";
import bestImage7 from "../assets/products/Camera.jpg";
import bestImage8 from "../assets/products/speaker-X9yW-39F.png";

// all product
import image1 from "../assets/products/apparel2.jpg";
import image2 from "../assets/products/apparel3.jpg";
import image3 from "../assets/products/electronic2.jpg";
import image4 from "../assets/products/electronic3.jpg";
import image5 from "../assets/products/shoe4.jpg";
import image6 from "../assets/products/shoe1-2.jpg";
import image7 from "../assets/products/home4.jpg";
import image8 from "../assets/products/home3.jpg";
// recent blog
import blogImage1 from "../assets/blogs/electronics.jpg";
import blogImage2 from "../assets/blogs/clothes.jpg";
import blogImage3 from "../assets/blogs/shoe2.jpg";
// About blog
import aboutImage1 from "../assets/about/1.jpg";
import aboutImage2 from "../assets/about/2.jpg";
import aboutImage3 from "../assets/about/3.jpg";
import aboutImage4 from "../assets/about/4.jpg";

export const HeroData = [
  {
    UrlImage: slide1,
    badge: "Quick Fashion",
    title: "Fit Your Wardrobe",
    subtitle: "WITH LUXURY ITEMS",
    description:
      "Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage existing an expanded array of leadership.",
    buttonText: "Shop Now",
    buttonLink: "#learn-more",
  },
  {
    UrlImage: slide2,
    badge: "Quick Fashion",
    title: "Home Workout Accessories",
    subtitle: "Push The Limit",
    description:
      "Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage existing an expanded array of leadership.",
    buttonText: "Shop Now",
    buttonLink: "#learn-more",
  },
  {
    UrlImage: slide3,
    badge: "Quick Fashion",
    title: "Wooden Minimal Sofa ",
    subtitle: "EXTRA UP TO 50% OFF",
    description:
      "Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage existing an expanded array of leadership.",
    buttonText: "Shop Now",
    buttonLink: "#learn-more",
  },
  {
    UrlImage: slide4,
    badge: "Quick Fashion",
    title: "Come and Get it!",
    subtitle: "Electronics UP TO 70% OFF",
    description:
      "Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage existing an expanded array of leadership.",
    buttonText: "Shop Now",
    buttonLink: "#learn-more",
  },
];
// category data
export const CategoryData = [
  { ket: 1, name: "Electronics", image: CategoryImage1 },
  { ket: 2, name: " Collections", image: CategoryImage2 },
  { ket: 3, name: "Accessories", image: CategoryImage3 },
  { ket: 4, name: "Shoes", image: CategoryImage4 },
];

// BestProductData
export const BestProductData = [
  {
    id: 1,
    productName: "Arctic Explorer Jacket",
    Discount: "-11%",
    currentPrice: 100 + "$",
    Price: 120 + "$",
    productImage: bestImage1,
    category: "clothes",
    description:
      "Stay warm in the coldest climates with this durable and stylish Arctic Explorer Jacket. Designed with premium insulation and a sleek finish, it’s perfect for both outdoor adventures and urban wear. The water-resistant material ensures you stay dry and comfortable.",
  },
  {
    id: 2,
    productName: "Predator Gaming Laptop",
    Discount: "-12%",
    currentPrice: 1000 + "$",
    Price: 1100 + "$",
    productImage: bestImage2,
    category: "electronics",
    description:
      "Unleash your gaming potential with the Predator Gaming Laptop. Packed with a powerful processor and high-performance graphics card, it delivers a seamless gaming experience. The RGB keyboard and advanced cooling system are perfect for extended gaming sessions.",
  },
  {
    id: 3,
    productName: "DualShock Elite Controller",
    Discount: "-42%",
    currentPrice: 17 + "$",
    Price: 30 + "$",
    productImage: bestImage3,
    category: "electronics",
    description:
      "Enhance your gaming precision with the DualShock Elite Controller. Featuring customizable buttons, ergonomic design, and immersive vibration feedback, it provides the ultimate control for both casual and competitive gaming. Compatible with all major consoles.",
  },
  {
    id: 4,
    productName: "Velocity Running Shoes",
    Discount: "-50%",
    currentPrice: 40 + "$",
    Price: 80 + "$",
    productImage: bestImage4,
    category: "shoes",
    description:
      "Step into comfort with Velocity Running Shoes, designed for both performance and style. The breathable mesh upper keeps your feet cool, while the cushioned sole provides excellent shock absorption. Perfect for daily runs or casual outings.",
  },
  {
    id: 5,
    productName: "Compact Wooden Bookshelf",
    Discount: "30%",
    currentPrice: 90 + "$",
    Price: 120 + "$",
    productImage: bestImage5,
    category: "furniture",
    description:
      "Organize your favorite reads with this stylish Compact Wooden Bookshelf. Crafted from high-quality wood, it features a minimalist design that fits any decor. Ideal for small spaces, it offers both functionality and elegance for your home or office.",
  },
  {
    id: 6,
    productName: "Satin Luxe Quilted Jacket",
    Discount: "50%",
    currentPrice: 30 + "$",
    Price: 60 + "$",
    productImage: bestImage6,
    category: "clothes",
    description:
      "Elevate your winter wardrobe with the Satin Luxe Quilted Jacket. Its soft satin exterior and quilted design ensure warmth and style. This versatile piece pairs well with both casual and formal attire, making it a must-have addition to your closet.",
  },
  {
    id: 7,
    productName: "Canon EOS Pro DSLR Camera",
    Discount: "22%",
    currentPrice: 350 + "$",
    Price: 420 + "$",
    productImage: bestImage7,
    category: "electronics",
    description:
      "Capture stunning photographs with the Canon EOS Pro DSLR Camera. Equipped with advanced features like high-resolution imaging and fast autofocus, it's perfect for professionals and hobbyists alike. Includes multiple lens compatibility for versatile shooting options.",
  },
  {
    id: 8,
    productName: "EchoBass Portable Speaker",
    Discount: "-20%",
    currentPrice: 40 + "$",
    Price: 50 + "$",
    productImage: bestImage8,
    category: "electronics",
    description:
      "Enjoy powerful sound on the go with the EchoBass Portable Speaker. Compact and lightweight, it delivers exceptional audio quality with deep bass. The Bluetooth connectivity and long battery life make it ideal for outdoor adventures or home use.",
  },
];

// Your All products
export const AllData = [
  {
    id: 1,
    productName: "Elegant Men's Suit Jacket",
    description:
      "Crafted from premium fabrics, this men's suit jacket is perfect for formal occasions or professional settings. Featuring a modern fit, it provides both comfort and sophistication. The blazer is lightweight and wrinkle-resistant for all-day wear.",
    New: "New",
    currentPrice: "100$",
    productImage: image1,
    category: "clothes",
  },
  {
    id: 2,
    productName: "Classic Women's Tailored Blazer",
    description:
      "This timeless blazer for women blends elegance with practicality. Designed for a flattering fit, it complements both office wear and casual outfits. Made from durable fabric, it ensures a polished look every time.",
    New: "New",
    currentPrice: "140$",
    productImage: image2,
    category: "clothes",
  },
  {
    id: 3,
    productName: "iPhone 14 Pro",
    description:
      "Experience cutting-edge technology with the iPhone 14 Pro. Boasting an advanced camera system, a vibrant OLED display, and ultra-fast processing power, this phone sets the standard for mobile innovation.",
    New: "New",
    currentPrice: "600$",
    productImage: image3,
    category: "electronics",
  },
  {
    id: 4,
    productName: "High-Definition Over-Ear Headphones",
    description:
      "Immerse yourself in superior sound quality with these over-ear headphones. Featuring noise-cancellation technology and a comfortable fit, they are ideal for both music enthusiasts and professionals.",
    New: "New",
    currentPrice: "60$",
    productImage: image4,
    category: "electronics",
  },
  {
    id: 5,
    productName: "Premium Leather Men's Shoes",
    description:
      "Step into style with these premium leather shoes designed for men. Perfect for formal occasions or everyday wear, they feature a durable sole and a sleek design for unmatched comfort and elegance.",
    New: "New",
    currentPrice: "30$",
    productImage: image5,
    category: "shoes",
  },
  {
    id: 6,
    productName: "Stylish Women's Heels",
    description:
      "Elevate your fashion game with these chic women's heels. Designed for style and comfort, they feature a versatile design suitable for parties, weddings, or a night out.",
    New: "New",
    currentPrice: "80$",
    productImage: image6,
    category: "shoes",
  },
  {
    id: 7,
    productName: "Modern Ergonomic Chair",
    description:
      "Upgrade your workspace with this ergonomic chair designed for maximum comfort. Its modern design and adjustable settings ensure a perfect fit for long hours of use.",
    New: "New",
    currentPrice: "20$",
    productImage: image7,
    category: "furniture",
  },
  {
    id: 8,
    productName: "Solid Wood Dining Table",
    description:
      "Add a touch of elegance to your dining area with this solid wood table. Built to last, it features a spacious surface and a stylish finish that complements any decor.",
    New: "New",
    currentPrice: "40$",
    productImage: image8,
    category: "furniture",
  },
  {
    id: 9,
    productName: "The North Quilted Coat",
    description:
      "Stay warm in style with this quilted coat. Designed for ultimate insulation, it is perfect for cold weather. Its lightweight and fashionable design make it a wardrobe essential.",
    Discount: "-11%",
    currentPrice: "100$",
    Price: "120$",
    productImage: bestImage1,
    category: "clothes",
  },
  {
    id: 10,
    productName: "Ultimate Gaming Laptop",
    description:
      "Dominate your games with this high-performance gaming laptop. Featuring a powerful processor, advanced graphics card, and a vibrant display, it ensures seamless gameplay and stunning visuals.",
    Discount: "-12%",
    currentPrice: "1000$",
    Price: "1100$",
    productImage: bestImage2,
    category: "electronics",
  },
  {
    id: 11,
    productName: "Wireless Gaming Controller",
    description:
      "Enhance your gaming experience with this wireless controller. Ergonomically designed, it offers precise control and long battery life for uninterrupted gameplay.",
    Discount: "-42%",
    currentPrice: "17$",
    Price: "30$",
    productImage: bestImage3,
    category: "electronics",
  },
  {
    id: 12,
    productName: "Sporty Running Shoes",
    description:
      "Achieve peak performance with these lightweight running shoes. Designed for comfort and durability, they feature breathable materials and a non-slip sole for enhanced stability.",
    Discount: "-50%",
    currentPrice: "40$",
    Price: "80$",
    productImage: bestImage4,
    category: "shoes",
  },
  {
    id: 13,
    productName: "Compact Wooden Bookshelf",
    description:
      "Organize your space with this compact bookshelf. Made from high-quality wood, it offers ample storage for books and decor while adding a stylish touch to any room.",
    Discount: "30%",
    currentPrice: "90$",
    Price: "120$",
    productImage: bestImage5,
    category: "furniture",
  },
  {
    id: 14,
    productName: "Quilted Satin Bomber Jacket",
    description:
      "This satin bomber jacket is perfect for casual outings or evening wear. Its quilted design and premium fabric make it a fashionable and comfortable choice for cooler days.",
    Discount: "50%",
    currentPrice: "30$",
    Price: "60$",
    productImage: bestImage6,
    category: "clothes",
  },
  {
    id: 15,
    productName: "Canon EOS DSLR Camera",
    description:
      "Capture your memories with the Canon EOS DSLR Camera. It features high-resolution imaging, advanced settings, and easy handling for both beginners and professionals.",
    Discount: "22%",
    currentPrice: "350$",
    Price: "420$",
    productImage: bestImage7,
    category: "electronics",
  },
  {
    id: 16,
    productName: "Portable Bluetooth Speaker",
    description:
      "Enjoy your music anywhere with this portable Bluetooth speaker. It delivers crystal-clear sound, a long battery life, and a compact design that's easy to carry.",
    Discount: "-20%",
    currentPrice: "40$",
    Price: "50$",
    productImage: bestImage8,
    category: "electronics",
  },
];

// RecentData
export const RecentData = [
  {
    id: 1,
    date: "Jan 20, 2024 by Sabira",
    title: "How to choose perfect smartwatch",
    description: `minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?`,
    Image: blogImage1,
    category: "Electronics",
    buttonText: "Read More",
  },
  {
    id: 2,
    date: "Jan 20, 2024 by Dilshad",
    title: "How to choose perfect gadget",
    description: `minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?`,
    Image: blogImage2,
    category: "Clothes",
    buttonText: "Read More",
  },
  {
    id: 3,
    date: "Jan 20, 2024 by Satya",
    title: "How to choose perfect VR headset",
    description: `minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?`,
    Image: blogImage3,
    category: "Shoes",
    buttonText: "Read More",
  },
];

// RecentData
export const AboutData = [
  {
    id: 1,
    date: "Jan 20, 2024 by Sabira",
    title: "How to choose perfect smartwatch",
    description: `lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.  `,
    Image: aboutImage1,
    // category: "Electronics",
    buttonText: "Read More",
    cName: "view-all",
  },
  {
    id: 2,
    date: "Jan 20, 2024 by Dilshad",
    title: "How to choose perfect gadget",
    description: `lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.  `,
    Image: aboutImage2,
    // category: "Clothes",
    buttonText: "Read More",
    cName: "view-all",
  },
  {
    id: 3,
    date: "Jan 20, 2024 by Satya",
    title: "How to choose perfect VR headset",
    description: `lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.  `,
    Image: aboutImage3,
    // category: "Shoes",
    buttonText: "Read More",
    cName: "view-all",
  },
  {
    id: 4,
    date: "Jan 20, 2024 by Satya",
    title: "How to choose perfect VR headset",
    description: `lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? Etiam? Etiam nulla.  `,
    Image: aboutImage4,
    // category: "Shoes",
    buttonText: "Read More",
    cName: "view-all",
  },
];

// Your All products
export const all_Products = [
  {
    id: 1,
    productName: "Men's Blazer",
    // Discount: "-20%",
    New: "New",
    currentPrice: 100 + "$",
    // Price: 120 + "$",
    productImage: image1,
    category: "clothes",
  },
  {
    id: 2,
    productName: "Woman's Blazer",
    // Discount: "-20%",
    New: "New",
    currentPrice: 140 + "$",
    // Price: 120 + "$",
    productImage: image2,
    category: "clothes",
  },
  {
    id: 3,
    productName: "Iphone 14",
    // Discount: "-30%",
    New: "New",
    currentPrice: 600 + "$",
    // Price: 720 + "$",
    productImage: image3,
    category: "electronics",
  },
  {
    id: 4,
    productName: "Headphone",
    // Discount: "-30%",
    New: "New",
    currentPrice: 60 + "$",
    productImage: image4,
    category: "electronics",
  },
  {
    id: 5,
    productName: "Man's Shoes",
    // Discount: "30%",
    New: "New",
    currentPrice: 30 + "$",
    productImage: image5,
    category: "shoes",
  },
  {
    id: 6,
    productName: "Woman's Shoes",
    // Discount: "30%",
    New: "New",
    currentPrice: 80 + "$",
    productImage: image6,
    category: "shoes",
  },
  {
    id: 7,
    productName: "Chair",
    // Discount: "New",
    New: "New",

    currentPrice: 20 + "$",
    productImage: image7,
    category: "furniture",
  },
  {
    id: 8,
    productName: "Table",
    // Discount: "New",
    New: "New",
    currentPrice: 40 + "$",
    productImage: image8,
    category: "furniture",
  },
  {
    id: 9,
    productName: "The north coat",
    Discount: "-11%",
    currentPrice: 100 + "$",
    Price: 120 + "$",
    productImage: bestImage1,
    category: "clothes",
  },
  {
    id: 10,
    productName: " Gaming Laptop",
    Discount: "-12%",
    currentPrice: 1000 + "$",
    Price: 1100 + "$",
    productImage: bestImage2,
    category: "electronics",
  },
  {
    id: 11,
    productName: "PlayStation arm",
    Discount: "-42%",
    currentPrice: 17 + "$",
    Price: 30 + "$",
    productImage: bestImage3,
    category: "electronics",
  },
  {
    id: 12,
    productName: "New Shoes",
    Discount: "-50%",
    currentPrice: 40 + "$",
    Price: 80 + "$",
    productImage: bestImage4,
    category: "shoes",
  },
  {
    id: 13,
    productName: " Small BookSelf",
    Discount: "30%",
    currentPrice: 90 + "$",
    Price: 120 + "$",
    productImage: bestImage5,
    category: "furniture",
  },
  {
    id: 14,
    productName: "Quilted Satin Jacket",
    Discount: "50%",
    currentPrice: 30 + "$",
    Price: 60 + "$",
    productImage: bestImage6,
    category: "clothes",
  },
  {
    id: 15,
    productName: "CANON EOS DSLR Camera ",
    Discount: "22%",
    currentPrice: 350 + "$",
    Price: 420 + "$",
    productImage: bestImage7,
    category: "electronics",
  },
  {
    id: 16,
    productName: "speaker X9yW-39F",
    Discount: "-20%",
    currentPrice: 40 + "$",
    Price: 50 + "$",
    productImage: bestImage8,
    category: "electronics",
  },
];
