import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { AppDispatch, AppThunk } from "../store";

interface IIsAddItemForm {
  isAddItemForm: boolean;
}

const initialState: IIsAddItemForm = {
  isAddItemForm: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setIsAddItemForm(state, action: PayloadAction<IIsAddItemForm>) {
      const { isAddItemForm } = action.payload;
      state.isAddItemForm = isAddItemForm;
    },
  },
});

// esport to use with "dispatch" from the components to change the value
export const setIsAddItemForm =
  (isAddItemForm: boolean): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(uiSlice.actions.setIsAddItemForm({ isAddItemForm }));
  };

// export to use the global isAddItemForm state in the components
export const SelectIsAddItemForm = (state: RootState) => {
  return state.ui.isAddItemForm;
};

export default uiSlice.reducer;
