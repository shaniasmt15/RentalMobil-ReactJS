import React, { Fragment } from "react";
import Header from "../component/header";
import DetailMobilSection from "../component/detailMobilSection";
import SearchBar from "../component/searchBar";
import Footer from "../component/footer";


const DetailMobil = () => {
  return (
    <Fragment>
      <Header />
      <SearchBar />
      <DetailMobilSection />
      <Footer />
    </Fragment>
  )
}

export default DetailMobil;
