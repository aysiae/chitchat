let initialState = { darkMode: false, unicornMode: false };

export const darkMode = (payload: any) => {
	return {
		type: 'DARK_MODE',
		payload: payload,
	};
};

export const unicornMode = (payload: any) => {
	return {
		type: 'UNICORN_MODE',
		payload: payload,
	};
};

export const colorModeReducer = (
	state = initialState,
	action: { type: any }
) => {
	let { type } = action;
	switch (type) {
		case 'DARK_MODE':
			return {
				...state,
				darkMode: !state.darkMode,
			};
		case 'UNICORN_MODE':
			return {
				...state,
				unicornMode: !state.unicornMode,
			};
		default:
			return state;
	}
};
