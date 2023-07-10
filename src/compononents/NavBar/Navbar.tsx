import React from 'react';
import { useState } from 'react';

export function NavBar() {
	const [selected, setSelected] = useState([true, false]);

	const isSelected = (e: any) => {
		e.preventDefault();
		if (e.target.innerText === 'Home') {
			setSelected([true, false]);
		} else {
			setSelected([false, true]);
		}
	};

	const navBar = {
		display: 'flex',
		FlexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '80%',
	};

	const selectedStyle = {
		borderBottom: '2px #c188d7 solid',
	};

	const baseStyle = {};

	return (
		<div style={navBar}>
			<h3
				style={selected[0] ? selectedStyle : baseStyle}
				onClick={isSelected}>
				Home
			</h3>
			<h3
				style={selected[1] ? selectedStyle : baseStyle}
				onClick={isSelected}>
				Messages
			</h3>
		</div>
	);
}
