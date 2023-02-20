import Select from 'react-select';


const MultiSelectBox = ({ options , setAttributes }) => {
    const handleChange = (values) => {
        setAttributes(values);
    }

    return (
        <Select
            options={options}
            className='outline-none focus:border-red-500'
            inputId='select-box-input'
            styles={{
                border : "none " ,
                outline : "none !important"
            }}
            placeholder='---Select---'
            isMulti 
            onChange={handleChange}
        />
    )
}

export default MultiSelectBox