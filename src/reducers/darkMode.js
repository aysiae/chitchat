let initialState = { darkMode: false, unicornMode: false };

export const darkMode = (payload) => {
	return {
		type: 'DARK_MODE',
		payload: payload,
	};
};

export const unicornMode = (payload) => {
	return {
		type: 'UNICORN_MODE',
		payload: payload,
	};
};

export const colorModeReducer = (state = initialState, action) => {
	let { type } = action;
	switch (type) {
		case 'DARK_MODE':
			return {
				darkMode: !state.darkMode,
			};
		case 'UNICORN_MODE':
			return {
				unicornMode: !state.unicornMode,
			};
		default:
			return state;
	}
};
