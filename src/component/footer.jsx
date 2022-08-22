import React from "react";
import '../styles/style.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container pt-5 pb-3">
                <div className="row">
                    <div className="col-lg-4">
                        <p className="fw-bold">Jalan Suroyo No. 161 Mayangan Kota<br /> Probolonggo 672000</p>
                        <p className="fw-bold">binarcarrental@gmail.com</p>
                        <p className="fw-bold">081-233-334-808</p>
                    </div>
                    <div className="col-lg-2 links">
                        <a href="#ourServices">
                            <p className="fw-bold">Our Services</p> 
                        </a>
                        <a href="#whyUs">
                            <p className="fw-bold">Why Us</p>
                        </a>
                        <a href="#testimonial">
                            <p className="fw-bold">Testimonial</p>
                        </a>
                        <a href="#faq">
                            <p className="fw-bold">FAQ</p>
                        </a>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <p className="fw-bold">Connect with us</p>
                        <div className="d-flex gap-1">    
                            <a href="#" className="mr-2">
                                <i className="ri-facebook-line p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>
                            <a href="#" className="mr-2">
                                <i className="ri-instagram-line p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>
                            <a href="#" className="mr-2">
                                <i className="ri-twitter-line p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>  
                            <a href="#" className="mr-2">
                                <i className="ri-mail-line p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>  
                            <a href="#" className="mr-2">
                                <i className="ri-twitch-line p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>  
                        </div>
                        
                    </div>
                    <div className="col-lg-3 mb-3">
                        <p className="fw-bold">Copyright Binar 2022</p>
                        <a className="navbar-brand px-3 text-light p-1" href="/">ShaniaRent.</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;

