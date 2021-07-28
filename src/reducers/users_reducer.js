import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from "../actions/user_actions";
import { RECEIVE_EXP } from "../actions/expense_actions";

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
    case RECEIVE_EXP:
      // Remove from previous user's set
      console.log("id", action.expense.id);
      // const prevUser = state[action.expense.id];
      console.log("prevState", state);
      // nextState[prevUser]["expensesSet"].delete(action.expense.id);
      nextState[action.expense.userId]["expensesSet"].add(action.expense.id);
      return nextState;
    case REMOVE_USER:
      delete nextState[action.user.id];
      return nextState;
    default:
      return state;
  }
}

export default usersReducer;
