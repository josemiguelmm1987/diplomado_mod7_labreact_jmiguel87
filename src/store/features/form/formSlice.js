import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  module: 'React Mod7', 
  username: '',
  email: '',
  password: 'mod7USIP-JOSEMIGUEL',
  modalType: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value; 
    },
    submitForm: (state, action) => {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    logout: () => initialState,
  },
});

export const { updateForm, submitForm, setModalType, logout } = formSlice.actions;

export default formSlice.reducer;