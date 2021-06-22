import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Component } from 'react/cjs/react.production.min';



class Header extends Component {
    render() {
      return(
      <div style={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1}}>
              V CARE
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Reservation</Button>
            <Button color="inherit">Sign Out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
      }
  }

  export default Header;
