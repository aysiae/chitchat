import { Colorizer } from '../../helpers/ColorMode';
import { useAppSelector } from '../../store/store';
import { Colors } from '../../types/ColorPalettes';

export function Textbox() {
	const colors = useAppSelector((state) => state.colors.interfaceColor);
	const parent = {
		display: 'flex',
		'flex-direction': 'column',
	};

	const styles = {
		textArea: {},
		button: {
			backgroundColor: Colorizer(Colors.sendingMsg, colors),
			border: 'none',
			color: Colorizer(Colors.text, colors),
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
