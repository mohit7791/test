import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import  { useDispatch, useSelector } from 'react-redux';

import {te} from './try';

function App1(props) {
const [val,setVal]=useState("");
const dispatch=useDispatch();



const test=(event)=>{
  event.preventDefault();
  const data={item:val};
  dispatch(te(data));
  props.history.push("/Value");        
}
  return (
    <div className="App">
     <input type="text" onChange={(event)=>setVal(event.target.value)}/>
     <button onClick={test}>Add</button>
     
    </div>
  );
}

export default App1;
