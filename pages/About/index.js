import Head from 'next/head';
import {aboutHomeData} from '../api/about';
export const getServerSideProps = async (context) => {
    const response = await aboutHomeData();
    const data = response.data;
    return {
        props: {
            data
        },
    };
};
const About = ({data}) => {
    const { about } = data;
    return (
        <>
            <Head>
                <title>This is About us page</title>
                <meta name="description" content="About us page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{textAlign:'center', margin:'3%', marginTop:'10%'}} dangerouslySetInnerHTML={{__html: about.about_lkdf_section_content}}></div>
        </>
    );
}
export default About;