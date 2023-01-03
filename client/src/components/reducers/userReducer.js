export default function userReducer(state=null , action){
    switch(action.type){
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return "LOGOUT 555";
        default:
            return state;
    }

}