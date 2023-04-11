import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from "./Toggle";
import ThemeReducer from "./Theme";

export default configureStore({
  reducer: {
    theme:ThemeReducer,
    toggle: ToggleReducer,
  },
});
