import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_USERS:
      const newState = {};
      action.users.forEach(user => {
        newState[user.id] = user;
      });
      return newState;
    case RECEIVE_USER:
      nextState[action.user.id] = action.user;
      return nextState;
    case REMOVE_USER:
      delete nextState[action.user.id];
      return nextState;
    default:
      return state;
  }
}

export default usersReducer;
