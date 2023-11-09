import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import { FitnessProvider } from 'DataStore/Store';
import Tab from './Tab';

//const Activities = React.lazy(()=>import("Activities/Activities"));




const App = () => (
  <div className="container">
    <React.Suspense fallback ="loading">     
        <Tab></Tab>
    </React.Suspense>
  </div>
);
ReactDOM.render(<FitnessProvider><App /></FitnessProvider>, document.getElementById("app"));
