import HeroSection from "./HeroSection"
import Feature from "./Feature"
import { useSelector } from "react-redux";
import Loading from "./Loading";
import InternetError from "../../InternetError";
export default function Home() {
    const loading = useSelector((val) => val.Products.status.loading);
    const error=useSelector((val)=>val.Products.status.error);
    if(loading) {
        return <Loading></Loading>
    }
    else if(error) {
        return <InternetError></InternetError>
    }
    else{

    return (
        <div>
        <HeroSection name={"ELETRO STORE"}></HeroSection>
        <Feature></Feature>
        </div>
    )
}
}