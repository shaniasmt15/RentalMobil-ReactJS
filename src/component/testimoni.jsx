import React from "react";
import '../styles/style.css';


const Testimoni = () => {
    return (
        <section id="testimonial" style={{minHeight: '480px'}}>
                <div className="container d-flex flex-column align-items-center">
                    <h3>Testimonial</h3>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>

                
                <div className="d-flex justify-content-centet gap-3">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="cards-wrapper">
                                <div className="card p-3 d-flex border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                                    <div className="row d-flex align-items-center " style={{height: '100%'}}>
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
                                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>
                        
                        <div class="carousel-item active">
                            <div class="cards-wrapper">
                                <div className="card p-3 d-flex border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                                    <div className="row d-flex align-items-center " style={{height: '100%'}}>
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
                                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="cards-wrapper">
                                <div className="card p-3 d-flex border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                                    <div className="row d-flex align-items-center " style={{height: '100%'}}>
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
                                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>

                {/* <a class="carousel-control-prev" href="myCorousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="myCorousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>  */}

                
        </section>
    )
}


export default Testimoni;

{/* <div className="d-flex justify-content-center gap-3">
                        <div className="card d-flex p-3 border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
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
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-3 d-flex border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                            <div className="row d-flex align-items-center " style={{height: '100%'}}>
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
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-3 d-flex border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                            <div className="row d-flex align-items-center " style={{height: '100%'}}>
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
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="card p-3 d-flex border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                            <div className="row d-flex align-items-center " style={{height: '100%'}}>
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
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="control container d-flex justify-content-center gap-3">
                    <button className="btn btn-light my-3 mr-3" style={{border: 'gray solid 1px', borderRadius: '50%'}}>&#60;</button>
                    <button className="btn my-3" style={{backgroundColor: '#5CB85F', borderRadius: '50%', color: 'white'}}>&#62;</button>   
                </div>  */}

                
