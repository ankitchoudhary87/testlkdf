import { useEffect, useState } from 'react';
import { aboutHomeData } from '../api/about';
import AboutData from '../../components/Home/about';
import HomeAboutSkeleton from '../../components/Skeleton/Home/about';
const About = () => {
    const [aboutdata, setAboutdata] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getaboutdata() {
            let response = await aboutHomeData();
            setAboutdata(response.data.about);
            setLoading(false)
        }
        getaboutdata()
    }, [])
    return (
        <section className="abtlkd">
            <div className="container">
                {
                    loading ? <HomeAboutSkeleton /> : <AboutData aboutus={aboutdata} />
                }
            </div>
        </section>
    );
}
export default About;