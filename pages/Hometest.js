import { homeTestdata } from './api/hello';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
export const getServerSideProps = async (context) => {
    const response = await homeTestdata();
    const data = response.data.data;
    return {
        props: {
            data
        },
    };
};
function Hometest({ data }) {
    const { slider, forum_data, about_section, project_data, lkdf_forum_section, news_section, video_section } = data;
    return (
        <>
        <div style={{marginTop:'5.5%'}}>
            <Carousel autoPlay showThumbs={false} showStatus={false}>
                <div><Image src="https://lkdfacility.org/wp-content/uploads/bg21.png" width={1350}
      height={500} /></div>
                <div><Image src="https://lkdfacility.org/wp-content/uploads/Partnerships.jpg" width={1350}
      height={500} /></div>
                <div><Image src="https://lkdfacility.org/wp-content/uploads/Group_Photo_corrected-copy-e1465818352370.jpg" width={1350}
      height={500} /></div>
                <div><Image src="https://lkdfacility.org/wp-content/uploads/e-lesson2.jpg" width={1350}
      height={500} /></div>
            </Carousel>
            </div>
            <div style={{ width: '90%', textAlign: 'left', margin: '4%', clear: 'both' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>LKDF Forum</font>
                <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
                    {
                        /* loading ? <HomepageSkeleton loopvalue={4} /> : */
                        forum_data.map((forumdata) => {
                            return <div key={forumdata.forum_id} style={{ float: 'left', width: '24%', margin: '5px' }}>
                                <Image src={`${forumdata.forum_image}`} width={270} height={270} />
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>
                                    {forumdata.forum_title}
                                </font>
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{forumdata.events_published_date}</font>
                            </div>
                        })
                    }
                </div>
            </div>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear: 'both', paddingTop: '3%' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>{about_section.about_lkdf_heading}</font>
                <div style={{ width: '100%', margin: '20px', fontSize: '18px' }} dangerouslySetInnerHTML={{ __html: about_section.about_lkdf_section_content }}>
                </div>
            </div>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear: 'both' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>Projects</font>
                <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
                    {
                        project_data.map((project, i) => {
                            return <div key={i} style={{ float: 'left', width: '31%', margin: '10px' }}>
                                {
                                    project.project_pic && project.project_pic!=='' && project.project_pic!==null?
                                        <Image src={`${project.project_pic}`} width={270} height={270} />
                                    :
                                        <img src={`${project.project_pic}`} style={{width:'80%'}} />
                                }
                                


                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{project.short_description}</font>
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{project.project_published_date}</font>
                            </div>
                        })
                    }
                </div>
            </div>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear: 'both', paddingTop: '3%' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>LKDF Forum</font>
                <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
                    {
                        /* loading ? <HomepageSkeleton loopvalue={4} /> : */
                        lkdf_forum_section.map((forumdatasection) => {
                            return <div key={forumdatasection.forum_id} style={{ float: 'left', width: '24%', margin: '5px' }}>
                                <Image src={`${forumdatasection.forum_image}`} width={270} height={270} />
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>
                                    {forumdatasection.forum_title}
                                </font>
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{forumdatasection.events_published_date}</font>
                            </div>
                        })
                    }
                </div>
            </div>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear: 'both', paddingTop: '4%' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>Latest News</font>
                <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
                    {
                        news_section.map((news) => {
                            return <div key={news.news_id} style={{ float: 'left', width: '31%', margin: '10px' }}>
                                <Image src={`${news.news_image}`} width={270} height={270} />
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{news.news_title}</font>
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{news.news_published_date}</font>
                            </div>
                        })
                    }
                </div>
            </div>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear:'both', paddingTop:'4%' }}>
            <font style={{ fontSize: '32px', fontWeight: 'bold' }}>Videos</font>
            <div style={{width:'100%', textAlign: 'center', height:'auto'}}>
                {
                    video_section.map((videos) => {
                        return <div key={videos.video_id} style={{float:'left', width:'22%', margin:'10px'}}>
                            <iframe width="95%" height="200" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen src={`https://youtube.com/embed/${videos.video_url}?autoplay=1`}>
                            </iframe>
                            <br />
                            <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{videos.video_name}</font>
                            <br />
                            <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{videos.video_published_date}</font>
                        </div>
                    })
                }
            </div>
        </div>
        </>

    );
}
export default Hometest;