
import users from '../actions/users'



const INITIAL_STATE = {
  Loged_in_user : {},
  user_is_logged_in: false,
}

function Loged_in_user(state = INITIAL_STATE, action) {
  switch (action.type) {  
  case users.logged_in_user:
    return Object.assign({}, state, { Loged_in_user: action.payload});
    case users.changing_fb_btn_view:
    return Object.assign({}, state, { user_is_logged_in: action.payload});
  default:
    return state
  }
}

export default Loged_in_user;