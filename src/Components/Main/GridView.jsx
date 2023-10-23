import ProductCard from "./Card"
export default function GridView({productData,style}) {
    return (<div className="products-list grid gap-4 sm:grid-cols-2  lg:grid-col-2 xl:grid-cols-3">
    {
        productData && productData?.map((vl) => {
            return (<ProductCard key={vl.id} data={vl} style={style} />)
        })
    }


</div>)
}