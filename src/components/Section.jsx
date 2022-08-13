import SongItem from 'components/SongItem';

function Section({ title, more = false, items }) {
	return (
		<section>
			<header className='flex items-center justify-between mb-6'>
				<h3 className='text-2xl text-white font-bold tracking-tight'>{title}</h3>
				{more && (
					<a
						href='#'
						className='uppercase text-link font-semibold text-xs hover:underline  '>
						Hepsini Gör
					</a>
				)}
			</header>
			<div className='grid grid-cols-5 gap-x-6'>
				{items.map((item) => (
					<SongItem item={item} key={item.id} />
				))}
			</div>
		</section>
	);
}

export default Section;
