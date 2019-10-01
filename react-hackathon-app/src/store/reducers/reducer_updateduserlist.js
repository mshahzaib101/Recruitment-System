
import users from '../actions/users'



const INITIAL_STATE = {
  Users_list : [],
}

function Updating_chat_list(state = INITIAL_STATE, action) {
  switch (action.type) {  
  case users.updateduserlist:
    return Object.assign({}, state, { Users_list: action.payload});
    
    
  default:
    return state
  }
}

export default Updating_chat_list;