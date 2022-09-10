import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const Stakeholderfilter = (props) => {
    const animatedComponents = makeAnimated();
    let { stakeholders, changestakeholderFilter } = props;
    return (
        <div style={{ width: '25%', marginLeft: '10px', marginBottom: '10px', float: 'left' }}>
            <Select id="selectboxstakeholder" instanceId="selectboxstakeholder" placeholder="STAKEHOLDERS" closeMenuOnSelect={true} components={animatedComponents} options={stakeholders} isMulti onChange={changestakeholderFilter} ></Select>
        </div>
    );
}
export default Stakeholderfilter;