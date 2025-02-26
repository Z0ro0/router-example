import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
    let [query, setQuert] = useSearchParams();
    console.log(query.get("q"));
  return (
    <div>
        <h1>show All Products!!</h1>
    </div>
  )
}

export default ProductPage