import React from 'react'
import Background from '../Components/Background/Background'
import ProductImage from '../assets/background/products-page-heading.jpg'
import BestProduct from '../Components/Products/BestProducts'
import AllProduct from '../Components/Products/AllProduct'
import Features from '../Components/Features/Features'

export const ShopCategory = () => {
  return (
    <>
      <Background
        backgroundImg={ProductImage}
        title="Our Products"
        text="Products We Provide"
      />
      <AllProduct />
      <BestProduct />
      <Features />
    </>
  )
}

export default ShopCategory

// import React, { useContext } from 'react';
// import './css/ShopCategory.css';
// import { ShopContext } from '../Context/ShopContext';
// import { FaChevronDown } from 'react-icons/fa'; // Import Font Awesome icon

// const ShopCategory = (props) => {  // Added props parameter
//   const { all_Products } = useContext(ShopContext);

//   // Filter products based on category
//   const categoryProducts = all_Products.filter(item => props.category === item.category);

//   return (
//     <div className="shop_category">
//       <img src={all_Products[0].Image} alt="banner" className="category-banner" />

//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1–{categoryProducts.length} </span>
//           out of {all_Products.length} products
//         </p>

//         <div className="shopcategory-sort">
//           <p>Sort by</p>
//           <FaChevronDown className="dropdown-icon" />
//         </div>
//       </div>

//       <div className="shopcategory_products">
//         {categoryProducts.map((item, index) => (
//           <div className="shopcategory_product" key={index}>
//             <img src={item.Image} alt={item.title} />
//             <p>{item.title}</p>
//             <p>${item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;
