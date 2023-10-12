import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import './index.css'
import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route} from 'react-router-dom';
  import Layout from './Layout.jsx';

import Home from "./Components/Main/Home.jsx"
import Contact from "./Components/Main/Contact.jsx" 
import About from "./Components/Main/About.jsx"
import Product from "./Components/Main/Product.jsx" 
import Cart from "./Components/Main/Cart.jsx"

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}
   
    >
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='products' element={<Product/>}/>
    <Route path='contacts' element={<Contact/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='*' element={<ErrorPage />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
