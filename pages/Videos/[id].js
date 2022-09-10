
import Head from "next/head";
import { useRouter } from 'next/router';
import { videoMainData } from '../api/video';
export const getServerSideProps = async (context) => {
    const id = context.params.id;
    console.log("My ID = ", id)
    const response = await videoMainData();
    const data = response.data.data;
    const videodetail = data.filter((item) => {
        return item.video_id == id
    })
    return {
        props: {
            data: videodetail
        },
    };
}
function VideoDetails({ data }) {
    const router = useRouter();
    const { page } = router.query;
    const { video_tile, description, video_url, post_modify_date } = data[0];
    return (
        <>
            <Head>
                <title>{video_tile}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <div style={{ textAlign: 'center', margin: '3%', marginTop: '10%' }}>
                    <iframe width="90%" height="600" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen src={`https://youtube.com/embed/${video_url.replace("watch?v=", "")}?autoplay=1`}></iframe>
                </div>
                <div style={{ width: '84%', marginLeft: '8%', marginRight: '8%' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: video_tile }}></div>
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    <div>
                        <h3>Date</h3>
                        <p>{/* Mar 21, 2022 */ post_modify_date}</p>
                    </div>
                    {
                        page && page !== '' && page != 1 ?
                            <p onClick={() => router.push(`/Videos?page=${page}`)} style={{ backgroundColor: '#FFE156', fontWeight: 'bold', color: 'black', width: '24%', padding: '1%', textAlign: 'center', cursor: 'pointer' }}>BACK TO VIDEO PROSPECTIVES</p>
                            :
                            <p onClick={() => router.push('/Videos')} style={{ backgroundColor: '#FFE156', fontWeight: 'bold', color: 'black', width: '24%', padding: '1%', textAlign: 'center', cursor: 'pointer' }}>BACK TO VIDEO PROSPECTIVES</p>
                    }
                </div>
            </>
        </>
    );
}

export default VideoDetails;