import {
	Colors,
	UnicornModeDark,
	UnicornModeLight,
	LightMode,
	DarkMode,
} from '../types/ColorPalettes';
import { ColorModes } from '../store/features/colorModeSlice';

export const Colorizer = (color: string, state: ColorModes) => {
	if (!state.darkMode && !state.unicornMode) {
		if (color === Colors.background) {
			return LightMode.primaryOne;
		} else if (color === Colors.primary) {
			return LightMode.primaryTwo;
		} else if (color === Colors.receivingMsg) {
			return LightMode.secondaryOne;
		} else if (color === Colors.sendingMsg) {
			return LightMode.secondaryTwo;
		} else {
			return LightMode.text;
		}
	} else if (state.darkMode && !state.unicornMode) {
		if (color === Colors.background) {
			return DarkMode.primaryOne;
		} else if (color === Colors.primary) {
			return DarkMode.primaryTwo;
		} else if (color === Colors.receivingMsg) {
			return DarkMode.secondaryOne;
		} else if (color === Colors.sendingMsg) {
			return DarkMode.secondaryTwo;
		} else {
			return DarkMode.text;
		}
	} else if (!state.darkMode && state.unicornMode) {
		if (color === Colors.background) {
			return UnicornModeLight.primaryOne;
		} else if (color === Colors.primary) {
			return UnicornModeLight.primaryTwo;
		} else if (color === Colors.receivingMsg) {
			return UnicornModeLight.secondaryOne;
		} else if (color === Colors.sendingMsg) {
			return UnicornModeLight.secondaryTwo;
		} else {
			return UnicornModeLight.text;
		}
	} else {
		if (color === Colors.background) {
			return UnicornModeDark.primaryOne;
		} else if (color === Colors.primary) {
			return UnicornModeDark.primaryTwo;
		} else if (color === Colors.receivingMsg) {
			return UnicornModeDark.secondaryOne;
		} else if (color === Colors.sendingMsg) {
			return UnicornModeDark.secondaryTwo;
		} else {
			return UnicornModeDark.text;
		}
	}
};
