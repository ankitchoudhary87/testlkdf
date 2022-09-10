import Head from 'next/head'
import { useEffect, useState } from 'react';
import { videoMainData } from '../api/video';
import HomepageSkeleton from '../../components/Skeleton/Home/home';
import Playvideo from '../../components/Video/playvideo';
import Videolist from '../../components/Video';
import VideoFilter from './videofilter';
import Playcontent from '../../components/Video/playcontent';
import { useRouter } from 'next/router';
export const getServerSideProps = async (context) => {
    const response = await videoMainData();
    const data = response.data.data;
    return {
        props: {
            data
        },
    };
};
const Videos = ({ data }) => {
    //const router = useRouter();
    const [filter, setFilter] = useState({
        language: [],
        project: [],
        stakeholder: [],
        country: [],
        topic: []
    })
    const [videodata, setVideodata] = useState(data);
    const [updatedvideodata, setUpdatedvideodata] = useState(data);
    const [playingvideo, setPlayingvideo] = useState("");
    const [loading, setLoading] = useState(true);

    const [videoid, setVideoid] = useState("");
    const [videotitle, setVideotitle] = useState("");
    const [videocontent, setVideocontent] = useState("Here you can explore the views of students, trainers, donors, private and public sector partners and national counterparts. Listen to their public private development partnership experiences, hear stories of every day life in Vocational Training Schools, and learn more about how our PPDP projects help to meet the labor markets’ increasing demand for skilled employees, while also contributing to inclusive and sustainable industrial development.")
    useEffect(() => {
        var random_index = Math.floor(Math.random() * videodata.length);
        var randomobject = videodata[random_index];
        var videourl = randomobject.video_url.replace("watch?v=", "");
        setPlayingvideo(videourl);
        setLoading(false);
    }, [videodata]);
    const changeVideoURL = (url, title, desc, vidID) => {
        setPlayingvideo(url);
        setVideotitle(title);
        setVideocontent(desc);
        setVideoid(vidID);
    }
    const changelanguageFilter = (e) => {
        setFilter({ ...filter, language: Array.isArray(e) ? e.map(x => x.value) : [] });
    }
    /* const changelanguageFilter = useMemo((e) => {
        setFilter({...filter, language: Array.isArray(e)?e.map(x=>x.value):[]});
    }, [filter.language]); */
    const changeprojectFilter = (e) => {
        setFilter({ ...filter, project: Array.isArray(e) ? e.map(x => x.value) : [] });
    }
    const changestakeholderFilter = (e) => {
        setFilter({ ...filter, stakeholder: Array.isArray(e) ? e.map(x => x.value) : [] });
    }
    const changecountryFilter = (e) => {
        setFilter({ ...filter, country: Array.isArray(e) ? e.map(x => x.value) : [] });
    }
    const changetopicFilter = (e) => {
        setFilter({ ...filter, topic: Array.isArray(e) ? e.map(x => x.value) : [] });
    }
    useEffect(() => {
        setLoading(true);
        let newdata = videodata.filter((items) => {
            var result = true;
            if (filter.language.length > 0) {
                result = items.language.some(a => filter.language.some(m => a === m));
            } else {
                result = result
            }
            if (filter.project.length > 0) {
                result = result && items.project.some(a => filter.project.some(m => a === m));
            } else {
                result = result
            }
            if (filter.stakeholder.length > 0) {
                result = result && items.stakeholder.some(a => filter.stakeholder.some(m => a === m));
            } else {
                result = result
            }
            if (filter.country.length > 0) {
                result = result && items.country.some(a => filter.country.some(m => a === m));
            } else {
                result = result
            }
            if (filter.topic.length > 0) {
                result = result && items.topics.some(a => filter.topic.some(m => a === m));
            } else {
                result = result
            }
            return result;
        })
        setLoading(false);
        setUpdatedvideodata(newdata);
    }, [filter])
    return (
        <>
            <Head>
                <title>This is Video Main Page</title>
                <meta name="description" content="This is Video Main Page description" />
            </Head>
            <div style={{ width: '100%', height: 'auto', marginTop: '6%', clear: 'both' }}>
                <div style={{ float: 'left', width: '58%', margin: '1%' }}>
                    <Playvideo playingvideo={playingvideo} />
                </div>
                <div style={{ float: 'left', width: '38%', margin: '1%' }}>
                    <h1 style={{ fontSize: '40px' }}>VIDEO PERSPECTIVES</h1>
                    <Playcontent videotitle={videotitle} videocontent={videocontent} videoid={videoid} />
                </div>
            </div>
            <div style={{ width: '100%', textAlign: 'center', paddingTop: '4%', marginBottom: '3%', clear: 'both' }}>
                <VideoFilter changelanguageFilter={changelanguageFilter} changeprojectFilter={changeprojectFilter} changestakeholderFilter={changestakeholderFilter} changecountryFilter={changecountryFilter} changetopicFilter={changetopicFilter} />
            </div>
            <>
                {
                    loading ? <HomepageSkeleton loopvalue={4} /> :
                        <Videolist videodata={updatedvideodata} changeVideoURL={changeVideoURL} />
                }
            </>
        </>
    )
}
export default Videos