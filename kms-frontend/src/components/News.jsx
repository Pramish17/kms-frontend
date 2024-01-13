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
            <hr />
            <div>
                <h1><b>Internal Announcements</b></h1>
                <div className="card d-flex justify-content-center text-dark bg-light m-5">
                    <div className="card-header"><b>Craig Buchholz [CEO]</b> 20-Dec-2023</div>
                    <div className="card-body">
                        <p className="card-text">Hi Everyone,<br />
                            I hope this message finds you well.
                            As we wrap up another year, we wanted to take a moment to express our heartfelt gratitude to each and every one of you for your exceptional hard work and dedication these past year, and especially during these past few weeks of busiest period.
                            The success we've achieved is a direct result of the collective effort, commitment, and passion that you showed. Your tireless work ethic, consistency, and ability to collaborate in every old or new venues you have been to, have truly set a high standard for excellence for us.
                            Thank you once again for your unwavering dedication and exceptional performance. We are proud to be a part of such an outstanding team.
                            Have the most outstanding Christmas and Happy New Year!<br />
                            Thank You,<br />
                            Craig<br />
                            Hill & Knowlton CEO.
                        </p>
                    </div>
                </div>

                <div className="card d-flex justify-content-center text-dark bg-light m-5">
                    <div className="card-header"><b>Pramish Thapa [HR]</b> 25-Nov-2023</div>
                    <div className="card-body">
                        <p className="card-text">Hi Everyone,<br />
                            I hope this message finds you well.<br />
                            A new set of Training is available in your board. Could everyone please check it. The deadline to complete the training is on 1st of Jan. <br />
                            Thank You,<br />
                            Pramish<br />
                            Hill & Knowlton HR.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default News