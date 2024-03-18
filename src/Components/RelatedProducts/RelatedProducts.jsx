import React from 'react'
import data_product from '../Assets/data'
const RelatedProducts = () => {
  return (
    <div>
      <h1>Related Products </h1>
      <hr />
      <div>
        {
          data_product.map((item,i))=>
        }
      </div>
    </div>
  )
}

export default RelatedProducts;