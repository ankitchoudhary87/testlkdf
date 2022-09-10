import { useEffect, useState } from 'react';
import { projectHomeData } from '../api/project';
import HomeProjectSkeleton from '../../components/Skeleton/Home/project';
import ProjectData from '../../components/Home/project';
const Project = () => {
    const [projectdata, setProjectdata] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getprojectdata() {
            let response = await projectHomeData();
            setProjectdata(response.data.project);
            setLoading(false)
        }
        getprojectdata()
    }, [])
    return (
        <section className="projects ptb-80">
            <div className="container">
                <div className="sec-heading">
                    <h2>Projects</h2>
                </div>
                {
                    loading ? <HomeProjectSkeleton loopvalue={3} /> : <ProjectData projectdata={projectdata} />
                }
            </div>
        </section>
    );
}
export default Project;