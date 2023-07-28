import React, { useEffect } from 'react';
import { ChatBubble } from '../../compononents/ChatBubble/ChatBubble';
import { Textbox } from '../../compononents/Textbox/Textbox';
import { Colorizer } from '../../helpers/ColorMode';
import { Colors } from '../../types/ColorPalettes';
import { store, useAppSelector } from '../../store/store';

export function Messenger() {
	const colors = useAppSelector((state) => state.colors.interfaceColor);

	const styles = {
		margin: 'auto',
		padding: '15px',
		width: '500px',
		borderRadius: '15px',
		backgroundColor: Colorizer(Colors.primary, colors),
		display: 'flex',
		'flex-direction': 'column',
	};

	return (
		<div style={styles}>
			<ChatBubble
				message="Hello"
				styles="sent"
			/>
			<ChatBubble
				message="How are you today?"
				styles="sent"
			/>
			<ChatBubble
				message="Hey there!"
				styles="false"
			/>
			<ChatBubble
				message="I'm doing well, how are you?"
				styles="false"
			/>
			<ChatBubble
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis cursus in hac. A scelerisque purus semper eget duis at tellus. A diam maecenas sed enim. Sit amet commodo nulla facilisi nullam. Diam donec adipiscing tristique risus nec feugiat. Diam donec adipiscing tristique risus nec feugiat in. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Nunc scelerisque viverra mauris in aliquam. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Leo vel orci porta non pulvinar."
				styles="sent"
			/>
			<Textbox />
		</div>
	);
}
