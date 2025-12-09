import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import FAQ from "../Faq/Faq";
import Features from "../Features/Features";
import Merchant from "../Merchant/Merchant";
import Services from "../Services/Services";
import Works from "../Works/Works";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
            <Brands></Brands>
            <Features></Features>
            <Merchant></Merchant>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;