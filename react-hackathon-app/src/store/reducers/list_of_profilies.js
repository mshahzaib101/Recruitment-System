
import users from '../actions/users'



const INITIAL_STATE = {
  students_profilies : [],
  company_profilies : [],
}

function Updating_list_of_profilies(state = INITIAL_STATE, action) {
  switch (action.type) {  
  case users.updating_company_profilies:
    return Object.assign({}, state, { company_profilies: action.payload});
    case users.updating_students_profilies:
    return Object.assign({}, state, { students_profilies: action.payload});
    // case users.changing_fb_btn_view:
    // return Object.assign({}, state, { user_is_logged_in: action.payload});
  default:
    return state
  }
}

export default Updating_list_of_profilies;