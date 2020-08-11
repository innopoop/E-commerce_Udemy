import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  //or [selectUser, selectCart]
  [selectUser],
  (user) => user.currentUser
);
