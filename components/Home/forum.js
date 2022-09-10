import Image from 'next/image'
const Forum = (props) => {
    let { forumdataa } = props;
    return (
        <div className="row">
            {
                forumdataa.slice(0,3).map((forumdata) => {
                    return <div className="col-12 col-md-4" key={forumdata.forum_id}>
                        <div className="fcard">
                            <div className="card-img">
                                <img src={`${forumdata.forum_image}`} alt="" width={372} height={294} />
                                <div className="fctxt">
                                    <h4><div dangerouslySetInnerHTML={{ __html: forumdata.forum_title }}></div></h4>
                                    {/* <p>Are We Ready for a Skills Revolution? </p> */}
                                    <p className='fcdt'>19-20 Oct 2022</p>
                                </div>
                                <div className="upc">
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <div className="cbody">
                                <h3><div dangerouslySetInnerHTML={{ __html: forumdata.forum_title }}></div></h3>
                                <a href="">Explore
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export default Forum;