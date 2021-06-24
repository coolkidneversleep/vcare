import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../style/reservation.scss'

const SelctionLocation = () => {
    const [location, setLocation] = React.useState('');
    const [vaccine, setVaccine] = React.useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };
    const handleChangeVaccine = (event) => {
        setVaccine(event.target.value);
    };
    return (
        <div>
            <div style={{paddingTop: 40, paddingBottom: 20}}>
            <FormControl variant="filled" >
                <InputLabel id="demo-simple-select-filled-label">Location</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={location}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Bangkok"}>Bangkok</MenuItem>
                    <MenuItem value={"Chonburi"}>Chonburi</MenuItem>
                    <MenuItem value={"Chiangmai"}>Chiangmai</MenuItem>
                </Select>
            </FormControl>
            </div>
            <FormControl variant="filled" >
                <InputLabel id="demo-simple-select-filled-label">Vaccine</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={vaccine}
                    onChange={handleChangeVaccine}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Pfizer"}>Bangkok</MenuItem>
                    <MenuItem value={"Sinovac"}>Chonburi</MenuItem>
                    <MenuItem value={"Moderna"}>Chiangmai</MenuItem>
                </Select>
            </FormControl>
        </div>
        

    );
}

export default SelctionLocation