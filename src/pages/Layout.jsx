import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';

import "../styles/Layout.css";

const Layout = () => {
	return (
		<div id='layout'>
			<NavBar />
			<div className='content'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout 