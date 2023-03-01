import React from 'react'
import style from "../pages/Product.module.css"
import MenuArea from '../component/MenuArea'
import Footer from '../component/Footer'
// import ProductApi from '../api/ProductApi.jsx'

const Product = () => {
  return (
    <div className={style['Product']}>
        <MenuArea/>
        {/* <ProductApi/> */}
        <Footer/>
    </div>
  )
}

export default Product