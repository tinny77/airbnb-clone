import Image from 'next/image';

function MediumCard({ img, title }) {
	return (
		<div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
			<div className="relative h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80">
				<Image
					src={img}
					className="rounded-xl"
					width="320"
					height="320"
					alt={title}
				/>
			</div>
			<h3 className="text-xl lg:text-2xl mt-3">{title}</h3>
		</div>
	);
}

export default MediumCard;
