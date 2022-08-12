import { NavLink } from 'react-router-dom';
import { Icon } from 'Icons';

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
					<NavLink
						to='/'
						key={item.id}
						className='bg-footer p-4 rounded-md hover:bg-active group'>
						<div className='pt-[100%] relative mb-4'>
							<img
								src={item.image}
								className='absolute object-cover inset-0 w-full h-full'
							/>
							<button className='bg-primary w-10 h-10 absolute right-2 bottom-0 hidden transition-all group-hover:flex group-hover:-translate-y-2 group-hover:duration-1000 justify-center items-center rounded-full'>
								<Icon name='play' size={16} />
							</button>
						</div>
						<h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap'>
							{item.title}
						</h6>
						<p className='line-clamp-2 text-link text-sm mt-1'>
							{item.description}
						</p>
					</NavLink>
				))}
			</div>
		</section>
	);
}

export default Section;
