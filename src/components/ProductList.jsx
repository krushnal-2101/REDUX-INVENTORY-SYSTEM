import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const ProductList = () => {

    const [productQuery, setProductQuery] = useState({
        search : "",
        filter:"",
    })

    const  product = useSelector((state) => state.product.product)

    console.log("product", product)
    
    const dispatch = useDispatch()


    const handlechange  = (indetifier, e)=> {
        setProductQuery((prod)=> {
            return{
                ...prod,
                [indetifier]:e.target.value,
            }
        })
    }

   const sortedList = [...filterList].sort((a, b) => {
    if (productQuery.filter === "ascending") {
      return a.id - b.id;
    }
    if (productQuery.filter === "descending") {
      return b.id - a.id;
    }

    if (productQuery.filter === "priceAsc") {
      return Number(a.price) - Number(b.price);
    }

    if (productQuery.filter === "priceDesc") {
      return Number(b.price) - Number(a.price);
    }
    if (productQuery.filter === "QtyAsc") {
      return Number(a.qty) - Number(b.qty);
    }

    if (productQuery.filter === "QtyDesc") {
      return Number(b.qty) - Number(a.qty);
    }
  });

  return (
      
  )
}

export default ProductList