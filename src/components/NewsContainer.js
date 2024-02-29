import React, { useContext, useEffect } from 'react'
import NewsCard from './NewsCard';
import ModeContext from '../context/ModeContext';
import NewsContext from '../context/NewsContext';

const NewsContainer = () => {
    const { mode } = useContext(ModeContext);
    const { news, fetchNews, page, changePage } = useContext(NewsContext);

    useEffect(()=>{
        fetchNews('general', 'en', 'in')
    }, [])

    return (
            <div className={`container-fluid p-4 text-${mode === 'dark' ? "white" : "black"}`} style={{backgroundColor: mode === 'dark' ? "black" : "white"}}>
                    <div className={`container bg-${mode === 'dark' ? "black" : "white"}`}>
                        <h3 className="d-flex justify-content-center my-2">News Container</h3>
                        <div className="row p-3">
                        { 
                            news && news.map((element, index) => {
                                if(page === 1){
                                    if(index < 6)
                                        return <NewsCard key={element.url} news={element}/>
                                } else {
                                    if(index > 5)
                                        return <NewsCard key={element.url} news={element}/>
                                } return null;
                            })
                        }
                        </div>
                    </div>
        
                <div className="container d-flex justify-content-around">
                    <button disabled={page <= 1} className="btn btn-secondary" onClick={()=> changePage()}>&larr; Previous</button>
                    <button disabled={page >= 2} className="btn btn-secondary" onClick={()=> changePage()}>Next &rarr;</button>
                </div>
            </div>
  )
}

export default NewsContainer
