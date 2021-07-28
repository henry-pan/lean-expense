export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const removeUser = (user) => {
  return {
    type: REMOVE_USER,
    user,
  };
};
