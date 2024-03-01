import flagLight from '../images/flag-light.svg'
import flagDark from '../images/flag-dark.svg'

import React, { useContext } from 'react'
import ModeContext from '../context/ModeContext';
import NewsContext from '../context/NewsContext';


const CountryDropdown = () => {
    const countryMap = {
        "Australia": 'au',
        "Brazil": 'br',
        "China": 'cn',
        "India": 'in',
        "Italy": 'it',
        "Russia": 'ru',
        "United Kingdom": 'gb',
        "United States": 'us'
    }
    const { mode } = useContext(ModeContext);
    const { fetchNews, category, language, SetLoading } = useContext(NewsContext);

    const changeCountry = async (item)=>{
        let curItem = document.getElementById("activeCountry");
        curItem.innerHTML = item.innerHTML;

        const country = countryMap[curItem.innerHTML];
        SetLoading(true);
        await fetchNews(category, language, country);
    }
    return (
        <div>
            <div className="row gx-1" >
                <i className="col-sm"><img className={`${mode === 'dark' ? 'd-none' : ''}`} src={flagLight} alt="globe" /></i>
                <i className="col-sm"><img className={`${mode === 'light' ? 'd-none' : ''}`} src={flagDark} alt="globe" /></i>

                <ul className={`col-sm d-flex m-auto text-${mode === 'dark' ? 'white' : ''}`} style={{ listStyle: "none", cursor: "pointer" }}>
                    <li className="nav-item dropdown">
                        <ul className="nav-link dropdown-toggle" to="#" id="activeCountry" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            India
                        </ul>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" onClick={(e) => changeCountry(e.currentTarget)}>Australia</li>
                            <li className="dropdown-item" onClick={(e) => changeCountry(e.currentTarget)}>Brazil</li>
                            <li className="dropdown-item" onClick={(e) => changeCountry(e.currentTarget)}>France</li>
                            <li className="dropdown-item" onClick={(e) => changeCountry(e.currentTarget)}>India</li>
                            <li className="dropdown-item" onClick={(e) => changeCountry(e.currentTarget)}>Italy</li>
                            <li className="dropdown-item" onClick={(e) => changeCountry(e.currentTarget)}>Russia</li>
                            <li className="dropdown-item" onClick={(e) => changeCountry(e.currentTarget)}>United Kingdom</li>
                            <li className="dropdown-item" onClick={(e) => changeCountry(e.currentTarget)}>United States</li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default CountryDropdown
