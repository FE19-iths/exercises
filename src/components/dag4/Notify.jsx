import React, { useState, useEffect } from 'react';
import './Notify.css';

const Notify = ({ content }) => {
    const [state, setState] = useState(0);

    const showNotification = () => {
        setState(1);
        setTimeout(() => { setState(2); }, 2000)
        setTimeout(() => { setState(0); }, 2000+1000)
    }
    useEffect(() => {
        showNotification();
    }, [])
    let cssClass = '';
    if( state === 0 ) { cssClass = 'notify'; }
    else if( state === 1 ) { cssClass = 'notify show'; }
    else { cssClass = 'notify hide'; }

    return (
        <div>
            <button onClick={showNotification}> Toggle notification </button>
            <div className={cssClass}>
                {content}
            </div>
        </div>
    )
}

export default Notify;
