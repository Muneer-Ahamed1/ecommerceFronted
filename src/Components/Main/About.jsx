import { useSelector } from "react-redux"
import HeroSection from "./HeroSection"
import InternetError from "../../InternetError";
import Loading from "./Loading";
export default function About() {

    const loading = useSelector((val) => val.Products.status.loading);
    const error = useSelector((val) => val.Products.status.error);
    if (loading) {
        return <Loading></Loading>
    }
    else if (error) {
        return <InternetError></InternetError>
    }
    else {

        return (


            <div className="About">
                <HeroSection name={"ELETRO ECOMMERSE"}></HeroSection>

            </div>
        )
    }
}