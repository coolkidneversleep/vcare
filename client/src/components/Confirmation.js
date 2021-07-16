import * as React from 'react';
import '../style/reservation.scss'

const Confirmation = ({reservationInfo, date, location, vaccine}) => {
    return(
        <div >
            <div className="small_card"style={{display: 'flex', flexFlow: 'column',justifyContent: 'center'}}>
                <h3 className="confirm_text">Vaccine Reservation</h3>
            <div>{reservationInfo}</div>
            <div>{date.toString()}</div>
            <div>{location}</div>
            <div>{vaccine}</div>
            
            </div>
        </div>
    );
}

export default Confirmation;