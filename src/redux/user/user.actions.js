import { UserActionTypes } from "./user.types";
//user parameter: user snapshot or user auth or null
export const setCurrentUser = (user) => ({
  //USE UNDERSCORES WHEN NECESSARY
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
//this is an ACTION
