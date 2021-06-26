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

function getSteps() {
    return ['select date and time ', 'Select Location', 'Confirmation'];
}
function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return(
            <StaticDatePickerDemo />
        );
      case 1:
        return(
            <SelectLocation />
        );
      case 2:
        return(
            <Confirmation />
        );
      default:
        return 'Unknown stepIndex';
    }
  }

const Reservation = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
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
                            <Typography>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography style={{padding: 40}}>{getStepContent(activeStep)}</Typography>
                            <div >
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className="back_btn"
                                    style={{marginLeft:50}}
                                >
                                    Prev
                                </Button>
                                <Button variant="contained" style={{marginLeft:280,backgroundColor:"#3F8EFC", color:"white"}} onClick={handleNext} >
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