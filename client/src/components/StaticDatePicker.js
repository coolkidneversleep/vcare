import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';
import '../style/reservation.scss'

const StaticDatePickerDemo = ({val, changeVal}) => {
  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        name="date"
        orientation="landscape"
        openTo="year"
        value={val}
        onChange={(value) => {
          changeVal(value);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
  );
}
export default StaticDatePickerDemo