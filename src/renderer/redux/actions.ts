import * as screenSlice from "./slices/ScreenSlice";
import * as globalDataSlice from "./slices/GlobalData";

export const actions = {
  SET_SCREEN: screenSlice.setScreen,
  RESET_SCREEN: screenSlice.resetScreen,
  SET_GLOBAL_DATA: globalDataSlice.setData,
  RESET_GLOBAL_DATA: globalDataSlice.resetData,
};

export type ActionKeys = keyof typeof actions;
