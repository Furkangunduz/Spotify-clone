function Playlists() {
	return (
		<nav className='mx-6 pt-2 mt-2 border-t border-white border-opacity-20 overflow-auto'>
			<ul>
				{new Array(30).fill(
					<li>
						<a
							href='#'
							className='text-sm text-link hover:text-white flex h-8 items-center'>
							20. Çalma Listem
						</a>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Playlists;
