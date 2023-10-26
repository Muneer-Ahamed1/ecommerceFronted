import { useDispatch, useSelector } from "react-redux"
import FormatPrice from "./formatPrice";
import { useEffect, useState } from "react";
import { removeToCart } from "../../Feature/CartRedux"
import { Link } from "react-router-dom";
export default function Cart() {
    const cartArr = useSelector((state) => state.Cart.addToCart);
    const [priceArr, setPrice] = useState([]);

    console.log(cartArr.length)
    if (cartArr.length == 0) {
        return <h1 className=" h-[70vh] font-bold flex flex-col justify-center items-center text-4xl capitalize text-slate-700 gap-6">
            <h1>
                {"No  Cart  Products :)"}</h1>
            <Link to="/product" className=" text-lg bg-slate-800 text-white p-3 rounded-md">To Product Section</Link>

        </h1>
    }
    else {


        return (
            <div className="Cart">
                <h1 className=" text-center text-2xl font-bold text-slate-800 p-3">Your Shopping Cart</h1>
                <div className="inner min-h-[70vh]">
                    {
                        cartArr && cartArr.map((val, index) => {

                            return (
                                <CartDiv list={val} index={index} priceArr={priceArr} setPrice={setPrice} ></CartDiv>
                            )

                        })
                    }
                </div>
                <CartTotal priceArr={priceArr}></CartTotal>


            </div>
        )
    }

}

function CartDiv({ list, index, priceArr, setPrice }) {
    const { count, img, name, company, price, color } = list
    const [counter, setCount] = useState(count);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("mounted", index)
        priceArr[index] = price * counter;
        setPrice(priceArr);
        console.log(priceArr)
    }, [])
    useEffect(() => {
        console.log("counter = " + counter + "price = " + price)
        if (counter <=0) {
            dispatch(removeToCart(index))
            setCount(count)
            let temp=[...priceArr];
            temp.splice(index,1);
            setPrice(temp);

        }
        else {
            let temp = [...priceArr]
            temp[index] = price * counter
            setPrice(temp);
        }
    }, [counter, index])

    console.log(counter +" "+ priceArr[index])

    function removeCart() {
        setCount(counter - 1)
    }
    return (
        <div className="CartDiv flex justify-evenly items-center p-4 w-[60%] mx-auto border-2 border-slate-100 my-3 rounded-md shadow-md">
            <div className="left flex flex-col p-2 gap-2">
                <div className="Image">
                    <img src={img.url} alt="" className=" object-cover h-28" />
                </div>
                <div className="div flex flex-col gap-2">
                    <p className=" font-bold flex justify-evenly items-center"> <span className="text-lg ">{name}</span> <span className="text-gray-600 text-base">{price}</span></p>
                    <p className="font-bold text-base flex justify-evenly items-center"><span className=" text-gray-600">{company}</span>
                        <span className={`   flex justify-center items-center p-4 rounded-full border-2 border-slate-100`} style={{ backgroundColor: `${color}` }}>
                        </span></p>
                </div>
            </div>
            <div className="counter flex items-center justify-center p-2 gap-2">
                <button className="px-4 py-2  rounded-md bg-slate-800 text-white  font-bold text-lg" onClick={() => {


                    setCount(counter + 1)

                }}>+</button>
                <p className="p-4 font-semibold text-lg">{counter}</p>
                <button className="py-2 px-4 rounded-md bg-slate-800 text-white  font-bold text-lg" onClick={() => removeCart()}>-</button>
            </div>
            <div className="right font-bold text-gray-800 text-xl">
                {FormatPrice(price * counter)}
            </div>


        </div>
    )
}


function CartTotal({ priceArr }) {
    console.log(priceArr)
    const total = priceArr.reduce((count, val) => {
        count = count + val;
        return count;

    }, 0)
    return (
        <div className=" w-[80%] mx-auto border-t-2 border-slate-200 p-6 flex flex-col items-center gap-3">
            <div className="total p-4 w-[80%] flex flex-col gap-2">
                <h3 className="text-xl mt-2 flex items-center justify-between p-3 border-b-2 border-slate-200">
                    <h1 className=" text-gray-700">Your Shipping:</h1> <h1>{FormatPrice(40000)}</h1>
                </h3>
                <h3 className="text-xl mt-2 flex items-center justify-between p-3 border-b-2 border-slate-200">
                    <h1>Your Remaining</h1> <h1>{FormatPrice(total - 40000)}</h1>

                </h3>
                <h3 className="text-xl mt-2 flex items-center justify-between p-3 border-b-2 border-slate-200">
                    <h1> Your Total</h1>
                    <h1>{FormatPrice(total)}</h1>
                </h3>

            </div>
            <button className=" btn px-3 py-2 bg-slate-600 text-white rounded-md  hover:bg-slate-900">Check out Cart</button>
        </div>
    )
}