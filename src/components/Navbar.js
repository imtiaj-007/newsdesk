import logo from '../images/logo.svg'
import moon from '../images/moon.svg'
import sun from '../images/sun.svg'

import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import ModeContext from '../context/ModeContext';
import NewsContext from '../context/NewsContext'
import LanguageDropdown from './LanguageDropdown'
import CountryDropdown from './CountryDropdown';

const Navbar = () => {
    const { mode, toggleMode } = useContext(ModeContext);
    const { fetchNews, language, country, SetLoading } = useContext(NewsContext);

    const changeCategory = async (item) => {
        const category = item.innerHTML.toLowerCase();
        SetLoading(true);
        await fetchNews(category, language, country);
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
                            <li className="nav-item dropdown" style={{ listStyle: "none", cursor: "pointer" }}>
                                <ul className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </ul>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" onClick={(e) => changeCategory(e.currentTarget)}>General</li>
                                    <li className="dropdown-item" onClick={(e) => changeCategory(e.currentTarget)}>Business</li>
                                    <li className="dropdown-item" onClick={(e) => changeCategory(e.currentTarget)}>Science</li>
                                    <li className="dropdown-item" onClick={(e) => changeCategory(e.currentTarget)}>Entertainment</li>
                                    <li className="dropdown-item" onClick={(e) => changeCategory(e.currentTarget)}>Sports</li>
                                    <li className="dropdown-item" onClick={(e) => changeCategory(e.currentTarget)}>Health</li>
                                </ul>
                            </li>

                        </ul>

                        <div className="container d-flex justify-content-between" style={{ width: "35%", height: "25px" }}>
                                <LanguageDropdown/>
                                <CountryDropdown/>
                                <div style={{width: "25%"}}></div>

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
                            <button className="btn btn-secondary" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
