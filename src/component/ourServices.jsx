import React from 'react';
import '../styles/style.css';


const OurServices = () => {
    return (
    <section id="ourServices" className="d-flex align-items-center" >
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center ">
                    <img className="img-fluid person-img justify-content-center " src="./Image/img_service.png" alt="" />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center ">
                    <h3 className='mt-3'>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                    <p className='mt-3 fw-bold'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga <br />
                    lebih murah dibandingkan yang lain, kondisi mobil baru, serta <br />
                    kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,<br /> meeting, dll.</p>
                    <ul>
                        <img className=" our-services " src="./Image/cek.png" alt="" />
                            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p> 
                        {/* <img className=" our-services " src="./Image/cek.png" alt="" /> */}
                            <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        {/* <img className=" our-services " src="./Image/cek.png" alt="" /> */}
                            <p>Sewa Mobil Jangka Panjang Bulanan</p>
                        {/* <img className=" our-services " src="./Image/cek.png" alt="" /> */}
                            <p>Gratis Antar - Jemput Mobil di Bandara</p>
                        {/* <img className=" our-services " src="./Image/cek.png" alt="" /> */}
                            <p>Layanan Airport Transfer / Drop In Out</p>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default OurServices;