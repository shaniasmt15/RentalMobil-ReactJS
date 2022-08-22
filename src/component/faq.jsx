import React, { useState } from 'react';
import '../styles/style.css';

const FAQ = () => {
  const [faq1, setFaq1] = useState('none');
  const [faq2, setFaq2] = useState('none');
  const [faq3, setFaq3] = useState('none');
  const [faq4, setFaq4] = useState('none');
  const [faq5, setFaq5] = useState('none');
  
  return (
      <section id="faq" className="mt-5" style={{minHeight: '400px'}}>
          <div className="container">
              <div className="row mt-4">
                  <div className="col-lg-6">
                      <h3>Frequently Asked Question</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                  <div className="col-lg-6">
                      <div className="faq row mx-1">
                          <div onClick={() => {faq1 === 'none'? setFaq1('flex') : setFaq1('none'); setFaq2('none'); setFaq3('none'); setFaq4('none'); setFaq5('none')}} className="faq-item card pt-3">
                              <p className=" d-flex justify-content-between">Apa saja syarat yang dibutuhkan? <i className="ri-arrow-down-s-line"></i></p> 
                          </div>
                          <p style={{display: `${faq1}`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                          
                          <div onClick={() => {faq2 === 'none'? setFaq2('flex') : setFaq2('none'); setFaq1('none'); setFaq3('none'); setFaq4('none'); setFaq5('none')}} className=" faq-item card pt-3">
                              <p className=" d-flex justify-content-between">Berapa hari minimal sewa mobil lepas kunci? <i className="ri-arrow-down-s-line "></i></p> 
                          </div>
                          <p style={{display: `${faq2}`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                          
                          <div onClick={() => {faq3 === 'none'? setFaq3('flex') : setFaq3('none'); setFaq2('none'); setFaq1('none'); setFaq4('none'); setFaq5('none')}} className="faq-item card pt-3">
                              <p className=" d-flex justify-content-between">Berapa hari sebelumnya sabaiknya booking sewa mobil? <i className="ri-arrow-down-s-line "></i></p>
                          </div>
                          <p style={{display: `${faq3}`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                          
                          <div onClick={() => {faq4 === 'none'? setFaq4('flex') : setFaq4('none'); setFaq2('none'); setFaq3('none'); setFaq1('none'); setFaq5('none')}} className="faq-item card pt-3">
                              <p className=" d-flex justify-content-between">Apakah Ada biaya antar-jemput?<i className="ri-arrow-down-s-line "></i></p>
                          </div>
                          <p style={{display: `${faq4}`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                          
                          <div onClick={() => {faq5 === 'none'? setFaq5('flex') : setFaq5('none'); setFaq2('none'); setFaq3('none'); setFaq4('none'); setFaq1('none')}} className="faq-item card pt-3">
                              <p className=" d-flex justify-content-between">Bagaimana jika terjadi kecelakaan<i className="ri-arrow-down-s-line "></i></p> 
                          </div>
                          <p style={{display: `${faq5}`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default FAQ;