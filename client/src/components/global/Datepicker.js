import DatePicker from "react-datepicker";


const DatePicker_ = ({ value , setValue }) => {

    return (
        <DatePicker 
        selected={value} 
        onChange={(date) => setValue(date)} 
        />
    );
}

export default DatePicker_ ;