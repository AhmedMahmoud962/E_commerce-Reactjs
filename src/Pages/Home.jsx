import React from 'react'
import Hero from '../Components/Hero/Hero'
import Category from '../Components/Category/Category'
import BestProduct from '../Components/Products/BestProducts'
import Banner from '../Components/Banner/Banner'
import AllProduct from '../Components/Products/AllProduct'
import BrandLogo from '../Components/BrandLogo/BrandLogo'
import Features from '../Components/Features/Features'
import RecentNews from '../Components/RecentNews/RecentNews'
import ViewProducts from '../Components/Products/ViewProducts'
// import Footer from '../Components/Footer/Footer'
// import { AllData } from '../assets/data'
export const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <BestProduct />
      <Banner />
      <AllProduct />
      <ViewProducts />
      <Features />
      <RecentNews />
      <BrandLogo />
    </div>
  )
}
export default Home
