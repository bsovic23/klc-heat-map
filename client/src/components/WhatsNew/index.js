import React from 'react';

export const WhatsNew = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null
    }

    return(
        <div class='drop-down-list'>
            <button onClick={onClose}>X Close</button>
            <ul>
                <p>Updates:</p>
                <li>Application now includes FY25 Data</li>
                <li>State Change data includes All time, as well as year to year trends</li>
            </ul>
        </div>
    )
};

export default WhatsNew;