import React from 'react'

const News = () => {
    return (
        <div className='container-fluid mt-5 mb-5' >
            <div >
                <h1><b>News</b></h1>
                <h3><b>New insights and analysis, from where we stand.</b></h3>
            </div>
            <div className='container d-flex h-100' >

                <div className="card text-white bg-secondary mb-3 m-5" style={{ width: "50%" }}>
                    <div className="card-header">Latest</div>
                    <div className="card-body">
                        <h3 className="card-title ">Hill & Knowlton Appoints Craig Buchholz US CEO</h3>
                        <p className="card-text">A huge change in a Hill & Knowlton. A new CEO comes to an era of Hill & Knowloton.</p>
                        <p> <a className='text-light' href='#'>Show more...</a></p>
                    </div>
                </div>

                <div className="card text-white bg-secondary mb-3 m-5" style={{ width: "50%" }}>
                    <div className="card-header">Latest</div>
                    <div className="card-body">
                        <h3 className="card-title text-white">Hill & Knowlton Makes Senior Promotions</h3>
                        <p className="card-text">Hill and Knowlton makes changes in senior members. More senior memeber are being added in the H&K.</p>
                        <p> <a className='text-light' href='#'>Show more...</a></p>
                    </div>
                </div>
            </div>
            <div className='container d-flex h-100' >

                <div className="card text-white bg-secondary mb-3 m-5" style={{ width: "50%" }}>
                    <div className="card-header">Latest</div>
                    <div className="card-body">
                        <h3 className="card-title">Hill & Knowlton Announces New Global Leadership Structure</h3>
                        <p className="card-text">Leadership has been an integral part of any organisation. H&K  finds a new suitable leadership structure.</p>
                        <p> <a className='text-light' href='#'>Show more...</a></p>
                    </div>
                </div>
                <div className="card text-white bg-secondary mb-3 m-5" style={{ width: "50%" }}>
                    <div className="card-header">Latest</div>
                    <div className="card-body">
                        <h3 className="card-title">Hill & Knowlton Strategies Launches Its Globally Renowned Behavioural Science</h3>
                        <p className="card-text">Behavioural Science has been an important part throughout the era. H&K launches globally renowned behavioural science.</p>
                        <p> <a className='text-light' href='#'>Show more...</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default News