import React from 'react';
import { render } from 'react-dom';
import Address from 'mock-registration-project/dist/components/address/address'

const App = () => {
  return(
        <div>
          <Address/>
        </div>
  )
};

render(
        <App />,
    document.getElementById('root')
);
