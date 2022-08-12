import { Icon } from 'Icons';

function DownloadApp() {
	return (
		<div className='h-10 px-6 flex flex-shrink-0 items-center text-link text-sm font-semibold hover:text-white gap-x-4'>
			<Icon name='download' size={20} />
			Uygulamayı Yükle
		</div>
	);
}

export default DownloadApp;
