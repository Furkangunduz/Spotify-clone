import Navigation from 'components/Navbar/Navigation';
import Auth from 'components/Navbar/Auth';
import { useLocation } from 'react-router-dom';
import Search from 'components/Navbar/Search';

function Navbar() {
	const { pathname } = useLocation();
	return (
		<nav className='h-[3.75rem] w-full flex items-center justify-between px-8'>
			<Navigation />
			{pathname == '/search' && <Search />}
			<Auth />
		</nav>
	);
}

export default Navbar;
