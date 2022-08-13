import { NavLink } from 'react-router-dom';
import { Icon } from 'Icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from 'stores/player';

function SongItem({ item }) {
	const dispatch = useDispatch();
	const { current, playing, controls } = useSelector((state) => state.player);
	const updateCurrent = () => {
		if (current.id == item.id) {
			if (playing) {
				controls.pause();
			} else {
				controls.play();
			}
		} else {
			dispatch(setCurrent(item));
		}
	};

	return (
		<NavLink to='/' key={item.id} className='bg-footer p-4 rounded-md hover:bg-active group'>
			<div className='pt-[100%] relative mb-4'>
				<img src={item.image} className='absolute object-cover inset-0 w-full h-full' />
				<button
					onClick={updateCurrent}
					className={`bg-primary w-10 h-10 absolute right-2 bottom-0 ${
						current?.id == item.id && playing ? 'flex' : 'hidden'
					} transition-all group-hover:flex  justify-center items-center rounded-full`}>
					<Icon
						name={`${current?.id == item.id && playing ? 'pause' : 'play'}`}
						size={16}
					/>
				</button>
			</div>
			<h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap'>{item.title}</h6>
			<p className='line-clamp-2 text-link text-sm mt-1'>{item.description}</p>
		</NavLink>
	);
}

export default SongItem;
