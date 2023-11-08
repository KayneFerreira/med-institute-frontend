import React from 'react';
import DateTime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

const TimePicker = ({ name, selectedTime, handleTimeChange }) => {
  return (
    <DateTime 
    dateFormat={false}
    timeFormat="HH:mm"
    value={selectedTime}
    onChange={time => handleTimeChange(name, time)}
    inputProps={{ placeholder: 'Selecione a hora' }}
    />
  );
};

export default TimePicker;
