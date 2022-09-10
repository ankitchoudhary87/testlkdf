import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Project = (props) => {
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
                    Array(props.loopvalue).fill().map((_, i) => {
                        return <SwiperSlide key={i}>
                            <div className="procard">
                                <Skeleton height={400} />
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    );
}
export default Project;