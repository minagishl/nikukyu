'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type ImageList = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

const images: ImageList[] = [
	{
		src: '/images/nikukyu_cha.png',
		alt: 'Nikukyu Cha',
		width: 200,
		height: 200,
	},
	{
		src: '/images/nikukyu_hai.png',
		alt: 'Nikukyu Hai',
		width: 200,
		height: 200,
	},
	{
		src: '/images/nikukyu_kuro.png',
		alt: 'Nikukyu Kuro',
		width: 200,
		height: 200,
	},
	{
		src: '/images/nikukyu_mike.png',
		alt: 'Nikukyu Mike',
		width: 200,
		height: 200,
	},
	{
		src: '/images/nikukyu_sabatora.png',
		alt: 'Nikukyu Sabatora',
		width: 200,
		height: 200,
	},
	{
		src: '/images/nikukyu_shiro.png',
		alt: 'Nikukyu Shiro',
		width: 200,
		height: 200,
	},
	{
		src: '/images/nikukyu_shirocha.png',
		alt: 'Nikukyu Shirocha',
		width: 200,
		height: 200,
	},
	{
		src: '/images/nikukyu_shirokuro.png',
		alt: 'Nikukyu Shirokuro',
		width: 200,
		height: 200,
	},
	{
		src: '/images/nikukyu_tora.png',
		alt: 'Nikukyu Tora',
		width: 200,
		height: 200,
	},
];

export default function Home() {
	const [randomTextImage, setRandomTextImage] = useState(0);
	const [randomIndex, setRandomIndex] = useState(0);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		setRandomIndex(Math.floor(Math.random() * (images.length - 1)) + 1);
	}, []);

	function handleClick() {
		setIsClicked(true);
		setRandomTextImage(Math.floor(Math.random() * 12) + 1);
		console.log('Clicked');
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-10 space-y-5'>
			{!isClicked ? (
				<Image
					src='/images/text/text_default.png'
					alt='Text'
					width={500}
					height={130}
					className='pointer-events-none select-none'
				/>
			) : (
				<Image
					src={`/images/text/text_${randomTextImage}.png`}
					alt='Text'
					width={500}
					height={130}
					className='flex pointer-events-none select-none'
				/>
			)}
			<button className='cursor-pointer' onClick={handleClick}>
				{randomIndex !== 0 && (
					<div className='px-20'>
						<Image
							src={images[randomIndex].src}
							alt={images[randomIndex].alt}
							width={images[randomIndex].width}
							height={images[randomIndex].height}
							className='pointer-events-none select-none'
						/>
					</div>
				)}
			</button>
		</main>
	);
}
