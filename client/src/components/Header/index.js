import React, { useState } from 'react';

// Component Imports
import WhatsNew from '../WhatsNew';


function Header() {

    const [whatsNew, setWhatsNew] = useState(false);

    const handleWhatsNewClose = () => {
        setWhatsNew(false);
    };

    return(
        <section class='header'>
            <h1>KLC Participation</h1>
            <h4>Version 2.06.02 <button onClick={() => setWhatsNew(true)}>Click to see whats New</button>{whatsNew && (<WhatsNew isOpen={whatsNew} onClose={handleWhatsNewClose}/>)}</h4>
        </section>
    )
};

export default Header;