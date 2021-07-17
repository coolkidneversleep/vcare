import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../style/landing.scss'
import '../style/header.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Landing = (props) => {
    const renderContent = () => {
        switch (props.auth){
          case null:
            return ;
          case false:
            return (
                <a href="/auth/google">
                <button className="signin_btn">
                        <img style={{ width:20, height:20}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"></img>
                        <Typography variant="button" style={{textTransform:"capitalize"}} className="signin_text">Sign in with google</Typography>
                </button>
                </a>
            );
          default: 
            return (
                <Link to="/reservation">
                <button className="signout_btn">
                        Reservation
                </button>
                </Link>
              
            );
        }
      }
        return (
            <div style={{ paddingTop: 14 }}>
                <Grid
                    style={{padding:40, paddingTop:0}}
                    container
                    direction="row"
                    justify="center"
                    alignItems="start"
                >
                    <img style={{width:672, height:672, marginLeft:40}} src="https://image.freepik.com/free-vector/illustration-doctor-injecting-vaccine-patient-clinic_23-2148865135.jpg"></img>
                    <Grid direction="column" style={{paddingTop: 120, paddingLeft: 90 }}>
                    <div>
                    <h2 className="welcome_text">Prevent Better</h2>
                    <h2 className="welcome_text">Than Care </h2>
                    </div>
                    {renderContent()}
                    </Grid>
                </Grid>
            </div>
        );
}
function mapStateToProps({ auth }) {
    return { auth };
};

export default connect(mapStateToProps)(Landing);