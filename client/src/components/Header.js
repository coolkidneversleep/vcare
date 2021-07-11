import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "../style/header.scss";
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import { Component } from 'react';

class Header extends Component {
  renderContent(){
    switch (this.props.auth){
      case null:
        return ;
      case false:
        return (
          <Toolbar>
            <Typography style={{fontWeight:"bolder"}} variant="h5" className="logo" style={{paddingLeft: 50}}>
              V CARE
            </Typography>
          </Toolbar>
        );
      default: 
        return (
          <Toolbar>
            <Typography style={{fontWeight:"bolder"}} variant="h5" className="logo" style={{paddingLeft: 50}}>
              V CARE
            </Typography>
            <Link to='/'><button className="btn" >Home</button></Link>
            <Link to='/reservation'><button className="btn" >Reservation</button></Link>
            <button className="signout_btn">Sign Out</button>
          </Toolbar>
          
        );
    }
  }

  render(){
    return (
      <div className="nav" style={{ flexGrow: 1, margin: 0, marginTop: 12 }}>
        {this.renderContent()}
      </div >
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
};


export default connect(mapStateToProps)(Header);
