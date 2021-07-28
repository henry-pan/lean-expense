import { RECEIVE_EXPS, RECEIVE_EXP, REMOVE_EXP } from "../actions/expense_actions";

const expensesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_EXPS:
      const newState = {};
      action.expenses.forEach(expense => {
        newState[expense.id] = expense;
      });
      return newState;
    case RECEIVE_EXP:
      nextState[action.expense.id] = action.expense;
      return nextState;
    case REMOVE_EXP:
      delete nextState[action.expense.id];
      return nextState;
    default:
      return state;
  }
}

export default expensesReducer;
