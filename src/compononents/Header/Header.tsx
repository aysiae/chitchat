import { NavBar } from '../NavBar/Navbar';
import Switch from '@mui/material/Switch';
import './Header.scss';
import React from 'react';
import { useAppDispatch } from '../../store/store';
import {
	toggleDarkMode,
	toggleUnicornMode,
} from '../../store/features/colorModeSlice';

export default function Header() {
	const dispatch = useAppDispatch();

	return (
		<div className="header">
			<h1>ChitChat</h1>
			<NavBar />
			<div>
				<Switch
					onClick={() => dispatch(toggleDarkMode())}
					color="default"
				/>
			</div>
			<div>
				<Switch
					onClick={() => dispatch(toggleUnicornMode())}
					color="secondary"
				/>
			</div>
		</div>
	);
}
