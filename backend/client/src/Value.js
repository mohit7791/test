import React, {useState, useEffect }from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { get } from './try';
function Value(){
    const [allVal,setAllVal]=useState([]);
    const select=useSelector(state=>state);
   const check=()=>{
    alert("check");
    
   } 
  
useEffect(()=>setAllVal(select.user));

    return(
        <div>
        {allVal.map((u)=>(
            <div>
          <p>{u.item}</p>  
          </div>
          ))}
          
          </div>
    )
}
export default Value;