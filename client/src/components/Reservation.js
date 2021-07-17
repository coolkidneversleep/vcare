import * as React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../style/reservation.scss'
import './StaticDatePicker'
import StaticDatePickerDemo from './StaticDatePicker';
import SelectLocation from './SelectLocation';
import Confirmation from './Confirmation';
import axios from 'axios';

function getSteps() {
    return ['select date and time ', 'Select Location', 'Confirmation'];
}


const Reservation = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [location, setLocation] = React.useState('');
    const [vaccine, setVaccine] = React.useState('');
    const [date, setDate] = React.useState("");
    const steps = getSteps();
    
    const changeLocation = (location) => {
        setLocation(location)
    }
    const chageVaccine = (vaccine) => {
        setVaccine(vaccine)
    }
    const changeDate = (val) => {
        setDate(val)
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return(
                <StaticDatePickerDemo val={date} changeVal={changeDate}/>
            );
          case 1:
            return(
                <SelectLocation location={location} vaccine={vaccine} changeLocation={changeLocation} changeVaccine={chageVaccine}/>
            );
          case 2:
            return(
                <Confirmation date={date} location={location} vaccine={vaccine} />
            );
          default:
            return 'Unknown stepIndex';
        }
      }

      function getAllReservation(){
          axios.post('/api/reservation', { date: date, location: location, vaccine: vaccine}).then((res) => {
            console.log(res.data)
            handleNext()
            }
          )
      }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
            <div className="card">
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel style={{color: "#3D352F"}}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography>Thank you for your attention !</Typography>
                        </div>
                    ) : (
                        <div>
                            <Typography style={{padding: 30}}>{getStepContent(activeStep)}</Typography>
                            <div >
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className="back_btn"
                                    style={{marginLeft:50}}
                                >
                                    Prev
                                </Button>
                                <Button variant="contained" style={{marginLeft:280,backgroundColor:"#3F8EFC", color:"white"}} onClick={activeStep === steps.length - 1 ? getAllReservation :handleNext} >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Reservation;