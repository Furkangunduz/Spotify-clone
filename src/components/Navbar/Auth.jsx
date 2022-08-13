import { Menu } from '@headlessui/react';
import { Icon } from 'Icons';

function Auth() {
	const user = {
		name: 'Gündüz',
		avatar: 'https://avatars.githubusercontent.com/u/81353673?s=40&v=4',
	};
	return (
		<Menu as='nav' className='relative z-10'>
			{({ active }) => {
				return (
					<>
						<Menu.Button
							className={`flex items-center h-8 rounded-3xl pr-2 hover:bg-active ${
								active ? 'bg-active' : 'bg-black'
							}`}>
							<img
								src={user.avatar}
								alt='user img'
								className='w-8 h-8 p-0.5 mr-2 rounded-full'
							/>
							<span className='text-sm mr-2 font-semibold'> {user.name} </span>
							<span className={`${active && 'rotate-90'}`}>
								<Icon name='downDir' size={16} />
							</span>
						</Menu.Button>
						<Menu.Items
							className={
								'absolute top-full right-0 w-48 bg-active rounded translate-y-2'
							}
							style={{
								boxShadow:
									'0 16px 24px rgb(0 0 0 / 30% ), 0 6px 8px rgb(0 0 0 / 20%)',
							}}>
							<Menu.Item>
								{({ active }) => (
									<a
										className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
											active && 'bg-white bg-opacity-10'
										}`}
										href='https://github.com/Furkangunduz/Spotify-clone'>
										Hesap
										<Icon name='external' />
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
											active && 'bg-white bg-opacity-10'
										}`}
										href='/account-settings'>
										Profil
									</a>
								)}
							</Menu.Item>
							<Menu.Item disabled>
								<span
									className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
										active && 'bg-white bg-opacity-10'
									}`}>
									Oturumu Kapat
								</span>
							</Menu.Item>
						</Menu.Items>
					</>
				);
			}}
		</Menu>
	);
}

export default Auth;
