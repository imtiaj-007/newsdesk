import { useState } from 'react'
import NewsContext from './NewsContext'

const NewsState = (props) =>{
    const API_KEY = '351db8ea059629b1828d89e87ef2a076';

    const [ news, SetNews ] = useState(null);
    const [ page, SetPage ] = useState(1);
    const [ category, SetCategory ] = useState('general');
    const [ country, SetCountry ] = useState('in');
    const [ language, SetLanguage ] = useState('en');
    const [ loading, SetLoading ] = useState(true);

    const fetchNews = async (category = 'general', lang = 'en', country = 'in')=>{
        const URL = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&max=10&apikey=${API_KEY}`;
        await fetch(URL).then(function (res) {
            return res.json();
        })
        .then(function (data) {
            SetNews(data.articles);
            SetPage(1);
            SetCategory(category);
            SetCountry(country);
            SetLanguage(lang);
            SetLoading(false);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const changePage = ()=> {
        if( page === 1){
            SetPage(2);
        } else {
            SetPage(1);
        }
    }

    return (
        <NewsContext.Provider value={{ news, fetchNews, page, changePage, category, country, language, loading, SetLoading }}>
            {props.children}
        </NewsContext.Provider>

    )
}



export default NewsState;