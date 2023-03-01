import { useState, useEffect} from 'react'
import axios from 'axios'

const ProductApi = () => {
    const [ products, setProduct] = useState([]);
    const getProducts = async() => {
        const res = await axios.get("/api/product");
        console.log(res);
    }
    useEffect(() => {
        getProducts();
    })
  return {
    products: [products, setProduct]
  }
}

export default ProductApi;