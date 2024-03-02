import React, { useContext } from 'react'
import ModeContext from '../context/ModeContext';

const NewsCard = (props) => {
    const { title, description, image, url, publishedAt } = props.news;
    const { mode } = useContext(ModeContext);

    return (
        <div className="col-sm mb-4">

            <div className={`card bg-${mode} text-${mode === 'dark' ? "white" : "black"}`} data-bs-theme={mode}>
                    <img src={!image ? "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hFwwQAW45673VGKrMPE2qQ.png" : image} className="card-img-top mb-3" alt="cover-img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary">Read More</a>
                        <p>{new Date(publishedAt).toGMTString().substr(0, 16)}</p>
                    </div>
                </div>
        </div>
    )
}

export default NewsCard
