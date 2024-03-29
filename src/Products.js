import React from 'react'
import './Products.css'
import 'bootstrap/dist/css/bootstrap.css';


function Products({ data }) {
    return (
        <div className='products'>
            <div className="row">
                {data.map(data => {
                    if (data.content !== "[Removed]" && data.author !== "Axios"){return (
                        <div className="main-card">
                            <div className="card-card">
                                <div>

                                    <img className="card-image" src={data.urlToImage} alt="Card image cap" />
                                </div>
                                <div className="card-body-details">

                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-desciptionn">{data.description}</p>
                                    <h5 className=" fllex card-author">{data.author}</h5>
                                    <p className=" fllex card-publish-date">{data.publishedAt}</p>
                                    <a href="#" className="btn btn-primary">Know More</a>

                                </div>
                            </div>
                        </div>
                    )}
                }


                )}
            </div>
        </div>
    )
}

export default Products