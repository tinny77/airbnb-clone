import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { format, parseISO, isSameDay } from 'date-fns';
import InfoCard from '@/components/InfoCard';
import { useEffect } from 'react';

function BoldText({ children }) {
	return <strong style={{ fontWeight: 'bold' }}>{children}</strong>;
}

function Search({ searchResults }) {
	const router = useRouter();
	const { location, guests, start, end } = router.query;
	const rangeFrom = start ? format(parseISO(start), 'MMMM dd yyyy') : '';
	const rangeTo = end ? format(parseISO(end), 'MMMM dd yyyy') : '';

	useEffect(() => {
		if (!location) {
			router.replace('/', undefined, { shallow: true });
		}
	}, [location, router]);

	let range = '';

	if (isSameDay(start, end)) {
		range = (
			<span>
				for <BoldText>{rangeFrom}</BoldText>
			</span>
		);
	} else {
		range = (
			<span>
				from <BoldText>{rangeFrom}</BoldText> to <BoldText>{rangeTo}</BoldText>
			</span>
		);
	}

	return (
		<>
			<div className="relative">
				<section className="__xl:pr-96">
					<main className="flex">
						<section className="flex-grow px-6 pt-8">
							<p className="text-xs ">
								300+ Stays for <strong>{guests}</strong> guest
								{Number(guests) > 1 && 's'} {range}
							</p>
							<h1 className="text-2xl lg:text-3xl font-semibold mb-6 mt-2">
								Stays in {location}
							</h1>
							<div className="hidden md:inline-flex space-x-2 lg_space-x-3 mb-5 whitespace-nowrap text-gray-800">
								<p className="search-small-top-button">
									Cancellation flexibility
								</p>
								<p className="search-small-top-button">Type of place</p>
								<p className="search-small-top-button">Price</p>
								<p className="search-small-top-button">Rooms and beds</p>
							</div>
						</section>
					</main>

					<div className="flex flex-col">
						{searchResults?.map((item) => (
							<InfoCard {...item} key={item.img} />
						))}
					</div>
				</section>
				{/* <section className="hidden md:block md:w-96 md:fixed md:h-screen md:top-0 md:right-0 z-0">
					<Mapbox />
				</section> */}
			</div>

			<Footer />
		</>
	);
}

export default Search;

export async function getServerSideProps() {
	const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
		(res) => res.json()
	);
	return {
		props: {
			searchResults,
		},
	};
}
