import React, { useEffect } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import { Home, Copy, Bookmark, Users, Settings } from 'lucide-react'
import { useRef } from 'react'
import { useState } from 'react'
import formatPrice from './formatPrice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from "./Card"
import { filterData, filterCompany, sortPriceorder, setInputText } from '../../Feature/ProductRedux'
import ListView from "./ListView";
import GridView from './GridView'

export default function Product() {
    const dispatch = useDispatch();
    const [view, setView] = useState(true);

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
   
    let filterProduct = useSelector(temp);
    console.log(filterProduct)


    return (
        <div className="Wrapper flex p-3 border-2 border-slate-100">
            <Filter filterData={filter} filterComp={filterComp} sortOrder={sortOrder} setInputText={setInputTextValue} />

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


export function Filter({ filterData, filterComp,setInputText }) {
    const range = useRef(0);
    const [rangeValue, setRange] = useState(0);
    return (
        <aside className="flex min-h-[100%] w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
            <input type="text" placeholder='search' className='p-2 border-2 border-slate-100' onChange={(e)=>setInputText(e.target.value)} />
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">Category</label>
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
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">Company</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <select name="company" className="company w-[100%] p-2 border-2 border-slate-100" onChange={(e) => {
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
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="mx-2 text-sm font-medium">Themes</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="mx-2 text-sm font-medium">Setting</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
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
                    <div className="space-y-3 flex justify-center item-center">


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
