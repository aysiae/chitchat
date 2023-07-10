export function Textbox() {
	const parent = {
		display: 'flex',
		'flex-direction': 'column',
	};

	const styles = {
		textArea: {},
		button: {
			backgroundColor: '#d288d7',
			border: 'none',
			color: 'white',
			borderRadius: '15px',
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
