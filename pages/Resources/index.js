import Head from 'next/head'
import { useEffect, useState } from 'react';
import { resourceData } from '../api/resource';
import HomepageSkeleton from '../../components/Skeleton/Home/home';
import Image from 'next/image'
export const getServerSideProps = async (context) => {
    const response = await resourceData();
    const data = response.data.data;
    return {
        props: {
            data
        },
    };
};
const Resources = ({ data }) => {
    const [resourcedata, setResourcedata] = useState(data);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, [data])
    return (
        <>
            <Head>
                <title>This is Resource Main Page</title>
                <meta name="description" content="This is Resource Main Page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear: 'both', paddingTop: '4%' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>Latest Resources</font>
                <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
                    {
                        loading ? <HomepageSkeleton loopvalue={4} /> :
                            resourcedata.map((resource) => {
                                return <div key={resource.res_id} style={{ float: 'left', width: '31%', margin: '10px' }}>
                                    <Image src={`${resource.image}`} width={350} height={380} />
                                    <br />
                                    <div style={{ fontSize: '14px', fontWeight: 'bold' }} dangerouslySetInnerHTML={{__html:resource.res_tile}}></div>
                                </div>
                            })
                    }
                </div>
            </div>
        </>
    )
}
export default Resources