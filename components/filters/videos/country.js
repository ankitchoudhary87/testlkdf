import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const Countryfilter = (props) => {
    const animatedComponents = makeAnimated();
    let { countries, changecountryFilter } = props;
    return (
        <div style={{ width: '20%', marginLeft: '10px', marginBottom: '10px', float: 'left' }}>
            <Select id="selectboxcountry" instanceId="selectboxcountry" placeholder="COUNTRIES" closeMenuOnSelect={true} components={animatedComponents} options={countries} isMulti onChange={changecountryFilter} ></Select>
        </div>
    );
}
export default Countryfilter;