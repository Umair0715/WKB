import Select from 'react-select';

const SelectBox = ( { options } ) => {
   
    return (
        <Select
            options={options}
            className='outline-none focus:border-red-500'
            inputId='select-box-input'
            styles={{
                border : "none " ,
                outline : "none !important"
            }} 
        />
    );
}

export default SelectBox;