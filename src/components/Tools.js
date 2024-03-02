import moon from '../images/moon.svg'
import sun from '../images/sun.svg'

import React, { useContext } from 'react'

import LanguageDropdown from './LanguageDropdown';
import CountryDropdown from './CountryDropdown';
import ModeContext from '../context/ModeContext';


const Tools = () => {
    const { mode, toggleMode } = useContext(ModeContext);

    return (
        <div>
            <div className="container-fluid d-flex" style={{ position: "relative", height: "60px", margin: 'none', backgroundColor: mode === 'light' ? "#ededed" : "#131313" }} id="toolsBelow">
                <div className="container tools d-flex justify-content-between" style={{ height: "25px" }} data-bs-theme={mode}>
                    <LanguageDropdown />
                    <CountryDropdown />
                    <div className="e-space" style={{ width: "20%" }}></div>

                    <div className="d-flex mx-2" style={{ flexDirection: 'row-reverse' }}>

                        <i className={`bi bi-moon-stars-fill ${mode === 'light' ? 'd-none' : ""}`}><img src={moon} alt="moon" /></i>
                        <i className={`bi bi-brightness-high-fill ${mode === 'dark' ? 'd-none' : ""}`}><img src={sun} alt="moon" /></i>

                        <div className="form-check form-switch mx-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={toggleMode} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Tools
