import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

//Wrapping selectCollection (returns a function) with memoize does the same thing as a selector with reselect
//memoize the selector! if same parameter is used, don't rerun the function!!
export const selectCollection = memoize((collectionUrlParam) =>
  //This is a "curried function": a funcion that returns another function
  createSelector([selectShopItems], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
