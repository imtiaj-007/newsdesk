import React from 'react'
import loading from '../images/loading.gif'

const Spinner = () => {
    return (
        <div>
            <div className="text-center">
                <img src={loading} alt="loading..." />
            </div>
        </div>
    )
}

export default Spinner
