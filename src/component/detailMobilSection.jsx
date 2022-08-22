import React, { Fragment, useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const CarDetailSection = () => {
    const [car, setCar] = useState();
    const [loading, setLoading] = useState(false);
    let { id } = useParams();

    const loadCarDetail = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`);
            setCar(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadCarDetail();
    }, []) 

    
    return(
        <Fragment>
        { !loading? (
                car? (
                <section className="mb-4" id="carDetail">
                    <div className="container">
                        <div className="row d-flex flex-row-reverse justify-content-evenly mx-1">
                            <div className="col-lg-4 col-md-6">
                                <div className=" row card p-3 d">
                                    <div className="col-12 p-5">
                                    {car.image? (<img src={car.image} alt="" style={{width: '100%'}} /> ) : (<img src="/Image/white.png" alt="" style={{width: '100%'}} /> )} 
                                    </div>
                                    <div>
                                        <h4>{car.name}</h4>
                                        {car.category? (<p><i className="ri-user-fill mr-2"></i> {car.category}</p>) : (<p><i className="fa-regular fa-user mr-2"></i>tidak ada data</p>) }
                                        
                                    </div>
                                    <div className="d-flex justify-content-between my-3">
                                            <h4>Total</h4>
                                            {car.price? (<h5>Rp {car.price.toLocaleString('en-US')}/ Hari</h5>) : (<h5>Rp. 0</h5>)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 card p-4">
                                <h4>Tentang Paket</h4>
                                <h5 className="my-3">Include</h5>
                                <ul className="lh-lg" style={{listStyleType: "disc"}}>
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata </li>
                                    <li>Sudah termasuk Tiket Wisata </li>
                                </ul>
                                <h5 className="my-3">Exclude</h5>
                                <ul className="lh-lg" style={{listStyleType: "disc"}}>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <h5 className="my-3">Refund, Reschedule, Overtime</h5>
                                <ul className="lh-lg" style={{listStyleType: "disc"}}>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> ) : (<h2 className="d-flex justify-content-center m-5"> Mobil Tidak Ditemukan</h2>)
            ) : (<h2 className="d-flex justify-content-center m-5">Loading...</h2>)
                    
            }
        </Fragment>
        )
    }

export default CarDetailSection;