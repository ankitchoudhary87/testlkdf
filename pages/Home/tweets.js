import Head from 'next/head';
const Tweets = () => {
    return (
        <section className="tfeed ptb-80">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center sec-heading">
                    <h2>Tweets from <br /> @ LKDFacility</h2>
                    <a href="" className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="tcard">
                            <a href="#">
                                <div className="card-img">
                                    <img src="images/tfeed1.jpg" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="tcard">
                            <a href="">
                                <div className="card-img">
                                    <img src="images/tfeed2.jpg" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="tcard">
                            <a href="">
                                <div className="card-img">
                                    <img src="images/tfeed3.jpg" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Head>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Head> 
            <font style={{ fontSize: '32px', fontWeight: 'bold' }}>Tweets from @ LKD Facility</font>
            <div style={{width:'40%', textAlign: 'center', height:'auto', marginTop:'15px'}}>
                <a className="twitter-timeline" href="https://twitter.com/LKDFacility?ref_src=twsrc%5Etfw">Tweets by LKDFacility</a>
            </div> */}
        </section>
    );
}
export default Tweets;