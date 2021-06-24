import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../style/header.scss";


const Header = () => {
  
  return (
    <div className="nav" style={{ flexGrow: 1, margin: 0, marginTop: 12 }}>

        <Toolbar>
          <Typography style={{fontWeight:"bolder"}} variant="h5" className="logo" style={{paddingLeft: 50}}>
            V CARE
          </Typography>
          <button className="btn">Home</button>
          <button className="btn">Reservation</button>
          <button className="btn">Sign Out</button>

        </Toolbar>
    </div >
  );
}


export default Header;
