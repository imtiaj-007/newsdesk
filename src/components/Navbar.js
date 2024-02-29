import logo from '../images/logo.svg'
import moon from '../images/moon.svg'
import sun from '../images/sun.svg'
import globeLight from '../images/globe-light.svg'
import globeDark from '../images/globe-dark.svg'

import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import ModeContext from '../context/ModeContext';
import NewsContext from '../context/NewsContext'

const Navbar = () => {
    const { mode, toggleMode } = useContext(ModeContext);
    const { fetchNews } = useContext(NewsContext);

    const changeLanguage = async (item)=>{
        let curItem = document.getElementById("activeNav");
        let temp = curItem.innerHTML;
        curItem.innerHTML = item.innerHTML;
        item.innerHTML = temp;
        
        const lang = curItem.innerHTML.substring(0, 2).toLowerCase();
        await fetchNews('general', lang, 'in');
    }

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg" style={{ backgroundColor: mode === 'light' ? "#ededed" : "#131313" }} data-bs-theme={mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="NewsDesk" style={{ width: "130px" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/general">General</Link></li>
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="entertainment">Entertainment</Link></li>
                                </ul>
                            </li>

                        </ul>

                        <div className="container d-flex w-25 justify-content-between" style={{ height: "25px" }}>
                            <div className="row gx-2" >
                                <i className="col-sm"><img className={`${mode === 'dark' ? 'd-none' : ''}`} src={globeLight} alt="globe" /></i>
                                <i className="col-sm"><img className={`${mode === 'light' ? 'd-none' : ''}`} src={globeDark} alt="globe" /></i>
                                
                                <ul className={`col-sm d-flex m-auto text-${mode === 'dark' ? 'white' : ''}`} style={{listStyle: "none", cursor: "pointer"}}>
                                    <li className="nav-item dropdown">
                                        <ul className="nav-link dropdown-toggle" to="#" id="activeNav" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            English
                                        </ul>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item" onClick={(e)=> changeLanguage(e.currentTarget)}>French</li>
                                            <li className="dropdown-item" onClick={(e)=> changeLanguage(e.currentTarget)}>Hindi</li>
                                            <li className="dropdown-item" onClick={(e)=> changeLanguage(e.currentTarget)}>Italian</li>
                                            <li className="dropdown-item" onClick={(e)=> changeLanguage(e.currentTarget)}>Russian</li>
                                            <li className="dropdown-item" onClick={(e)=> changeLanguage(e.currentTarget)}>Tamil</li>
                                            <li className="dropdown-item" onClick={(e)=> changeLanguage(e.currentTarget)}>Telugu</li>
                                        </ul>
                                    </li>
                                </ul>
                                
                            </div>

                            <div className="d-flex mx-2" style={{ flexDirection: 'row-reverse' }}>

                                <i className={`bi bi-moon-stars-fill ${mode === 'light' ? 'd-none' : ""}`}><img src={moon} alt="moon" /></i>
                                <i className={`bi bi-brightness-high-fill ${mode === 'dark' ? 'd-none' : ""}`}><img src={sun} alt="moon" /></i>

                                <div className="form-check form-switch mx-2">
                                    <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={toggleMode} />
                                </div>
                            </div>
                        </div>

                        <form className="d-flex ms-5" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
