import Image from 'next/image'
const Highlight = (props) => {
    let { highlightdata } = props;
    return (
        <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
                <div className="bgbtntxt">
                    <h3>Our Annual Flagship Event </h3>
                    <p>28 September 2022</p>
                    <a href="" className="btn btn-black">Register Now <img src="images/icons/arrow-next.png" alt="" /></a>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
                <div className="bgtxtcontainer">
                    <div className="row">
                        <div className="col-12">
                            <div className="bgtxt" >
                                <div className="bgtxt-in">
                                    <h3>LKDF <br /> Forum 2022</h3>
                                    <p>Digital Skills for an inclusive Future</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card bgt-card">
                                <p>Stories</p>
                                <h3>Background Paper for the LKDF Forum 2022</h3>
                                <a href="" className='link link-blue'>Discover
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card bgt-card">
                                <p>Stories</p>
                                <h3>Background Paper for the LKDF Forum 2022</h3>
                                <a href="" className='link link-blue'>Discover
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card bgt-card">
                                <p>Stories</p>
                                <h3>Background Paper for the LKDF Forum 2022</h3>
                                <a href="" className='link link-blue'>Discover
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <>
                {
                    highlightdata.map((forumdata) => {
                        return <div key={forumdata.news_id} style={{ float: 'left', width: '24%', margin: '5px' }}>
                            <Image src={`${forumdata.event_thumb}`} width={270} height={270} />
                            <br />
                            <font style={{ fontSize: '14px', fontWeight: 'bold' }}>
                                {forumdata.event_title}
                            </font>
                            <br />
                            <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{forumdata.events_published_date}</font>
                        </div>
                    })
                }
            </> */}
        </div>
    );
}
export default Highlight;