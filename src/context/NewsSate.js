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

    // const data = [
    //     {
    //         "title": "Lenovo's Transparent Display Notebook Concept Is Cool, Pointless, And We Want One",
    //         "description": "Alongside TVs, laptops are now experimenting with forays into transparent displays, like Lenovo's example here, though it's just a proof of concept currently.",
    //         "content": "The press release doesn't get into too much detail about how the transparent display really works, beyond the fact that it uses Micro-LEDs. Lenovo claims it provides \"many advantages in the development of transparent displays.\" The press release tout... [979 chars]",
    //         "url": "https://www.slashgear.com/1524740/lenovo-transparent-display-notebook-concept-mwc-2024/",
    //         "image": "https://www.slashgear.com/img/gallery/lenovos-transparent-display-notebook-concept-is-cool-pointless-and-we-want-one/l-intro-1708702285.jpg",
    //         "publishedAt": "2024-02-25T23:00:12Z",
    //         "source": {
    //             "name": "SlashGear",
    //             "url": "https://www.slashgear.com"
    //         }
    //     },
    //     {
    //         "title": "Flaco's life and death another example of NYC progressivism gone awry",
    //         "description": "So Flaco the Eurasian eagle-owl is dead — killed in a collision with an Upper West Side building Friday, a year after vandals cut the wires on his cage, just inside the Central Park Zoo.",
    //         "content": "So Flaco the Eurasian eagle-owl is dead — killed in a collision with an Upper West Side building Friday, a year after vandals cut the wires on his cage, just inside the Central Park Zoo.\nWell-meaning, naïve New Yorkers had spun the owl’s story as a f... [4234 chars]",
    //         "url": "https://nypost.com/2024/02/25/opinion/flacos-life-and-death-another-example-of-nyc-progressivism-gone-awry/",
    //         "image": "https://nypost.com/wp-content/uploads/sites/2/2024/02/saddened-report-flaco-eurasian-eagle-77070587.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2024-02-25T22:24:53Z",
    //         "source": {
    //             "name": "New York Post",
    //             "url": "https://nypost.com"
    //         }
    //     },
    //     {
    //         "title": "These are the safest towns in Mass., according to new report",
    //         "description": "“Massachusetts is possibly the best example of a New England state. Picturesque, great cities, small towns, and great seafood.”",
    //         "content": "Local News These are the safest towns in Mass., according to new report “Massachusetts is possibly the best example of a New England state. Picturesque, great cities, small towns, and great seafood.”\nHere are the safest towns in Massachusetts, accord... [2054 chars]",
    //         "url": "https://www.boston.com/news/local-news/2024/02/25/these-are-the-safest-towns-in-mass-according-to-new-report/",
    //         "image": "https://bdc2020.o0bc.com/wp-content/uploads/2021/06/BDC_Logo_2020_256x256-60d0abc34135e.png",
    //         "publishedAt": "2024-02-25T16:06:17Z",
    //         "source": {
    //             "name": "Boston.com",
    //             "url": "https://www.boston.com"
    //         }
    //     },
    //     {
    //         "title": "EDITORIAL: Town Hall sets example worth emulating",
    //         "description": "Accurate information is needed to stifle malicious rumor-mongering",
    //         "content": "Like a poisonous snake, the email slithered from inbox to inbox.\n“Illegals in CDA,” its subject line declared, backed up by photos that allegedly showed illegal aliens wandering about our fair burg.\nThe recent email was alarming, threatening and fill... [2404 chars]",
    //         "url": "https://cdapress.com/news/2024/feb/25/editorial-town-hall-sets-example-worth-emulating/",
    //         "image": "https://hagadone.media.clients.ellingtoncms.com/static-4/cdapress/images/default-social.jpg",
    //         "publishedAt": "2024-02-25T06:00:00Z",
    //         "source": {
    //             "name": "Coeur d'Alene Press",
    //             "url": "https://cdapress.com"
    //         }
    //     },
    //     {
    //         "title": "Government of Canada announces greener operations at the Canadian Space Agency and for our northern infrastructure",
    //         "description": "LONGUEUIL, QC, Feb. 22, 2024 /CNW/ - The Government of Canada is leading by example by reducing greenhouse gas (GHG) emissions from its operations to foster a",
    //         "content": "LONGUEUIL, QC, Feb. 22, 2024 /CNW/ – The Government of Canada is leading by example by reducing greenhouse gas (GHG) emissions from its operations to foster a low-carbon, climate-resilient and clean growth economy.\nToday, the Honourable Anita Anand, ... [5883 chars]",
    //         "url": "https://jimmyspost.com/government-of-canada-announces-greener-operations-at-the-canadian-space-agency-and-for-our-northern-infrastructure",
    //         "image": "https://jimmyspost.com/wp-content/uploads/2021/01/cropped-Copy-of-Original-size-Red-Gradients-Technology-Gaming-Logo-150x150.png",
    //         "publishedAt": "2024-02-22T21:14:07Z",
    //         "source": {
    //             "name": "Jimmys Post",
    //             "url": "https://jimmyspost.com"
    //         }
    //     },
    //     {
    //         "title": "Warriors Crumbling Dynasty: Billionaire Owner “Can Do No Wrong”, NBA Agents Claim With MJ Example",
    //         "description": "Amid rumors of a declining dynasty, rival executives slam the Golden State Warriors' owner for being complacent.",
    //         "content": "The whispers of the Golden State Warriors dynasty fading began to surface after the 2019 finals. They had been oh so close to rewriting history when injuries to star players thwarted all those expectations. After that season, key star players had eit... [1619 chars]",
    //         "url": "https://www.essentiallysports.com/nba-active-basketball-news-golden-state-warriors-crumbling-dynasty-billionaire-owner-joe-lacob-can-do-no-wrong-nba-agents-claim-with-michael-jordan-example/",
    //         "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/Michael-Phelps-and-Michael-Jordan.jpg?class=watermark",
    //         "publishedAt": "2024-02-22T17:24:01Z",
    //         "source": {
    //             "name": "Essentially Sports",
    //             "url": "https://www.essentiallysports.com"
    //         }
    //     },
    //     {
    //         "title": "The best foods to eat for a long life, longevity experts say",
    //         "description": "There are no guarantees, but experts say that there are plenty of things you can do to improve your odds — why not start, for example, by improving your diet? That means saying goodbye to all the ultra-processed foods we Americans love so much, from baked goods to french fries, longevity experts say.",
    //         "content": "Want to live forever, or something like it?\nThere are no guarantees, but experts say that there are plenty of things you can do to steer the odds in your favor — why not start, for example, by improving your diet?\nThat means saying goodbye to all the... [4138 chars]",
    //         "url": "https://nypost.com/2024/02/21/lifestyle/the-best-foods-for-longevity-live-longer/",
    //         "image": "https://nypost.com/wp-content/uploads/sites/2/2024/02/senior-woman-city-76923226.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2024-02-22T02:43:05Z",
    //         "source": {
    //             "name": "New York Post",
    //             "url": "https://nypost.com"
    //         }
    //     },
    //     {
    //         "title": "Lamar Odom Rejects Idea Of \"Kardashian Curse\"",
    //         "description": "Lamar Odom has rejected the idea that there is a \"Kardashian curse\" and said more families should follow their example.",
    //         "content": "Lamar Odom has said that he doesn't believe in the \"Kardashian Curse\". \"If the curse is strength, or financial abundance, or family strength, then yeah, they're cursed,\" Odom said in a recent podcast appearance. However, he refused to indulge in the ... [2000 chars]",
    //         "url": "https://www.hotnewhiphop.com/766147-lamar-odom-kardashian-curse-pop-culture-news",
    //         "image": "https://www.hotnewhiphop.com/images/v2/2024/02/GettyImages-1624662294-2304x1575.jpg",
    //         "publishedAt": "2024-02-21T16:16:55Z",
    //         "source": {
    //             "name": "HotNewHipHop",
    //             "url": "https://www.hotnewhiphop.com"
    //         }
    //     },
    //     {
    //         "title": "Make Milton an example",
    //         "description": "The state has warned the town that failing to allow more housing will cost it. Good.",
    //         "content": "Bring it. Because unless there are real consequences here, we are never going to solve our housing crisis.\nOn Wednesday, state housing Secretary Ed Augustus made it official: In a letter to the town administrator, he said that Milton will be penalize... [4168 chars]",
    //         "url": "https://www.bostonglobe.com/2024/02/21/metro/make-milton-an-example/",
    //         "image": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/tRKfSx_H-bEUGQ8o0Rr28fmkumA=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/K2WLCLMB6YHD6MD5SGIOJFMMI4.jpg",
    //         "publishedAt": "2024-02-21T05:00:00Z",
    //         "source": {
    //             "name": "The Boston Globe",
    //             "url": "https://www.bostonglobe.com"
    //         }
    //     },
    //     {
    //         "title": "Vernon Fire Marshal: Prospect Blaze Example Of Glaring Statistic",
    //         "description": "Vernon Fire Marshal: Prospect Blaze Example Of Glaring Statistic - Vernon, CT - A cooking mishap is all-too-common when it comes to house fires like the one on Prospect Street this month, the Vernon fire marshal said.",
    //         "content": "Crime & Safety Vernon Fire Marshal: Prospect Blaze Example Of Glaring Statistic A cooking mishap is all-too-common when it comes to house fires like the one on Prospect Street this month, the Vernon fire marshal said.\nA house fire at 111 Prospect St.... [2501 chars]",
    //         "url": "https://patch.com/connecticut/vernon/vernon-fire-marshal-prospect-blaze-example-glaring-statistic",
    //         "image": "https://patch.com/img/cdn20/users/103600/20240220/012622/styles/patch_image/public/111-prospect-___20132218705.jpg",
    //         "publishedAt": "2024-02-20T18:26:23Z",
    //         "source": {
    //             "name": "Joliet, IL Patch",
    //             "url": "https://patch.com"
    //         }
    //     }
    // ]

    const fetchNews = async (category = 'general', lang = 'en', country = 'in')=>{
        // SetNews(data);
        //     SetPage(1);
        //     SetCategory(category);
        //     SetCountry(country);
        //     SetLanguage(lang);
        //     SetLoading(false);
        // return ;
        
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