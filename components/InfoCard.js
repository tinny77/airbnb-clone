import React, { useState } from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/solid';

function InfoCard({ img, location, title, description, star, price, total }) {
	const [isHeartFilled, setIsHeartFilled] = useState(false);

	const handleHeartIconClick = () => {
		setIsHeartFilled(!isHeartFilled);
	};
	return (
		<div className="grid grid-rows-auto grid-cols-1 sm:grid-rows-1 sm:grid-cols-[190px_1fr] lg:grid-cols-[320px_1fr] mb-10 lg:mt-2 px-6 cursor-pointer first:border-t first:pt-5">
			<div className="relative h-52 w-full mb-4 sm:mb-0 sm:w-48 lg:h-64 lg:w-80">
				<Image
					src={img}
					fill
					style={{ objectFit: 'cover', width: '100%' }}
					className="rounded-xl xl:rounded-2xl"
				/>
			</div>
			<div className="relative flex-col w sm:pl-5">
				<div className="flex justify-between">
					<h4 className="text-xl lg:text-2xl">{title}</h4>
					{isHeartFilled ? (
						<HeartIconFilled
							className="h-7 cursor-pointer"
							onClick={handleHeartIconClick}
						/>
					) : (
						<HeartIcon
							className="h-7 cursor-pointer"
							onClick={handleHeartIconClick}
						/>
					)}
				</div>

				<div className="border-b w-10 pt-2"></div>
				<p className="text-sm pt-2 text-gray-500 flex-grow">{description}</p>

				<div className="flex justify-between items-end pt-6">
					<p className="flex items-center text-xs">
						<StarIcon className="h-5 text-red-400 pr-2" /> {star}
					</p>
					<div>
						<p className="text-lg lg:text-xl font-semibold pb-2">{price}</p>
						<p className="text-right font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoCard;
