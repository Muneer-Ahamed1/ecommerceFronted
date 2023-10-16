import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './ErrorPage.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Store.jsx'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Layout from './Layout.jsx';

import Home from "./Components/Main/Home.jsx"
import Contact from "./Components/Main/Contact.jsx"
import About from "./Components/Main/About.jsx"
import Cart from "./Components/Main/Cart.jsx"
import Details from './Components/Main/Details.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}
    >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='product/:id' element={<Details />} />
      <Route path='contacts' element={<Contact />} />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
