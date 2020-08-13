import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
//middleware: functions that receive actions and pass them to root reducer
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];
//(store) => (next) => (action) => {any action you want to do}
//next(action); must be called to
//store returns next which returns action and u use the action parameter to do things

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
