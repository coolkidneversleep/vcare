import * as React from 'react';
import '../style/reservation.scss'
import { connect } from 'react-redux';


const Confirmation = ({date, location, vaccine, auth}) => {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    return(
        <div style={{display: 'flex', flexFlow: 'column',justifyContent: 'center'}}>
            <div className="small_card"style={{display: 'flex', flexFlow: 'column',justifyContent: 'center'}}>
                <h3 className="confirm_text">Vaccine Reservation</h3>
            <div>{auth.name}</div>
            <div>{day+"/"+month+"/"+year}</div>
            <div>{location}</div>
            <div>{vaccine}</div>
            
            </div>
        </div>
    );
}
function mapStateToProps({ auth }) {
    return { auth };
  };

export default connect(mapStateToProps)(Confirmation);