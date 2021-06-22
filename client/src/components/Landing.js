import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { fontSize, fontWeight } from '@material-ui/system';
class Landing extends Component {
    render() {
        return (
            <div style={{ paddingTop: 14 }}>
                <Grid
                    style={{padding:40}}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <img style={{width:552, height:552}} src="https://image.freepik.com/free-vector/illustration-doctor-injecting-vaccine-patient-clinic_23-2148865135.jpg"></img>
                    <Grid direction="column">
                    <div>
                    <Typography color="secondary" style={{alignItems:"center", padding: 30, paddingTop:0, paddingBottom:0, fontSize: 40, fontWeight: "bold" }}>Prevent Better</Typography>
                    <Typography color="secondary" style={{alignItems:"center", paddingLeft:30, fontSize: 40, fontWeight: "bold" }}>Than Care</Typography>
                    </div>
                    <Button variant="outlined" color="secondary" style={{borderRadius:16, width:300, marginLeft:30}}>
                        <Grid direction="row" alignItems="center" >
                            <img style={{ width:20, height:20, marginTop:5}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"></img>
                            <Typography variant="caption"color="secondary.light" style={{paddingTop:0,paddingLeft:10,textTransform:"capitalize",fontWeight:"bold"}}>Sign in with google</Typography>
                        </Grid>
                    </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Landing;