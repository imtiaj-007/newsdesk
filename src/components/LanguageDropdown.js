import globeLight from '../images/globe-light.svg'
import globeDark from '../images/globe-dark.svg'

import React, { useContext } from 'react'
import ModeContext from '../context/ModeContext';
import NewsContext from '../context/NewsContext';

const LanguageDropdown = () => {
    const { mode } = useContext(ModeContext);
    const { fetchNews, category, country, SetLoading } = useContext(NewsContext);

    const changeLanguage = async (item)=>{
        let curItem = document.getElementById("activeLang");
        curItem.innerHTML = item.innerHTML;
        
        const lang = curItem.innerHTML.substring(0, 2).toLowerCase();
        SetLoading(true);
        await fetchNews(category, lang, country);
    }

    return (
        <div>
            <div className="row gx-1" >
                <i className="col-sm"><img className={`${mode === 'dark' ? 'd-none' : ''}`} src={globeLight} alt="globe" /></i>
                <i className="col-sm"><img className={`${mode === 'light' ? 'd-none' : ''}`} src={globeDark} alt="globe" /></i>

                <ul className={`col-sm d-flex m-auto text-${mode === 'dark' ? 'white' : ''}`} style={{ listStyle: "none", cursor: "pointer" }}>
                    <li className="nav-item dropdown">
                        <ul className="nav-link dropdown-toggle" to="#" id="activeLang" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English
                        </ul>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" onClick={(e) => changeLanguage(e.currentTarget)}>English</li>
                            <li className="dropdown-item" onClick={(e) => changeLanguage(e.currentTarget)}>French</li>
                            <li className="dropdown-item" onClick={(e) => changeLanguage(e.currentTarget)}>Hindi</li>
                            <li className="dropdown-item" onClick={(e) => changeLanguage(e.currentTarget)}>Italian</li>
                            <li className="dropdown-item" onClick={(e) => changeLanguage(e.currentTarget)}>Russian</li>
                            <li className="dropdown-item" onClick={(e) => changeLanguage(e.currentTarget)}>Tamil</li>
                            <li className="dropdown-item" onClick={(e) => changeLanguage(e.currentTarget)}>Telugu</li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default LanguageDropdown
