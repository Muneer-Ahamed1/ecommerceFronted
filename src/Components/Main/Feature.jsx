import { useSelector } from "react-redux";
import Product from "./Card";
export default function Feature() {
    const products = useSelector((val) => val.Products.productData);
    const productData = products.filter((vl) => {
        return vl?.featured;
    })
    console.log(productData)

    return (
        <div className="feature bg-slate-50">
            <div className="p-3">
                <h1 className="title sm:w-2/5 text-center mb-3 text-lg ">Our Feature Services</h1>
                <div className="wrapProduct flex gap-3 justify-center sm:flex-row flex-wrap flex-col items-center">
                    {
                        productData && productData.map((item, index) => {
                            const { category, image, name, price, company, id } = item
                            return (
                                <Product key={index} data={item} />
                            )
                        })
                    }
                </div>


            </div>

        </div>
    )
}