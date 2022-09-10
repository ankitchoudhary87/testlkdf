import { useState, useEffect } from 'react';
import { videoPageFilter } from '../api/video';
import Languagefilter from '../../components/filters/videos/language';
import Projectfilter from '../../components/filters/videos/project';
import Stakeholderfilter from '../../components/filters/videos/stakeholder';
import Countryfilter from '../../components/filters/videos/country';
import Topicfilter from '../../components/filters/videos/topic';
function VideoFilter(props) {
    const [topics, setTopics] = useState([]);
    const [countries, setCountries] = useState([]);
    const [stakeholders, setStakeholders] = useState([]);
    const [projects, setProjects] = useState([]);
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        async function getvideofilters() {
            let response = await videoPageFilter();
            setTopics(response.data.data.topics.map((top) => { return { value: top.label, label: top.label } }));
            //setCountries(response.data.data.country.map((count) => { return { value: count.name, label: count.name } }));
            setCountries(response.data.data.country);
            //setStakeholders(response.data.data.stakeholder.map((stake) => { return { value: stake.name, label: stake.name } }));
            setStakeholders(response.data.data.stakeholder);
            //setProjects(response.data.data.projects.map((proj) => { return { value: proj.project_id, label: proj.project_title } }));
            setProjects(response.data.data.projects);
            //setLanguages(response.data.data.language.map((lang) => { return { value: lang.name, label: lang.name } }));
            setLanguages(response.data.data.language);
        }
        getvideofilters()
    }, [])
    return (
        <>
            <div style={{ width: '100%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Languagefilter languages={languages} changelanguageFilter={props.changelanguageFilter} />
                <Projectfilter projects={projects} changeprojectFilter={props.changeprojectFilter} />
                <Stakeholderfilter stakeholders={stakeholders} changestakeholderFilter={props.changestakeholderFilter} />
                <Countryfilter countries={countries} changecountryFilter={props.changecountryFilter} />
            </div>
            <div style={{ width: '100%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop:'10px' }}>
                <Topicfilter topics={topics} changetopicFilter={props.changetopicFilter} />
            </div>
        </>
    );
}
export default VideoFilter;