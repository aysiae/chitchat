import { configureStore } from '@reduxjs/toolkit';
import { colorModeReducer } from '../reducers/darkMode';

export default configureStore({
	reducer: { colorModeReducer },
});
