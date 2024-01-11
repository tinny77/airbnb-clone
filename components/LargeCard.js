import Image from 'next/image';

function LargeCard({ img, title, description, buttonText }) {
	return (
		<section className="pt-6 relative py-16 cusror-pointer">
			<div className="relative h-96 min-w-[20px]">
				<Image
					src={img}
					fill
					style={{ objectFit: 'cover' }}
					className="rounded-2xl"
				/>
			</div>
			<div className="absolute top-24 left-12">
				<h3 className="text-3xl lg:text-4xl mb-3 w-64">{title}</h3>
				<p>{description}</p>
				<button
					className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5
                    "
				>
					{buttonText}
				</button>
			</div>
		</section>
	);
}

export default LargeCard;
