import Head from 'next/head'
import { useEffect, useState } from 'react';
import { newsMainData } from '../api/news';
import HomepageSkeleton from '../../components/Skeleton/Home/home';
import Image from 'next/image'
export const getServerSideProps = async (context) => {
    const response = await newsMainData();
    const data = response.data.data;
    return {
        props: {
            data
        },
    };
};
const News = ({ data }) => {
    const [newsdata, setNewsdata] = useState(data);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
    }, [data])
    return (
        <>
            <Head>
                <title>This is News Main Page</title>
                <meta name="description" content="This is News Main Page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear: 'both', paddingTop: '4%' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>Latest News</font>
                <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
                    {
                        loading ? <HomepageSkeleton loopvalue={4} />:
                        newsdata.map((news) => {
                            return <div key={news.news_id} style={{ float: 'left', width: '31%', margin: '10px' }}>
                                <Image src={`${news.news_thumb}`} width={270} height={270} />
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{news.news_tile}</font>
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{news.news_published_date}</font>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default News