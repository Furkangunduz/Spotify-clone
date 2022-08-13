import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'Icons';
import { setSidebarCurrent } from 'stores/player';

function SidebarCover() {
	const dispatch = useDispatch();
	const { current } = useSelector((state) => state.player);

	return (
		<div className='pt-[100%] relative bg-black group'>
			<img
				src={current.image}
				className='w-full h-full object-cover absolute top-0 left-0'
			/>
			<button
				onClick={() => dispatch(setSidebarCurrent(false))}
				className='w-6 h-6 bg-black opacity-0 group-hover:opacity-80 hover:scale-[1.05] hover:!opacity-100 flex items-center justify-center rounded-full absolute top-1 right-1 -rotate-90'>
				<Icon name='arrowLeft' size={16} />
			</button>
		</div>
	);
}

export default SidebarCover;
