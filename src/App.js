import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";


function App() {
  return (
    <div className="App">
      <button type="button" onClick={() => { throw Error('oops, something went wrong'); }}>Click here to throw an error</button>
    </div >
  );
}

export default Sentry.withProfiler(App);
