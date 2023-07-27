import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ColorModes {
	unicornMode: boolean;
	darkMode: boolean;
}

interface ColorModeState {
	interfaceColor: ColorModes;
}

const initialState: ColorModeState = {
	interfaceColor: {
		unicornMode: false,
		darkMode: false,
	},
};

export const ColorModeSlice = createSlice({
	name: 'colorMode',
	initialState,
	reducers: {
		toggleDarkMode: (state, action: PayloadAction) => {
			state.interfaceColor.darkMode = !state.interfaceColor.darkMode;
		},
		toggleUnicornMode: (state, action: PayloadAction) => {
			state.interfaceColor.unicornMode = !state.interfaceColor.unicornMode;
		},
	},
});

export default ColorModeSlice;
export const { toggleDarkMode, toggleUnicornMode } = ColorModeSlice.actions;
