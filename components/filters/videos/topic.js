import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const Topicfilter = (props) => {
    const animatedComponents = makeAnimated();
    let { topics, changetopicFilter } = props;
    return (
        <div style={{ width: '50%', marginLeft: '10px', marginBottom: '10px', float: 'left' }}>
            <Select id="selectboxtopic" instanceId="selectboxtopic" placeholder="TOPICS" closeMenuOnSelect={true} components={animatedComponents} options={topics} isMulti onChange={changetopicFilter} ></Select>
        </div>
    );
}
export default Topicfilter;