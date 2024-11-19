// slider
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slider2.jpg";
import slide3 from "../assets/slider/slider3.jpg";
import slide4 from "../assets/slider/slider4.jpg";
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
    productName: "The north coat",
    Discount: "-11%",
    currentPrice: 100 + "$",
    Price: 120 + "$",
    productImage: bestImage1,
  },
  {
    id: 2,
    productName: " Gaming Laptop",
    Discount: "-12%",
    currentPrice: 1000 + "$",
    Price: 1100 + "$",
    productImage: bestImage2,
  },
  {
    id: 3,
    productName: "PlayStation arm",
    Discount: "-42%",
    currentPrice: 17 + "$",
    Price: 30 + "$",
    productImage: bestImage3,
  },
  {
    id: 4,
    productName: "New Shoes",
    Discount: "-50%",
    currentPrice: 40 + "$",
    Price: 80 + "$",
    productImage: bestImage4,
  },
  {
    id: 5,
    productName: " Small BookSelf",
    Discount: "30%",
    currentPrice: 90 + "$",
    Price: 120 + "$",
    productImage: bestImage5,
  },
  {
    id: 6,
    productName: "Quilted Satin Jacket",
    Discount: "50%",
    currentPrice: 30 + "$",
    Price: 60 + "$",
    productImage: bestImage6,
  },
  {
    id: 7,
    productName: "CANON EOS DSLR Camera ",
    Discount: "22%",
    currentPrice: 350 + "$",
    Price: 420 + "$",
    productImage: bestImage7,
  },
  {
    id: 8,
    productName: "speaker X9yW-39F",
    Discount: "-20%",
    currentPrice: 40 + "$",
    Price: 50 + "$",
    productImage: bestImage8,
  },
];

// Your All products
export const AllData = [
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
