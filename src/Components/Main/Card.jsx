import formatPrice from "./formatPrice"
import { Link } from "react-router-dom"
export default function Product({data,style}) {
    const {category,image,name,price,company,id}=data
    return (
        <Link className={style} to={`/product/${id}`} >
        <div className="border-2 border-slate-100 p-2 rounded-md">
            <div className="card">
                <div className="img relative">
                    <img src={image} alt="NOT FOUND" />
                    <h1 className="absolute top-3 right-1 bg-slate-50 px-4 py-2 rounded-full">{category}</h1>
                </div>
                <div className="data flex justify-between p-2">
                    <h1 className=" text-base">{name}</h1>
                    <h2>{formatPrice(price)}</h2>

                </div>
            </div>
        </div>
        </Link>

    )
}