import Image from 'next/image';

function HeaderBanner() {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
			<Image
				src="/banner.webp"
				fill
				style={{ objectFit: 'cover', objectPosition: 'bottom' }}
			/>
			<div className="absolute grid grid-col w-full h-full place-content-center text-center">
				<p className="text-sm md:text-base">Not sure where to go? Perfect.</p>
				<button className="inline-block mx-auto text-purple-500 bg-white px-6 py-2 lg:py-3  mt-2 shadow-md rounded-full font-semibold hover:font-bold hover:shadow-xl active:scale-110 hover:scale-110 transition duration-150 cursor-pointer">
					I&apos;m flexible
				</button>
			</div>
		</div>
	);
}

export default HeaderBanner;
