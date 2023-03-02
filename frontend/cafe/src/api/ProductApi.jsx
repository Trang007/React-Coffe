import { useState, useEffect} from 'react'
import axios from 'axios'

const ProductApi = () => {
    const [ products, setProduct] = useState([]);
    useEffect(() => {
      const getProducts = async() => {
          const res = await axios.get("/api/product");
          setProduct(res.data.products);
      }
      getProducts();
    },[])
  return {
    products: [products, setProduct],
  }
}

export default ProductApi;