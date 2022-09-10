import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const Projectfilter = (props) => {
    const animatedComponents = makeAnimated();
    let { projects, changeprojectFilter } = props;
    return (
        <div style={{ width: '25%', marginLeft: '10px', marginBottom: '10px', float: 'left' }}>
            <Select id="selectboxproject" instanceId="selectboxproject" placeholder="PROJECTS" closeMenuOnSelect={true} components={animatedComponents} options={projects} isMulti onChange={changeprojectFilter} ></Select>
        </div>
    );
}
export default Projectfilter;