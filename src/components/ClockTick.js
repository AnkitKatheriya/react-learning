import React from 'react';

function ClockTick(props) {
    return (
        <div>
            <h4>Time is { new Date().toLocaleString()}</h4>
        </div>
    );
}

export default ClockTick;