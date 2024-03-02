import React, { useContext, useEffect } from 'react'
import { isMobile } from 'react-device-detect';

import NewsCard from './NewsCard';
import Spinner from './Spinner';
import Tools from './Tools';

import ModeContext from '../context/ModeContext';
import NewsContext from '../context/NewsContext';

const NewsContainer = () => {
    const { mode } = useContext(ModeContext);
    const { news, fetchNews, page, changePage, category, loading } = useContext(NewsContext);

    useEffect(() => {
        fetchNews()
    }, [])

    const capitalize = (s) => {
        const st = s.charAt(0).toUpperCase() + s.substring(1);
        return st;
    }

    const handleOnClick = ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        changePage();
    }

    return (
        <>
            {(isMobile || window.innerWidth < 450) && <Tools/>}

            <div className={`container-fluid text-${mode === 'dark' ? "white" : "dark"}`} style={{ backgroundColor: mode === 'dark' ? "black" : "white" }} key={Date.now()}>

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

                        {!loading && !news && <div className={`d-flex w-100 m-auto text-center`} style={{
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
                    <button disabled={page <= 1} className="btn btn-secondary" onClick={() => handleOnClick()}>&larr; Previous</button>
                    <button disabled={page >= 2 || !news} className="btn btn-secondary" onClick={() => handleOnClick()}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}

export default NewsContainer
