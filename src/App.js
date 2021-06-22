import './App.css';
import * as Sentry from "@sentry/react";


function App() {
  return (
    <div className="App">
      <button type="button" onClick={() => console.log('button was clicked')}>Click here to throw an error</button>
    </div >
  );
}

export default Sentry.withProfiler(App);
