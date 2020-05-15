import React from 'react';
import './App.css';
import "antd/dist/antd.css";

import Routes from "./ui/routes"
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/*" render={ () => <Routes  /> } />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;

    