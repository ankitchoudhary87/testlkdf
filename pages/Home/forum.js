import { useEffect, useState } from 'react';
import { forumHomeData } from '../api/forum';
import HomeForumSkeleton from '../../components/Skeleton/Home/forum';
import ForumData from '../../components/Home/forum';
import Link from 'next/link';
const Forum = () => {
    const [forumdata, setForumdata] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getforumdata() {
            let response = await forumHomeData();
            setForumdata(response.data.forum);
            setLoading(false)
        }
        getforumdata()
    }, [])
    return (
        <section className="forum ptb-80 bg-light">
            <div className="container">
                <div className="d-flex justify-content-between sec-heading">
                    <h2>LKDF Forum</h2>
                    <Link href="/Events"><a className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a></Link>
                </div>
                {
                    loading ? <HomeForumSkeleton loopvalue={3} /> : <ForumData forumdataa={forumdata} />
                }
            </div>
        </section>
    );
}
export default Forum;