import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../style/landing.scss'
class Landing extends Component {
    render() {
        return (
            <div style={{ paddingTop: 14 }}>
                <Grid
                    style={{padding:40, paddingTop:0}}
                    container
                    direction="row"
                    justify="center"
                    alignItems="start"
                >
                    <img style={{width:552, height:552, marginLeft:40}} src="https://image.freepik.com/free-vector/illustration-doctor-injecting-vaccine-patient-clinic_23-2148865135.jpg"></img>
                    <Grid direction="column" style={{paddingTop: 110, paddingLeft: 80 }}>
                    <div>
                    <h2 className="welcome_text">Prevent Better</h2>
                    <h2 className="welcome_text">Than Care </h2>
                    </div>
                    <button className="signin_btn">
                            <img style={{ width:20, height:20}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"></img>
                            <Typography variant="caption" className="signin_text">Sign in with google</Typography>
                    </button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Landing;