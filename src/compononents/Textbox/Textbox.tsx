import { Colorizer } from '../../helpers/ColorMode';
import { Colors } from '../../types/ColorPalettes';

export function Textbox() {
	const parent = {
		display: 'flex',
		'flex-direction': 'column',
	};

	const styles = {
		textArea: {},
		button: {
			backgroundColor: Colorizer(Colors.sendingMsg),
			border: 'none',
			color: Colorizer(Colors.text),
			borderRadius: '15px',
			height: '40px',
		},
	};

	return (
		<div style={parent}>
			<textarea
				cols={45}
				rows={10}
			/>
			<button style={styles.button}>Send</button>
		</div>
	);
}
