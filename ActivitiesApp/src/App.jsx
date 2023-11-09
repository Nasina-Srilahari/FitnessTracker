import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Activities from './Activities';
import { FitnessProvider } from 'DataStore/Store';




const App = () => (
  <div className="container">
    <React.Suspense fallback ="loading">
      <FitnessProvider>
        <Activities/>
      </FitnessProvider>
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
