import Navbar from 'components/Navbar';
import { Routes, Route } from 'react-router-dom';

import Home from 'views/Home';
import Search from 'views/Search';
import Collections from 'views/Collections';

function Content() {
	return (
		<main className='w-full overflow-auto'>
			<Navbar />
			<div className='px-8 pt-5'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/search' element={<Search />} />
					<Route path='/collections' element={<Collections />} />
				</Routes>
			</div>
		</main>
	);
}

export default Content;
