import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js';
// import userReducer from './features/user/userSlice.js';
// import userProduct from './features/user/userProduct.js';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // user: userReducer,
    // product: userProduct,
    // Add other reducers here
  },
});

export default store;