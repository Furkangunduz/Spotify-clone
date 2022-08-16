import { Icon } from 'Icons';
import { useSelector, useDispatch } from 'react-redux';
import { useAudio, useFullscreen, useToggle } from 'react-use';
import { secondToTime } from 'utils/secondToTime';
import CustomRange from 'components/CustomRange';
import { useMemo, useEffect, useRef } from 'react';
import { setControls, setPlaying, setSidebarCurrent } from 'stores/player';
import FullScreenPlayer from 'components/FullScreenPlayer';

function Player() {
	const fsRef = useRef();
	const [show, toggle] = useToggle(false);
	const isFullscreen = useFullscreen(fsRef, show, { onClose: () => toggle(false) });
	const dispatch = useDispatch();
	const { current, sidebarCurrent } = useSelector((state) => state.player);

	const [audio, state, controls, ref] = useAudio({
		src: current?.src,
		autoPlay: true,
	});

	useEffect(() => {
		controls.play();
	}, [current]);

	useEffect(() => {
		dispatch(setPlaying(state.playing || false));
	}, [state.playing]);

	useEffect(() => {
		dispatch(setControls(controls));
	}, []);

	const volumeIcon = useMemo(() => {
		if (state.volume == 0 || state.muted) return 'volumeMuted';
		if (state.volume > 0 && state.volume <= 0.33) return 'volumeLow';
		if (state.volume <= 0.66 && state.volume > 0.33) return 'volumeNormal';
		return 'volumeFull';
	}, [state.volume, state.muted]);

	const onVolumeIconClick = () => controls[state.muted ? 'unmute' : 'mute'];

	return (
		<div className='flex items-center justify-between h-full px-4'>
			<div className='min-w-[11.25rem] w-[30%]'>
				{current && (
					<div className='flex items-center '>
						{!sidebarCurrent && (
							<div className='w-14 h-14 flex-shrink-0 relative group'>
								<img src={current.image} />
								<button
									onClick={() => dispatch(setSidebarCurrent(true))}
									className='w-6 h-6 bg-black opacity-0 group-hover:opacity-80 hover:scale-[1.05] hover:!opacity-100 flex items-center justify-center rounded-full absolute top-1 right-1 rotate-90'>
									<Icon name='arrowLeft' size={16} />
								</button>
							</div>
						)}
						<div className='ml-2 flex flex-col gap-y-1'>
							<h6 className='line-clamp-1 text-sm '>{current.title}</h6>
							<p className='line-clamp-1 text-[0.685rem] text-white opacity-70'>
								{current.artist}
							</p>
						</div>
						<button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ml-2'>
							<Icon size={16} name='heart' />
						</button>
						<button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ml-2'>
							<Icon size={16} name='pictureInPicture' />
						</button>
					</div>
				)}
			</div>
			<div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
				<div className='flex items-center gap-x-4 '>
					<button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
						<Icon size={16} name='shuffle' />
					</button>
					<button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
						<Icon size={16} name='playerPrev' />
					</button>
					<button
						onClick={controls[state.playing ? 'pause' : 'play']}
						className='w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.1]'>
						<Icon size={16} name={`${state.playing ? 'pause' : 'play'}`} />
					</button>
					<button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
						<Icon size={16} name='playerNext' />
					</button>
					<button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
						<Icon size={16} name='repeat' />
					</button>
				</div>
				<div className='w-full flex items-center justify-center gap-x-2 px-2'>
					{audio}
					<div className='text-white text-opacity-70 text-sm'>
						{secondToTime(state?.time)}
					</div>
					<CustomRange
						value={state?.time}
						min={0}
						step={0.1}
						max={state?.duration || 1}
						onChange={(value) => controls.seek(value[0])}
					/>
					<div className='text-white text-opacity-70 text-sm'>
						{secondToTime(state?.duration)}
					</div>
				</div>
			</div>
			<div className='min-w-[11.25rem] w-[30%] flex items-center gap-x-2 justify-end'>
				<button>
					<Icon name='lyrics' size={16} />
				</button>
				<button>
					<Icon name='queue' size={16} />
				</button>
				<button>
					<Icon name='device' size={16} />
				</button>
				<button onClick={controls[state.muted ? 'unmute' : 'mute']}>
					<Icon name={volumeIcon} size={16} />
				</button>
				<div className='w-[5.813rem] max-w-full'>
					<CustomRange
						value={state.muted ? 0 : state?.volume}
						min={0}
						step={0.01}
						max={1}
						onChange={(value) => {
							controls.unmute();
							controls.volume(value);
						}}
					/>
				</div>
				<button onClick={current && toggle}>
					<Icon name='fullScreen' size={16} />
				</button>
			</div>
			<div ref={fsRef}>
				{isFullscreen && current && (
					<FullScreenPlayer
						toggle={toggle}
						state={state}
						controls={controls}
						volumeIcon={volumeIcon}
					/>
				)}
			</div>
		</div>
	);
}

export default Player;
