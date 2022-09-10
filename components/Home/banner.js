import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Banner(props) {
    return (
        <>
            {/* <Carousel autoPlay showThumbs={false} showStatus={false}>
                <div><Image src="https://lkdfacility.org/wp-content/uploads/bg21.png" width={1350}
                    height={500} /></div>
                <div><Image src="https://lkdfacility.org/wp-content/uploads/Partnerships.jpg" width={1350}
                    height={500} /></div>
                <div><Image src="https://lkdfacility.org/wp-content/uploads/Group_Photo_corrected-copy-e1465818352370.jpg" width={1350}
                    height={500} /></div>
                <div><Image src="https://lkdfacility.org/wp-content/uploads/e-lesson2.jpg" width={1350}
                    height={500} /></div>
            </Carousel> */}
            <video width="100%" autoPlay={true} loop={true} muted playsInline={true}>
                <source src="images/home-video.webm" type="video/webm" />
            </video>
            <div className="container">
                <div className="bnrtxt" >
                    <h1 data-aos="fade-up"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800">Industrial <br />
                        skills for the future</h1>
                    <p>Learn about Industry 4.0 from the industries leading the way</p>
                    <a href="#" className='btn btn-blue-banner'>How to Get Involved <img src="images/icons/arrow-next.png" alt="" /></a>
                </div>
            </div>
        </>
    );
}
export default Banner;