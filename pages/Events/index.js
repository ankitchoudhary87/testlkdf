import Head from 'next/head'
import { forumMainData } from '../api/forum';
import HomepageSkeleton from '../../components/Skeleton/Home/home';
import {useEffect, useState} from 'react';
import Image from 'next/image'
export const getServerSideProps = async (context) => {
    const response = await forumMainData();
    const data = response.data.data;
    return {
        props: {
            data
        },
    };
};
const Events = ({ data }) => {
    const [forumdata, setForumdata] = useState(data);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
    }, [data])
    return (
        <>
            <Head>
                <title>This is Forums Main Page</title>
                <meta name="description" content="This is Forum Main Page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear: 'both', paddingTop: '4%' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>LKDF Forum</font>
                <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
                    {
                        loading ? <HomepageSkeleton loopvalue={4} />:
                        forumdata.map((forumdata) => {
                            return <div key={forumdata.news_id} style={{ float: 'left', width: '24%', margin: '5px' }}>
                                <Image src={`${forumdata.event_thumb}`} width={270} height={270} />
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>
                                    {forumdata.event_title}
                                </font>
                                <br />
                                <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{forumdata.events_published_date}</font>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Events