import React from 'react'
import axios from 'axios';
import {useEffect,useState} from 'react'

export default function Products() {
  let [products,setProducts] = useState([]);

  async function getProducts(){
    let {data} = await axios.get(`https://ecommerce-node-3.vercel.app/product/`);
    setProducts(data.products);
  }
  
  useEffect( ()=>{
    getProducts();
  },[])

  return (
  <>
  {products.length>0?products.map( (product)=> {
    return <div>
      <img src={product.mainImage.secure_url} alt='' />
      <h2>{product.name}</h2>
    </div>
  }):<Loading />}
  </> 
  )
}
