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

export default uiSlice.reducer;
