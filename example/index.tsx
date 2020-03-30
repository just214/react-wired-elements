import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredButton, WiredInput, WiredTextarea } from '../.';

const App = () => {
  function handleClick(e) {
    console.log(e);
  }
  function onChange(e) {
    console.log(e);
  }
  return (
    <div>
      <WiredButton elevation={3} onClick={e => handleClick(e)}>
        Hello
      </WiredButton>
      <WiredInput type="email" onChange={e => onChange(e)} />
      <WiredTextarea onChange={e => onChange(e)} />
      <input onChange={e => onChange(e)} />
      <button onClick={e => handleClick(e)}>Hello</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
