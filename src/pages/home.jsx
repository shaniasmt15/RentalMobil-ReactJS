import React, { Fragment } from "react";
import Banner from "../component/banner";
import OurServices from "../component/ourServices";
import WhyUs from "../component/whyUs";
import Testiomoni from "../component/testimoni";
import FAQ from "../component/faq";
import Footer from "../component/footer";
import CTA from "../component/cta";

const Home = () => {
    return (
        <Fragment>
            <Banner isButtonShow={true}/>
            <OurServices />
            <WhyUs />
            <Testiomoni />
            <CTA />
            <FAQ />
            <Footer />
        </Fragment>
    )
};

export default Home;


