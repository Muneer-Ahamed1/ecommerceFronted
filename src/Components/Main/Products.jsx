import React, { useEffect } from 'react'
import {TiTickOutline} from "react-icons/ti"
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import { Home, Copy, Bookmark, Users, Settings } from 'lucide-react'
import { useRef } from 'react'
import { useState } from 'react'
import formatPrice from './formatPrice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from "./Card"
import { filterData, filterCompany, sortPriceorder, setInputText,setColorSelection } from '../../Feature/ProductRedux'
import ListView from "./ListView";
import GridView from './GridView'

export default function Product() {
    const dispatch = useDispatch();
    const [view, setView] = useState(true);
    const [clr,setColor]=useState();
    const set=new Set();
    let colors=useSelector((val)=>val.Products.productData).map((val)=>{
        val?.colors?.map((color)=>{
            set.add(color)
        })

    })
    //colors
    set.delete("#000000");

    colors=[...set];
    console.log(colors)


    let temp = (val) => val.Products.filterData;
    const [inputText,setInput]=useState("");


    useEffect(() => {
        console.log("mounted")
        temp = (val) => val.Products.productData;

    }, [])









    function filter(vl) {
        dispatch(filterData(vl));

    }
    function filterComp(vl) {
        dispatch(filterCompany(vl));

    }
    function sortOrder(vl) {
        console.log(vl)
        dispatch(sortPriceorder(vl))
    }
    function setInputTextValue(vl) {
        dispatch(setInputText(vl));

        setInput(vl)
    }

    function setColorParams(vl) {
        dispatch(setColorSelection(vl))

    }
   
    let filterProduct = useSelector(temp);
    console.log(filterProduct)
    const [filterState,setFilter]=useState(true);
    

    return (
        <div className="Wrapper  p-3 border-2 border-slate-100 flex flex-col md:flex-row">
            <button onClick={()=>{setFilter(!filterState)}} className='px-3 py-2 ml-6 bg-black text-white rounded-md w-20 block md:hidden '>Filter</button>
            {(filterState)?
            (<Filter filterData={filter} filterComp={filterComp} sortOrder={sortOrder} setInputText={setInputTextValue} clr={clr} colors={colors} setColor={setColor}
            setColorParams={setColorParams}
            />):
            ("")
}

            <ProductList productData={filterProduct} sortOrder={sortOrder} setView={setView} view={view} />

        </div>
    )
}


export function ProductList({ productData, sortOrder, setView, view }) {
    const style = "product  w-[100%] h-[100%]"
    if (productData.length == 0) {
        return <h1>Empty ARR</h1>
    }
let width;
if(view) {
width="Products mx-auto flex flex-col md:max-w-[70%] p-3";
}
else{
    width="Products mx-auto flex flex-col md:max-w-[70%] p-3";
}

    return (
        <div className={width} >
            <SecondFilter setView={setView} sortOrder={sortOrder}
                productData={productData} view={view}
            ></SecondFilter>
            {
                (view) ? (
                    <GridView productData={productData} style={style}></GridView>
                ) :
                    (<ListView products={productData}></ListView>)

            }


        </div>
    )
}


export function Filter({ filterData, filterComp,setInputText,colors,clr,setColor,setColorParams}) {
    const range = useRef(0);
    const [rangeValue, setRange] = useState(0);
    return (
        <aside className="flex min-h-[100%]  flex-col  border-2 bg-white px-5 py-8 w-[90%] mx-[auto] md:mx-0 border-slate-100 rounded-md my-3 md:w-[auto]">
            <input type="text" placeholder='search' className='p-2 border-2 border-slate-100' onChange={(e)=>setInputText(e.target.value)} />
            <div className="mt-6 flex flex-1 flex-col justify-between ">
                <nav className="-mx-3 space-y-6 grid grid-cols-1 cust2:grid-cols-2 md:grid-cols-1  ">
                    <div className="space-y-3 p-3 grid grid-cols-2 md:grid-cols-1">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900  col-start-1 col-end-3 md:col-end-2 p-2">Category</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                filterData("All");
                            }}

                        >
                            <span className="mx-2 text-sm font-medium">All</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                filterData("Mobile")
                            }}
                        >
                            <span className="mx-2 text-sm font-medium">Mobile</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                filterData("Laptop")
                            }
                            }

                        >
                            <span className="mx-2 text-sm font-medium">Laptop</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                filterData("Computer")
                            }}
                        >
                            <span className="mx-2 text-sm font-medium">Computer</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                filterData("Accessories")
                            }}
                        >
                            <span className="mx-2 text-sm font-medium">Accessories</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                filterData("Watch")
                            }}

                        >
                            <span className="mx-2 text-sm font-medium">Watch</span>
                        </a>
                    </div>
                    <div className="space-y-3 p-2 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">Company</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 p-3"
                        >
                            <select name="company" className="company w-[100%] p-2 border-2 border-slate-100 " onChange={(e) => {
                                e.preventDefault()
                                e.stopPropagation();
                                console.log(e.target.value)
                                filterComp(e.target.value)
                            }}>
                                <option value="" selected disabled>company</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Dell">Dell</option>
                                <option value="Nokia">Nokia</option>
                                <option value="Asus">Asus</option>
                                <option value="Lenova">lenova</option>
                                <option value="Rolex">Rolex</option>






                            </select>
                        </a>

                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                            colors
                        </label>
                      <div>
                      <ul className="colors -mr-3 flex flex-wrap">
                                {colors && colors?.map((color) => (
                                    <li
                                        key={color}
                                        className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center  border border-gray-100 p-1 rounded-full text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                                    >
                                        <span className={` h-full w-full rounded-full flex justify-center items-center`} style={{backgroundColor:`${color}`}} 
                                        onClick={()=>{
                                            setColor(color);
                                            setColorParams(color)
                                        }}
                                        >
                                        {
                                            (clr==color)?(<TiTickOutline className=" text-white h-[100%] w-[80%]"></TiTickOutline>):("")
                                        }
                                            </span>
                                    </li>
                                ))}
                            </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                            Price
                        </label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            {console.log(range.current.value)}
                            <label>{
                                formatPrice(rangeValue)
                            }</label>
                            <input type="range" id="vol" name="vol" min="0" max="500000" className='w-full ml-2' ref={range} onClick={(e) => e.stopPropagation()}
                                value={rangeValue}
                                onChange={() => setRange(range.current.value)}
                            />

                        </a>

                    </div>
                    <div className="space-y-3 col-start-1 cust2:col-end-3 col-end-2 md:col-end-1 flex">


                        <button
                            type="button"
                            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mx-auto"
                        >
                            Clear Filter
                        </button>
                    </div>


                </nav>
            </div>
        </aside>
    )
}


export function SecondFilter({ setView, sortOrder, productData,view }) {

    return (
        <div className="product-nav grid grid-cols-3 my-2 items-center ">

            <div className="first flex justify-evenly">
                <button onClick={() => setView(!view)}>{(view)?("Grid View"):("Line View")}</button>
            </div>

            <div className="second text-center">
                <h1>Current Products {productData.length} </h1>
            </div>

            <div className="third justify-self-end">
                <select name="Filter" className="Filter p-2 border-2 border-slate-100" onChange={(e) => {
                    e.stopPropagation()
                    console.log("asdsa")
                    sortOrder(e.target.value)
                }}>
                    <option value="" selected disabled>Filter</option>
                    <option value="highest" >Price(highest)</option>
                    <option value="lowest" >Price(lowest)</option>
                </select>
            </div>
        </div>
    )
}
