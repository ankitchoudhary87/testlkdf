import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const Languagefilter = (props) => {
    const animatedComponents = makeAnimated();
    let { languages, changelanguageFilter } = props;
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            //color: state.isSelected ? 'red' : 'blue',
            padding: '4px',
            fontSize: '22px',
            backgroundColor: 'gray',
            color: 'white',
            textAlign: 'left'
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: 250,
            fontSize: '22px',
            //backgroundColor:'gray',
            color: 'red',
            border: 'solid 1px blue'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }
    return (
        <div style={{ width: '20%', marginLeft: '10px', marginBottom: '10px', float: 'left' }}>
            <Select id="selectboxlanguage" instanceId="selectboxlanguage" placeholder="LANGUAGES" closeMenuOnSelect={true} components={animatedComponents} options={languages} isMulti onChange={changelanguageFilter} ></Select>
        </div>
    );
}
export default Languagefilter;