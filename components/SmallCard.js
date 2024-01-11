import Image from 'next/image';
import { useState } from 'react';

function SmallCard({ img, location, distance }) {
	return (
		<div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
			<div className="relative h-16 w-16">
				<ImageWithFallback
					src={img}
					fallbackSrc="/fallback.jpg"
					fill
					className="rounded-lg"
					alt={location}
				/>
			</div>
			<div className="">
				<h2>{location}</h2>
				<h3 className="text-gray-500">{distance}</h3>
			</div>
		</div>
	);
}

const ImageWithFallback = (props) => {
	const { src, fallbackSrc, ...rest } = props;
	const [imgSrc, setImgSrc] = useState(src);

	return (
		<Image
			{...rest}
			src={imgSrc}
			onError={() => {
				setImgSrc(fallbackSrc);
			}}
		/>
	);
};

export default SmallCard;
