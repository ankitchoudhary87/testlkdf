import { useEffect, useState } from 'react';
import HomeNewsSkeleton from '../../components/Skeleton/Home/news';
import { newsHomeData } from '../api/news';
import NewsData from '../../components/Home/news';
import Link from 'next/link';
const News = () => {
    const [newsdata, setNewsdata] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getnewsdata() {
            let response = await newsHomeData();
            setNewsdata(response.data.news);
            setLoading(false)
        }
        getnewsdata()
    }, [])
    return (
        <section className="news ptb-80">
            <div className="container">
                <div className="d-flex justify-content-between sec-heading">
                    <h2>News</h2>
                    <Link href="/News"><a className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a></Link>
                </div>
                {
                    loading ? <HomeNewsSkeleton loopvalue={4} /> : <NewsData newsdata={newsdata} />
                }
            </div>
        </section>
    );
}
export default News;