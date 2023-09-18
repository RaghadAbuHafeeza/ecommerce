import axios from "axios";
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function Register() {
  let navigate = useNavigate(); // عرفنا navigate
    // validation
    const schema = Yup.object({
      userName:Yup.string().required('name is required').min(3,'min is 3 char').max(20,'max is 20 char'),
      email:Yup.string().email('not valid').required('email is required'),
      password:Yup.string().required('password.required').matches(/^[A-Z][a-z0-9]{3,7}$/),
      cPassword:Yup.string().required('confirm password required').oneOf([Yup.ref('password'),'password and confirm password not match'])
  })

  let formik = useFormik({
      initialValues:{
        userName:"",
        email:"",
        password:"",
        cPassword:""
      },onSubmit:sendRegisterData,validationSchema:schema
  })

  async function sendRegisterData(values){
    let {data} = await axios.post(`https://ecommerce-node-3.vercel.app/auth/signup`,values);  // axios.post() هاي استخدمناها لأنه بدي أرسل بيانات للباكاند
    if(data.message=='Success'){
      navigate('/login') // login على user حوّل ال 
    }
    console.log(data);
  }

  return (
    <div className='w-75 m-auto mt-5'>

      <h2 className='mb-4'>Register Now</h2>

      <form onSubmit={formik.handleSubmit}>    
        <div class="input-group mb-3">
          <label htmlFor='name'>Name</label>
          <input type="text" class="form-control" name='userName' id='name' 
          value={formik.values.userName} onChange={formik.handleChange}/>
        </div>
        <div className="text-danger">{formik.errors.userName}</div>  


        <div class="input-group mb-3">
          <label htmlFor='email'>Email</label>
          <input type="text" class="form-control" name='email' id='email' 
          value={formik.values.email} onChange={formik.handleChange}/>
        </div> 
        <div className="text-danger">{formik.errors.email}</div>

        <div class="input-group mb-3">
          <label htmlFor='password'>Password</label>
          <input type="password" class="form-control" name='password' id='password' 
          value={formik.values.password} onChange={formik.handleChange}/>
        </div> 
        <div className="text-danger">{formik.errors.password}</div>

        <div class="input-group mb-3">
          <label htmlFor='cPassword'>Confirm Password</label>
          <input type="password" class="form-control" name='cPassword' id='cPassword' 
          value={formik.values.cPassword} onChange={formik.handleChange}/>
        </div>  
        <div className="text-danger">{formik.errors.cPassword}</div>

        <button className='btn btn-info' typ="submit">Register</button>  
      </form>
      
    </div>
  )
}
