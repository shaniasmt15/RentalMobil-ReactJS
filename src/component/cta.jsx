import React from 'react';
import '../styles/style.css';


const CTA = () => {
  return (
    <section id='cta' style={{minHeight: '350px'}}>
        <div className="container d-flex justify-content-center align-items-center cta px-5">
                <div className="col-lg-9 d-flex flex-column justify-content-center align-items-center p-5">
                    <h1 className="text-center text-light mb-3">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p className="text-center text-light mb-5">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a href="/car" className="text-reset text-decoration-none">
                        <button className="btn btn-success">
                            Mulai Sewa Mobil
                        </button>
                    </a>                        
                </div>
            </div>
    </section>
  )
}

export default CTA;