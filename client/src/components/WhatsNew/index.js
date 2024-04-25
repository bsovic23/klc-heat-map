import React from 'react';

export const WhatsNew = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null
    }

    return(
        <div class='drop-down-list'>
            <button onClick={onClose}>X Close</button>
            <ul>
                <p>Version 2.06.02 Updates:</p>
                <li>Filter map view by FY and Module Enrollment/Completion</li>
                <li>International Stats - Countries N, International Participants N, Top Module Completed By Country</li>
                <li>Top Module completed by state</li>
                <li>Trends Stats - State Participation Change, Top Modules Completed, Top Modules Enrolled</li>
            </ul>
        </div>
    )
};

export default WhatsNew;