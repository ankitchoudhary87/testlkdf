import Head from 'next/head'
import { useEffect, useState } from 'react';
import { projectMainData } from '../api/project';
import HomepageSkeleton from '../../components/Skeleton/Home/home';
import Image from 'next/image'
export const getServerSideProps = async (context) => {
    const response = await projectMainData();
    const data = response.data.data;
    return {
        props: {
            data
        },
    };
};
const Projects = ({ data }) => {
    const [projectdata, setProjectdata] = useState(data);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, [data])
    return (
        <>
            <Head>
                <title>This is Project Main Page</title>
                <meta name="description" content="This is Project Main Page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ width: '90%', textAlign: 'left', margin: '5%', clear: 'both', paddingTop: '4%' }}>
                <font style={{ fontSize: '32px', fontWeight: 'bold' }}>Projects</font>
                <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
                    {
                        loading ? <HomepageSkeleton loopvalue={4} /> :
                            projectdata.map((project) => {
                                return <div key={project.project_id} style={{ float: 'left', width: '31%', margin: '10px' }}>
                                    <Image src={`${project.picture}`} width={270} height={270} />
                                    <br />
                                    <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{project.project_tile}</font>
                                    <br />
                                    <font style={{ fontSize: '14px', fontWeight: 'bold' }}>{project.post_modify_date}</font>
                                </div>
                            })
                    }
                </div>
            </div>
        </>
    )
}
export default Projects