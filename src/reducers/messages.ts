let initialState = {};

export const sent = (payload: any) => {
	return {
		type: 'SENT_POP',
		payload: payload,
	};
};

export const received = (payload: any) => {
	return {
		type: 'RECEIVED_POP',
		payload: payload,
	};
};

export const messagesReducer = (state = initialState, action: any) => {
	let { type } = action;
	switch (type) {
		case 'SENT_POP':
			return {
				...state,
			};
		case 'RECEIVED_POP':
			return {
				...state,
			};
		default:
			return state;
	}
};
