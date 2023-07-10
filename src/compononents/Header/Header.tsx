import { NavBar } from '../NavBar/Navbar';
import Switch from '@mui/material/Switch';
import './Header.scss';

export default function Header() {
	return (
		<div className="header">
			<h1>ChitChat</h1>
			<NavBar />
			<div>
				<Switch color="default" />
			</div>
			<div>
				<Switch color="secondary" />
			</div>
		</div>
	);
}
