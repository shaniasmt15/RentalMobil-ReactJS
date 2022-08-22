import React, { Fragment} from "react";
import Footer from "../component/footer";
import MobilSection from "../component/mobilSection";
import Banner from "../component/banner";


const Mobil = () => {
    return (
        <Fragment>
            <Banner isButtonShow={false} /> 
            <MobilSection />
            <Footer />
        </Fragment>
    )
}

export default Mobil;