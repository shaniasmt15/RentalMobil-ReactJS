import axios from "axios";
import SearchBar from "./searchBar";
import { useSearchParams } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";


const CarSection = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterData, setFilterData] = useState({});

      const findCarFilter = async () => {
        setLoading(true);
        try {
            const  data  = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car/');
           let newData = data.data
           if(!filterData.carName &&  !filterData.carCategory &&  !filterData.carPrice){
            setCars(newData)
           }else if(filterData.carName &&  !filterData.carCategory &&  !filterData.carPrice){
                const selectResult = newData.filter((val) => val.name?.toLowerCase() === filterData.carName.toLowerCase());
                setCars(selectResult)
            }else if (filterData.carName && filterData.carCategory  &&  !filterData.carPrice){
                const selectResult = newData.filter((val) => val.name?.toLowerCase() === filterData.carName.toLowerCase() && val.category?.toLowerCase() === filterData.carCategory.toLowerCase());
                setCars(selectResult)
            }else{
                if(filterData.carPrice === '400000'){
                    console.log("a")
                    const selectResult = newData.filter((val) => val.name?.toLowerCase() === filterData.carName.toLowerCase() && val.category?.toLowerCase() === filterData.carCategory.toLowerCase() && filterData.carPrice >= val.price );
                    setCars(selectResult)
                }else if (filterData.carPrice === '400000-600000'){
                    const selectResult = newData.filter((val) => val.name?.toLowerCase() === filterData.carName.toLowerCase() && val.category?.toLowerCase() === filterData.carCategory.toLowerCase() && (val.price  >= 400000 && val.price <= 600000)) ;
                    setCars(selectResult)
                }else{
                    const selectResult = newData.filter((val) => val.name?.toLowerCase() === filterData.carName.toLowerCase() && val.category?.toLowerCase() === filterData.carCategory.toLowerCase() && val.price >= 600000 );
                    setCars(selectResult)
                }
            }
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };

    const handleSubmit= ()=>{
        findCarFilter()
    }

    return (
        <Fragment>
            <SearchBar  filterData={filterData}  handleSubmit={handleSubmit} setFilterData={setFilterData}/>
            <section id="cars">
                <div className="container">
                    <div className="row">
                        {
                            !loading ? (
                                cars.length? (
                                    cars.map((car, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">                   
                                                <div className="card p-3 d-flex flex-column justify-content-between" style={{height: '100%'}}>
                                                    {car.image? (<img src={car.image} alt="" style={{width: '100%'}} /> ) : (<img src="/Image/white.png" alt="" style={{width: '100%'}} /> )}                                             
                                                    
                                                    <div>
                                                        <p>{car.name}</p>
                                                        {car.price? (<h5>Rp {car.price.toLocaleString('en-US')}/ Hari</h5>) : (<h5>Rp. 0</h5>)}
                                                        <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                        <a href={`/car/${car.id}`} className="btn btn-success" style={{width:"100%"}}>Pilih Mobil</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) :  cars.length === 0 ? (
                                    null
                                ) :(
                                    <h1>Mobil Tidak Ditemukan</h1>
                                )
                            ) : (
                                <h1 className="text-center">Loading....</h1>
                            )
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    )
}



export default CarSection;