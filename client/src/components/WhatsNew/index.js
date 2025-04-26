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
                <li>Filter map view by FY and Module Enrollment/Completion</li>
            </ul>
        </div>
    )
};

export default WhatsNew;