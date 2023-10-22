import React from 'react'
import FormatPrice from './formatPrice'
import { Link, useParams } from "react-router-dom"


export default function CartOne({ products }) {
    const id=useParams.id;
    return (
        <div className='flex flex-col justify-center  mx-auto items-center p-4 flex-wrap '>
            <ul>
                {
                    products.map((vl) => {
                        return (
                            <Link to={`/product/${id}`} className='flex flex-col'>
                                                        <Card vl={vl}></Card>
                            </Link>

                        )
                    })
                }
            </ul>

        </div>
    )
}
function Card({vl}) {
    return (
        <>

        
        <div className="card flex rounded-md border-2 border-slate-100  mx-auto gap-4 p-4 xl:w-[100%] max-h-[40vh] mb-3">
                                <li className=' w-1/2'>
                                    <img src={vl.image} alt="image not found" className=' object-cover h-[100%] rounded-md' /></li>
                                <li className='flex flex-col gap-4 justify-center p-4 w-1/2 '>
                                    <h1 className="heading text-3xl">
                                        {vl.name}
                                    </h1>
                                    <p className="price text-gray-400">Price: ${FormatPrice(vl.price)}</p>
                                    <p className='flex py-3 '>
                                        <Desc>{vl.description}</Desc>
                                    </p>
                                    <button className=' px-3 py-2  border-2 border-slate-200 rounded-md hover:bg-slate-900 hover:text-white bg-slate-50'
                                    onClick={(e)=>{
                                        e.stopPropagation();

                                    }}
                                    >ReadMore</button>

                                </li>
                            </div>
                            </>
    )
}
function Desc({ children }) {
    children = children.split(" ");
    if (children.length > 20) {
        children.length = 20;
        console.log(children)
        children = children.reduce((str, val) => {
            return str = str + " " + val;

        }, "")
        console.log(children)
        return children;
    }
    else {
        return children;
    }

}
