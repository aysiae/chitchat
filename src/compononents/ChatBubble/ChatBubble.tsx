import React from 'react';
import { store } from '../../store/store';

export function ChatBubble(props: { styles: string; message: string }) {
	const state = store.getState().colorModeReducer;
	console.log(state);

	const receiving = {
		margin: '5px',
		backgroundColor: '#c188d7',
		color: 'white',
		width: 'fit-content',
		maxWidth: '300px',
		padding: '10px',
		borderRadius: '25px',
	};

	const sending = {
		margin: '5px',
		backgroundColor: '#8898d7',
		color: 'white',
		width: 'fit-content',
		maxWidth: '300px',
		padding: '10px',
		borderRadius: '25px',
	};

	return (
		<div
			style={
				props.styles === 'sent'
					? { ...sending, float: 'left' }
					: { ...receiving, float: 'right' }
			}>
			{props.message}
		</div>
	);
}
