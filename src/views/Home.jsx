import Section from 'components/Section';

function Home() {
	const items = [
		{
			id: 1,
			title: 'Intouchables - Soundtracks OST',
			description: 'Original Soundtrack',
			artist: 'Tayfun Abi',
			image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
			type: 'album',
			src: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3',
			artist: 'kraldragon',
		},
		{
			id: 2,
			title: 'Peaceful Piano',
			artist: 'Murat Abi',
			description: 'Relax and indulge with beautiful piano pieces',
			image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
			type: 'album',
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
			artist: 'kraldragon',
		},
		{
			id: 3,
			title: 'Hang Massive',
			artist: 'Mert Abi',
			description: 'Artist',
			image: 'https://i.scdn.co/image/ab67616100005174802686196d39eb0b7b5cd8b1',
			type: 'artist',
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
			artist: 'kraldragon',
		},
		{
			id: 4,
			title: 'Intouchables - Soundtracks OST',
			artist: 'Gökhan Abi',
			description: 'Original Soundtrack',
			image: 'https://i.scdn.co/image/d39397d2f6a1525b3fe90369c89ea2d94aac5714',
			type: 'podcast',
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
			artist: 'kraldragon',
		},
		{
			id: 5,
			title: 'Intouchables - Soundtracks OST',
			artist: 'Mehmet Abi',
			description: 'Original Soundtrack',
			image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
			type: 'album',
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
			artist: 'kraldragon',
		},
	];

	return (
		<div className='flex flex-col gap-y-4'>
			<Section title='Yakınlarda Çalınanlar' more={true} items={items} />
			<Section title='Kaldığın yerden devam et' more={true} items={items} />
			<Section title='En çok dinlediğin mixler' more={true} items={items} />
		</div>
	);
}

export default Home;
