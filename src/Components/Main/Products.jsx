import React from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import { Home, Copy, Bookmark, Users, Settings } from 'lucide-react'
import { useRef } from 'react'
import { useState } from 'react'
import formatPrice from './formatPrice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from "./Card"
import { filterData } from '../../Feature/ProductRedux'

export default function Product() {
    const dispatch = useDispatch();
    const data = useSelector((val) => val.Products.productData)
    let [productData, setProductData] = useState(data);
    let filterProduct = useSelector((val) => val.Products.filterData);






    function filter(vl) {
        if (vl === "All") {
            console.log(data)
            setProductData((data))
        }
        else {
            dispatch(filterData(vl));
            setProductData(filterProduct);
        }
    }

    return (
        <div className="Wrapper flex p-3 border-2 border-slate-100">
            <Filter filterData={filter} />
            <ProductList productData={productData} />


        </div>
    )
}


export function ProductList({ productData }) {
    const style = "product  w-[100%] h-[100%]"



    return (
        <div className="Products mx-auto flex flex-col max-w-[70%]">
            <div className="product-nav grid grid-cols-3 my-2">
                <div className="first">


                </div>
                <div className="second">

                </div>
                <div className="third justify-self-end">
                    <select name="Filter" className="Filter p-2 border-2 border-slate-100" onClick={(e) => { console.log(e.target) }}>
                        <option value="" selected>Filter</option>
                        <option value="highest" >Price(highest)</option>
                        <option value="lowest" >Price(lowest)</option>
                    </select>



                </div>
            </div>
            <div className="products-list grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid">
                {
                    productData && productData?.map((vl) => {
                        return (<ProductCard key={vl.id} data={vl} style={style} />)
                    })
                }


            </div>




        </div>
    )
}









export function Filter({ filterData }) {
    const range = useRef(0);
    const [rangeValue, setRange] = useState(0);
    return (
        <aside className="flex min-h-[100%] w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
            <input type="text" placeholder='search' className='p-2 border-2 border-slate-100' />
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">Category</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                e.preventDefault;
                                filterData("All");
                            }}

                        >
                            <span className="mx-2 text-sm font-medium">All</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                filterData("Mobile")
                            }}
                        >
                            <span className="mx-2 text-sm font-medium">Mobile</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => {
                                e.preventDefault;
                                filterData("Laptop")
                            }
                            }

                        >
                            <span className="mx-2 text-sm font-medium">Laptop</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => filterData("Computer")}
                        >
                            <span className="mx-2 text-sm font-medium">Computer</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => filterData("Accessories")}
                        >
                            <span className="mx-2 text-sm font-medium">Accessories</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            onClick={(e) => filterData("Watch")}

                        >
                            <span className="mx-2 text-sm font-medium">Watch</span>
                        </a>
                    </div>
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">Company</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <select name="company" className="company w-[100%] p-2 border-2 border-slate-100">
                                <option value="" selected disabled>company</option>
                                <option value="apple">apple</option>
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
                            <label for="vol">{
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
