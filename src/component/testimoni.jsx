import React from "react";
import { useState } from "react";


function Testimonial() {
    const [testimonial1, setTestimonial1] = useState('none');
    const [testimonial2, setTestimonial2] = useState('flex');
    const [testimonial3, setTestimonial3] = useState('none');

    const handleNext = () => {
        if (testimonial1 == 'flex') {
            setTestimonial1('none');
            setTestimonial2('flex');
            setTestimonial3('none')
        } else if (testimonial2 == 'flex') {
            setTestimonial2('none');
            setTestimonial3('flex');
            setTestimonial1('none')
        }
    }

    const handlePrevious = () => {
        if (testimonial2 == 'flex') {
            setTestimonial2('none');
            setTestimonial1('flex');
            setTestimonial3('none');
        } else if (testimonial3 == 'flex') {
            setTestimonial3('none');
            setTestimonial2('flex');
            setTestimonial1('none');
        }
    }

    return (
        <section id="testimonial">
                <div className="container d-flex flex-column align-items-center">
                    <h3>Testimonial</h3>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>

                <div className="d-flex justify-content-center mx-3" >
                    <div className="card p-3 sm-p-5" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF', display: `${testimonial1}`}}>
                        <div className="row align-items-center" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src="./Image/Person.png" alt="person" />
                            </div>
                            <div className="col-lg-9">
                                <div className="star my-3">
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>Shania 31, Bukittinggi</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF', display: `${testimonial2}`}}>
                        <div className="row d-flex align-items-center" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src="./Image/Person2.png" alt="person2" />
                            </div>
                            <div className="col-lg-9">
                            <div className="star my-3">
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>Rieke 32, Pekanbaru</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF', display: `${testimonial3}`}}>
                        <div className="row d-flex align-items-center" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src="./Image/Person.png" alt="person" />
                            </div>
                            <div className="col-lg-9">
                                <div className="star my-3">
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                    <i className="ri-star-fill" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>Aldil 33, Medan</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="control container d-flex justify-content-center gap-3">
                    <button onClick={handlePrevious} className="btn btn-light my-3 mr-3" style={{border: 'gray solid 1px', borderRadius: '50%'}}>&#60;</button>
                    <button onClick={handleNext} className="btn my-3" style={{backgroundColor: '#5CB85F', borderRadius: '50%', color: 'white'}}>&#62;</button>
                </div>
        </section>
    )
}


export default Testimonial;               
