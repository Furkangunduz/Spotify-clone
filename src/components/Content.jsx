import Navbar from 'components/Navbar';
import { Routes, Route } from 'react-router-dom';

import Home from 'views/Home';
import Search from 'views/Search';
import Collections from 'views/Collections';

function Content() {
	return (
		<main>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={<Search />} />
				<Route path='/collections' element={<Collections />} />
			</Routes>
		</main>
	);
}

export default Content;
