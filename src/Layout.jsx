import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "./Feature/ProductRedux"
import { useEffect } from "react"
import Footer from "./Components/Main/Footer"

export default function Layout() {

  const dispatch = useDispatch();
  const products = useSelector((val) => val.Products.productData);
  useEffect(() => {
    console.log("App component mounted")
    dispatch(fetchProduct())


  }, [])
  console.log(products)



  return (<>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
  </>
  )

}  