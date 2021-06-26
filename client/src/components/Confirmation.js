import * as React from 'react';
import '../style/reservation.scss'

const Confirmation = () => {
    return(
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
            <div className="small_card">
                <h3 className="confirm_text">Vaccine Reservation</h3>
            </div>
        </div>
    );
}

export default Confirmation;