import React from 'react'
import { useContext } from 'react'
import style from "./Product.module.css"
import MenuArea from '../../component/MenuArea'
import { GlobalState } from '../../GlobalState'
import ProductItem from './ProductItem'

const Product = () => {
  const state = useContext(GlobalState)
  const [products, setProduct] = state.ProductApi.products;
  console.log(products);
  return (
    <div className={style['Product']}>
        <MenuArea/>
        {products.map((item, index) => {
          <div>vgerer</div>
        })}
        <div>vgerer</div>
         {products.length === 0 ? <div >Load</div> : null}
    </div>
  )
}

export default Product