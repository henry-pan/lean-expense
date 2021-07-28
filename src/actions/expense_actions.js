export const RECEIVE_EXPS = "RECEIVE_EXPS";
export const RECEIVE_EXP = "RECEIVE_EXP";
export const REMOVE_EXP = "REMOVE_EXP";

export const receiveExpenses = (expenses) => {
  return {
    type: RECEIVE_EXPS,
    expenses,
  };
};

export const receiveExpense = (expense) => {
  return {
    type: RECEIVE_EXP,
    expense,
  };
};

export const removeExpense = (expense) => {
  return {
    type: REMOVE_EXP,
    expense,
  };
};
