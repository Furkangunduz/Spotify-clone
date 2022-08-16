import React from 'react';

function Title({ title, more = false }) {
	return (
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
	);
}

export default Title;
