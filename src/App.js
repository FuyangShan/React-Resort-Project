import React, { Fragment } from "react";
//import logo from './logo.svg';
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Errir";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:panda" component={SingleRoom} />
        <Route component={Error} />
      </switch>
    </>
  );
}

export default App;
