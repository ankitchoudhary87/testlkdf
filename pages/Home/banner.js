import { useEffect, useState } from 'react';
import { bannerHomeData } from '../api/banner';
import Bannerr from '../../components/Home/banner';
const Banner = () => {
    const [bannerdata, setBannerdata] = useState([]);
    useEffect(() => {
        async function getbannerdata() {
            let response = await bannerHomeData();
            setBannerdata(response.data.data);
        }
        getbannerdata()
    }, [])
    return (
        <section className="bannertxt">
            <Bannerr bannerdata={bannerdata} />
        </section>
    );
}
export default Banner;