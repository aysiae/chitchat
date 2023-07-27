import { configureStore } from '@reduxjs/toolkit';
import { colorModeReducer } from './features/darkMode';
import ColorModeSlice from './features/colorModeSlice';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		colors: ColorModeSlice.reducer,
	},
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector;
