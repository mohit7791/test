const iniState={user:[]}
const testReducer=(state=iniState,action)=>{
switch(action.type){

        case "GET_POST":

            return{
            ...state,
            user:state.user.concat(action.payload)
            }

        default:
           return state;
}
}
export default testReducer;