import DATA from "./shop.data";

import SHOP_DATA from "./shop.data";
// const { default: SHOP_DATA } = require("./shop.data");

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
