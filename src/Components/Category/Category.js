import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import style from './Category.module.css'

export default function Category() {
  var settings = {
    dots: true,
    infinite: true, // رح يضل يلف ويغير الصور وبس يخلص برجع يعيد لانه حكيتله انفنتي مالانهاية ضل لف
    autoplay: true, // بتخلي العناصر بتحركن لحالهن
    speed: 500, // السرعة اللي بتحركوا فيها كل 500 ثانية
    slidesToShow: 5,   //عدد الصور اللي بدو يعرضها مرة وحدة قبل ليعمل بال slider
    slidesToScroll: 2 // عدد الصور اللي حتتغير امام الناظر مثلا كل لفة بمشي صورتين وبيجي 2 جداد
  };

  let [categories,setCategories] = useState([]);
  let[subcategories,setSubCategories] = useState([]);
  async function getCategories(){

    let {data} = await axios.get(`https://ecommerce-node-3.vercel.app/category`);
    console.log(data);

  }

  async function getSubCategories(id){
    
     let {data} = await axios.get(`https://ecommerce-node-3.vercel.app/category/${id}/subCategory/`);
     getSubCategories(data.subcategories)
      
  }

  useEffect(()=>{
     getCategories();
  },[])

  return (
    <>
    <Slider {...settings}>
     
    {categories.map( (category)=>{
      return <div className='mt-5' onClick={()=> getSubCategories(category.id)}><img src={category.image.secure_url} alt='' /></div>
    })}

    </Slider>

    <div className='mt-5'>
    <div className='row'>
    {subcategories.length>0?subcategories.map( (subcategory)=>{
     return <div className='col-md-4'>
          <img src={subcategory.image.secure_url} className={`${style.img} w-100`} alt='' />
        </div>
    }):<Loading />}
     </div>
     </div>

    </>
  )
}
