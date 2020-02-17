import React from 'react';
import ReactDOM from 'react-dom';
import ClockTick from './components/ClockTick';

function ClockApp() {
  const element = (
    <div>
      <ClockTick />
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(ClockApp, 1000);

export default ClockApp;
