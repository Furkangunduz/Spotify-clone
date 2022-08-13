import Spotify from 'img/Spotify.svg';
import Menu from 'components/Sidebar/Menu';
import Playlists from 'components/Sidebar/Playlists';
import SidebarCover from 'components/Sidebar/SidebarCover';

import { Icon } from 'Icons';
import DownloadApp from 'components/Sidebar/DownloadApp';
import { useSelector } from 'react-redux';

function SideBar() {
	const { sidebarCurrent } = useSelector((state) => state.player);

	return (
		<aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
			<a href='#' className='mb-4 px-5'>
				<img src={Spotify} alt='' className='h-10' />
			</a>
			<Menu />
			<nav className='mt-6 '>
				<ul>
					<li>
						<a
							href='#'
							className='py-2 px-6 flex items-center just gap-x-4 group text-link text-sm font-semibold hover:text-white'>
							<span className='w-6 h-6 flex items-center justify-center text-black bg-white bg-opacity-60 gropup-hover:bg-opacitiy-100 rounded-sm'>
								<Icon name='plus' size='12' />
							</span>
							Çalma Listesi Oluştur
						</a>
					</li>
					<li>
						<a
							href='#'
							className='py-2 px-6 flex items-center just gap-x-4 text-link text-sm font-semibold hover:text-white'>
							<span className='w-6 h-6 flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-300 text-white'>
								<Icon name='heart' size='12' />
							</span>
							Beğenilen Şarkılar
						</a>
					</li>
				</ul>
			</nav>
			<Playlists />
			<DownloadApp />
			{sidebarCurrent && <SidebarCover />}
		</aside>
	);
}

export default SideBar;
