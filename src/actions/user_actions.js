export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

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
