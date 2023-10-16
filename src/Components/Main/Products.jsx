import React from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import { Home, Copy, Bookmark, Users, Settings } from 'lucide-react'
import { useRef } from 'react'
import { useState } from 'react'
import formatPrice from './formatPrice'

export default function Product() {
    return (
        <div className="Wrapper">
            <Filter />


        </div>
    )
}









export function Filter() {
    const range = useRef(0);
    const [rangeValue, setRange] = useState();
    return (
        <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
            <input type="text" placeholder='search' className='p-2 border-2 border-slate-100' />
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">Category</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <span className="mx-2 text-sm font-medium">All</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <span className="mx-2 text-sm font-medium">Mobile</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <span className="mx-2 text-sm font-medium">Laptop</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <span className="mx-2 text-sm font-medium">Computer</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <span className="mx-2 text-sm font-medium">Accessories</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <span className="mx-2 text-sm font-medium">Watch</span>
                        </a>
                    </div>
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">Company</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
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
                            href="#"
                        >
                            <Brush className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Themes</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <Wrench className="h-5 w-5" aria-hidden="true" />
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
