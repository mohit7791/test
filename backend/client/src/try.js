import axios from 'axios';
export const  te=(data)=>async(dispatch)=>{
    await axios.post('http://localhost:8000/todos/add', data)
    .then(res => console.log(res.data));
    await axios.get('http://localhost:8000/todos')
    .then(res => dispatch({type:"GET_POST",payload:res.data}));
    
}
