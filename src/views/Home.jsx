import Section from 'components/Section';
import { songs } from 'data/songs';

function Home() {
	return (
		<div className='flex flex-col gap-y-4'>
			<Section title='Yakınlarda Çalınanlar' more={true} items={songs} />
			<Section title='Kaldığın yerden devam et' more={true} items={songs} />
			<Section title='En çok dinlediğin mixler' more={true} items={songs} />
		</div>
	);
}

export default Home;
