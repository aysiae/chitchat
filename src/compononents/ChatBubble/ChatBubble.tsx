import React from 'react';
import { store } from '../../store/store';
import { Colorizer } from '../../helpers/ColorMode';
import { Colors } from '../../types/ColorPalettes';

export function ChatBubble(props: { styles: string; message: string }) {
	const state = store.getState().colorModeReducer;
	console.log(state);

	const receiving = {
		margin: '5px',
		backgroundColor: Colorizer(Colors.receivingMsg),
		color: Colorizer(Colors.text),
		width: 'fit-content',
		maxWidth: '300px',
		padding: '10px',
		borderRadius: '25px',
	};

	const sending = {
		margin: '5px',
		backgroundColor: Colorizer(Colors.sendingMsg),
		color: Colorizer(Colors.text),
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
