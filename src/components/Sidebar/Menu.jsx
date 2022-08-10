import React from 'react';
import { Icon } from 'Icons';
import { NavLink } from 'react-router-dom';

function Menu() {
	return (
		<nav className='px-2'>
			<ul className='flex flex-col'>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? 'active link' : 'link')}>
						<span>
							<Icon name='home' />
						</span>
						Anasayfa
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/search'}
						className={({ isActive }) => (isActive ? 'active link' : 'link')}>
						<span>
							<Icon name='search' />
						</span>
						Ara
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/collections'}
						className={({ isActive }) => (isActive ? 'active link' : 'link')}>
						<span>
							<Icon name='collections' />
						</span>
						Kitaplığın
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
