import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './App.css';
import App1 from './App1';
import Value from './Value';
function App() {
return(
    <Router history={createBrowserHistory()}>
    <Route exact path="/" component={App1}/>
    <Route path="/Value" component={Value}/>
    </Router>
)
}
export default App;