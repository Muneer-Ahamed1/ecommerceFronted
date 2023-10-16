import HeroSection from "./HeroSection"
import Feature from "./Feature"
import { useSelector } from "react-redux";
export default function Home() {
    const loading = useSelector((val) => val.Products.status.loading);
    if(loading) {
        return <h1>Loading</h1>
    }

    return (
        <div>
        <HeroSection name={"ELETRO STORE"}></HeroSection>
        <Feature></Feature>
        </div>
    )
}