import { configureStore } from '@reduxjs/toolkit';
import { colorModeReducer } from '../reducers/darkMode';
import { messagesReducer } from '../reducers/messages';

export const store = configureStore({
	reducer: { colorModeReducer, messagesReducer },
});
