import dynamic from 'next/dynamic';
import { Suspense, lazy } from 'react';
import Banner from './banner';
import Head from 'next/head';
import HomeVideoSkeleton from '../../components/Skeleton/Home/video';
//import Highlight from './highlight';
const DynamicHighlight = dynamic(() => import('./highlight'), {
    suspense: true,
})
import About from './about';
import Project from './project';
import Forum from './forum';
import News from './news';
//import Video from './video';
const DynamicVideo = dynamic(() => import('./video'), {
    suspense: true,
})
import Tweets from './tweets';
const Home = () => {
    return (
        <div>
            <Head>
                <title>This is our Home page</title>
                <meta name="description" content="home page description" />
            </Head>
            <Banner />
            <Suspense fallback={<div>Loading Forum......</div>}>
                <DynamicHighlight />
            </Suspense>
            <About />
            <Project />
            <Forum />
            <News />
            <Suspense fallback={<HomeVideoSkeleton />}>
                <DynamicVideo />
            </Suspense>
            <Tweets />
        </div>
    );
}
export default Home;