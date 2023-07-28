import React, { useEffect } from 'react';
import { Colorizer } from '../../helpers/ColorMode';
import { Colors } from '../../types/ColorPalettes';
import { useAppDispatch, useAppSelector } from '../../store/store';

export function ChatBubble(props: { styles: string; message: string }) {
	const dispatch = useAppDispatch();
	const colors = useAppSelector((state) => state.colors.interfaceColor);

	useEffect(() => {}, [dispatch, colors]);

	const receiving = {
		margin: '5px',
		backgroundColor: Colorizer(Colors.receivingMsg, colors),
		color: Colorizer(Colors.text, colors),
		width: 'fit-content',
		maxWidth: '300px',
		padding: '10px',
		borderRadius: '25px',
	};

	const sending = {
		margin: '5px',
		backgroundColor: Colorizer(Colors.sendingMsg, colors),
		color: Colorizer(Colors.text, colors),
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
