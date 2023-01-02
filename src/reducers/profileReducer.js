const initialState = {
  loggedInUser: null,
  userProfile: null
}
export default function profileReducer(state = initialState, action) {
  console.log('state 2', action)
  switch (action.type) {
    case 'SET_LOGGEDIN_USER':
      return Object.assign({}, state, {
        loggedInUser: action.loggedInUser
      });
    case 'LOGOUT_USER':
      return Object.assign({}, state, {
        loggedInUser: null,
        userProfile: null
      });
    case 'SET_USER_PROFILE':
      return Object.assign({}, state, {
        userProfile: action.userProfile
      });
    default:
      return state
  }
}
