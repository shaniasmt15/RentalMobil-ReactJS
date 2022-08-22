import React,  { useState } from "react";

const Header = () => {
    const [sidebar, setSidebar] = useState('collapse');

    window.addEventListener('scroll', () => {
        setSidebar('collapse');
    })

    return (
        <section id="hero" style={{minHeight: '200px'}}>
            <nav className="navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand text-light px-3 ml-3"href="/">ShaniaRent.</a>
                    <button onClick={() => sidebar === 'collapse'? setSidebar(null): setSidebar('collapse')} style={{zIndex: '3'}} className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`navbar-collapse text-right ${sidebar}`} id='navbarNav'>
                        <ul className="navbar-nav ms-auto flex-nowrap">
                            <li className="nav-item  fw-bold">
                                <a className="nav-link" href="/#ourServices">Our Services</a>
                            </li>
                            <li className="nav-item  fw-bold">
                                <a className="nav-link" href="/#whyUs">Why Us</a>
                            </li>
                            <li className="nav-item  fw-bold">
                                <a className="nav-link" href="/#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item  fw-bold">
                                <a className="nav-link" href="/#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}


export default Header;