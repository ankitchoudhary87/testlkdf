//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Homes from './Home';

/* import {forumtopHomeData} from './api/forumtop';
import {projectHomeData} from './api/project';
import {forumbottomHomeData} from './api/forumbottom';
import {newsHomeData} from './api/news';
import { videoHomeData } from './api/video';

export const getServerSideProps = async (context) => {
  const responseforumtop = await forumtopHomeData();
  const dataforumtop = responseforumtop.data.data;
  const responseproject = await projectHomeData();
  const dataproject = responseproject.data.data;
  const responseforumbottom = await forumbottomHomeData();
  const dataforumbottom = responseforumbottom.data.data;
  const responsenews = await newsHomeData();
  const datanews = responsenews.data.data;
  const responsevideo = await videoHomeData();
  const datavideo = responsevideo.data.data;
  return {
      props: {
        dataforumtop,
        dataproject,
        dataforumbottom,
        datanews,
        datavideo
      },
  };
}; */
const Home = (/* {dataforumtop, dataproject, dataforumbottom, datanews, datavideo} */) => {
  return (
    <main>
      <Homes />
    </main>
  )
}
export default Home;