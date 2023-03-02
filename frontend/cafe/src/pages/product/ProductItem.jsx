import React from 'react'

const ProductItem = ({item}) => {
  console.log(item);
  return (
    <div>
        <h2>{item.product_name}</h2>
    </div>
  );
};

export default ProductItem;