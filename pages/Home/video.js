//import axios from 'axios';
import { useEffect, useState } from 'react';
import { videoHomeData } from '../api/video';
import VideosData from '../../components/Home/video';
import HomeVideoSkeleton from '../../components/Skeleton/Home/video';
import Link from 'next/link';
/* export const getServerSideProps = async (context) => {
    const res = await axios("http://52.201.123.57:9000/wp-json/unido/v1/videos_details");
    const postdata = res.data;
    return {
        props: {
            data: postdata
        },
    };
}; */
const Video = () => {
    const [videodata, setVideodata] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getvideodata() {
            let response = await videoHomeData();
            setVideodata(response.data.video);
            setLoading(false)
        }
        getvideodata()
    }, [])
    return (
        <section className="video ptb-80 bg-light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center sec-heading">
                    <h2>Video <br /> Perspectives</h2>
                    <div className="midphed">
                        <p>Here you can explore the views of students, trainers, donors, private and public sector partners and national counterparts.</p>
                    </div>
                    <Link href="/Videos"><a className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a></Link>
                </div>
                {
                    loading ? <HomeVideoSkeleton /> : <VideosData videodata={videodata} />
                }
            </div>
        </section>
    );
}
export default Video;