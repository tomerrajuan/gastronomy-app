import { combineReducers } from "@reduxjs/toolkit";

import ui from "./slices/uiSlice";

const rootReducer = combineReducers({
  ui,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
