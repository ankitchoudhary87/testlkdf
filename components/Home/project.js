import Link from 'next/link';
import Image from 'next/image'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Project = (props) => {
    let { projectdata } = props;
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                breakpoints={{
                    320: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    projectdata.map((project) => {
                        return <SwiperSlide key={project.project_slug}>
                            <div className="procard">
                                {
                                    project.project_pic && project.project_pic != '' && project.project_pic != null ?
                                        <Image src={`${project.project_pic}`} width={374} height={454} />
                                        :
                                        <Image src="/images/No-Image-Placeholder.png" width={374} height={454} />
                                }
                                <div className="proxtxt">
                                    <h4><div dangerouslySetInnerHTML={{ __html: project.short_description }}></div></h4>
                                    <a href="" className="link link-blue">Discover<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <div className="btsecpr text-center">
                <Link href="/Projects"><a className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a></Link>
            </div>
        </>
    );
}
export default Project;