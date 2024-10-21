import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar({ onDateChange }) {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
   
    onDateChange(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={handleDateChange} 
      />
    </LocalizationProvider>
  );
}
