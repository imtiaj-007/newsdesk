import React, { useContext, useEffect } from 'react'
import { isMobile } from 'react-device-detect';

import moon from '../images/moon.svg'
import sun from '../images/sun.svg'

import NewsCard from './NewsCard';
import Spinner from './Spinner';

import ModeContext from '../context/ModeContext';
import NewsContext from '../context/NewsContext';
import LanguageDropdown from './LanguageDropdown';
import CountryDropdown from './CountryDropdown';

const NewsContainer = () => {
    const { mode, toggleMode } = useContext(ModeContext);
    const { news, fetchNews, page, changePage, category, loading } = useContext(NewsContext);

    useEffect(() => {
        fetchNews()
    }, [])

    const capitalize = (s) => {
        const st = s.charAt(0).toUpperCase() + s.substring(1);
        return st;
    }

    return (
        <>
            {(isMobile || window.innerWidth < 450) && <div className="container-fluid d-flex" style={{ position: "relative", height: "60px", margin: 'none', backgroundColor: mode === 'light' ? "#ededed" : "#131313" }} id="toolsBelow">
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
            </div>}

            <div className={`container-fluid text-${mode === 'dark' ? "white" : "dark"}`} style={{ backgroundColor: mode === 'dark' ? "black" : "white" }}>

                <div className={`container bg-${mode === 'dark' ? "black" : "white"} m-auto`} style={{ minHeight: "80vh", padding: "15px 0" }}>
                    <h3 className="text-center my-2">{`Top Headlines - ${capitalize(category)} News`}</h3>
                    <div className="row p-2 m-auto">

                        {loading && <Spinner />}
                        {!loading && news && news.map((element, index) => {
                            if (page === 1) {
                                if (index < 6)
                                    return <NewsCard key={element.url} news={element} />
                            } else {
                                if (index > 5)
                                    return <NewsCard key={element.url} news={element} />
                            } return null;
                        })}

                        {!news && <div className={`d-flex w-100 m-auto text-center`} style={{
                            height: "50vh", justifyContent: "center",
                            alignItems: "center"
                        }}><h4>API Limit Exhausted! Please try again later</h4></div>}

                        {news && news.length === 0 && <div className={`d-flex w-50 m-auto text-center`} style={{
                            height: "50vh", justifyContent: "center",
                            alignItems: "center"
                        }}><h4>Oops! No Results Found</h4></div>}
                    </div>
                </div>

                <div className="container d-flex justify-content-around pb-4">
                    <button disabled={page <= 1} className="btn btn-secondary" onClick={() => changePage()}>&larr; Previous</button>
                    <button disabled={page >= 2 || !news} className="btn btn-secondary" onClick={() => changePage()}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}

export default NewsContainer
