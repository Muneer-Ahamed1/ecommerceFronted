import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react"
import Navmb from "./Navmb"

export default function Navbar() {
    const[state,setState]=useState(true);
    console.log(state)
        
            if(state) {
                return(
        <div className="Navbar  bg-gray-50 flex justify-between py-2 px-8 items-center">
            <Logo></Logo>
            <NavPanel wrapper={"Navpanel  gap-6 items-center font-medium pr-4 hidden md:flex"}
            NavStyle={"hover:text-blue-600 transition-colors"}
            btn={"p-3 rounded-md bg-violet-800 text-white font-medium text-sm"}
            
            ></NavPanel>
            <Humberger setState={setState} state={state}></Humberger>
        </div>
        )
    }
    else{
        return(
            <Navmb setState={setState} state={state}></Navmb>
        )

    }
    

}

function Logo() {
    return (
        <Link to={"/"}>
        <div className="Logo flex p-1 border-2 gap-1 rounded-md border-solid border-gray-800 cursor-pointer">
            <h1 className=" text-xl font-bold bg-sky-700 p-2 text-white rounded-md">
                Eletro
            </h1>
            <h1 className="text-xl font-bold p-2">
                Store
            </h1>
        </div>
        </Link>
    )
}
export function Humberger({setState,state}) {
    return (
        <div className="humberger md:hidden" onClick={()=>setState(!state)} >
            <GiHamburgerMenu className="w-[25px] h-[25px]"></GiHamburgerMenu>
        </div>
    )
}
export function NavPanel({wrapper,NavStyle,clickme,btn}) {
    return (
        <div className={wrapper}>
            <NavLink to="/" className={NavStyle} onClick={clickme}>HOME</NavLink>
            <NavLink to="/about" className={NavStyle} onClick={clickme}>ABOUT</NavLink>
            <NavLink to="/products" className={NavStyle} onClick={clickme}>PRODUCTS</NavLink>
            <NavLink to="/contacts" className={NavStyle} onClick={clickme}> CONTACTS</NavLink>
            <NavLink to="/contacts" className={btn}> LOG IN</NavLink>

            <NavLink to={"/cart"} className="relative ml-3 flex p-3" onClick={clickme}>
                <AiOutlineShoppingCart className=" w-[30px] h-[30px]"></AiOutlineShoppingCart>
                <h1 className=" absolute right-1 top-1 rounded-full flex items-start font-semibold w-[23px] h-[23px] justify-center bg-green-700 text-white">0</h1>
            </NavLink>
        </div>
    )
}