import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../style/header.scss";
import { useHistory } from "react-router-dom";


const Header = () => {
  const history = useHistory();
  return (
    <div className="nav" style={{ flexGrow: 1, margin: 0, marginTop: 12 }}>

        <Toolbar>
          <Typography style={{fontWeight:"bolder"}} variant="h5" className="logo" style={{paddingLeft: 50}}>
            V CARE
          </Typography>
          <button className="btn" onClick={()=>history.push("/")}>Home</button>
          <button className="btn" onClick={()=>history.push("/reservation")}>Reservation</button>
          <button className="btn">Sign Out</button>

        </Toolbar>
    </div >
  );
}


export default Header;
