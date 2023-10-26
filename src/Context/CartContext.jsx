import { createContext,useContext,useState} from "react"
const cartContext=createContext();

export default function CartContext({children}) {
    const [count, setCount] = useState(0);

    return(
        <cartContext.Provider value={{count,setCount}}>
            {children}
        </cartContext.Provider>
    )

}

export function customCart(){
    return useContext(cartContext);
}