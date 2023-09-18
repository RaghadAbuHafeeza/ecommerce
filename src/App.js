import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.js';
import Home from './Components/Home/Home.js';
import Category from './Components/Category/Category.js'
import Products from './Components/Products/Products.js'
import Login from './Components/Login/Login.js'
import Register from './Components/Register/Register.js'
import NotFound from './Components/NotFound/NotFound.js'

export default function App() {
  
  let routes = createBrowserRouter([
    {path: '', element: <Layout />, children:[

      {index: true, element: <Home />}, //index: true -->  Home للعنصر الرئيسي فيهم وهو ال 
      {path: 'categories', element: <Category />},
      {path: 'products', element: <Products />},
      {path: 'login', element: <Login />},
      {path: 'register', element: <Register />},
      {path: '*', element: <NotFound />}  // path: '*' --> معناه انه لما يكون ولا وحدة من السابقة 
                                          //                                NotFound خدني على صفحة 

    ]}
  ]);
  
  return (
    <RouterProvider router={routes}></RouterProvider>   // هنا مهم السلاش تكون قبل الكلمة بالتاغ
  )
}
