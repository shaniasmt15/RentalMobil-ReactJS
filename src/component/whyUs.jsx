import React from 'react';

const WhyUs = () => {
  return (
    <section id="whyUs" className="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
            <div className="container mb-5">
                <h3>Why Us?</h3>
                <p>Mengapa harus pilih Binar Car Rental?</p>
                <div className="row" style={{rowGap: '15px'}}>
                    <div className="col-lg-3">
                        <div className="card p-3" style={{height: '100%'}}>
                            <h5><i className="ri-thumb-up-line p-2 my-3" style={{color: 'white', backgroundColor: '#F9CC00', borderRadius: '50%'}}></i></h5>
                            <h5>Mobil Lengkap</h5>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card p-3" style={{height: '100%'}}>
                            <h5><i className="ri-price-tag-3-line p-2 my-3" style={{color: 'white', backgroundColor: '#FA2C5A', borderRadius: '50%'}}></i></h5>
                            <h5>Harga Murah</h5>
                            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card p-3" style={{height: '100%'}}>
                            <h5><i className="ri-time-line p-2 my-3" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i></h5>
                            <h5>Layanan 24 Jam</h5>
                            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card p-3" style={{height: '100%'}}>
                            <h5><i className="ri-award-line p-2 my-3" style={{color: 'white', backgroundColor: '#5CB85F', borderRadius: '50%'}}></i></h5>
                            <h5>Sopir Profesional</h5>
                            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default WhyUs;