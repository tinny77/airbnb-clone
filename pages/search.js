import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { format, parseISO, isSameDay } from 'date-fns';

function BoldText({ children }) {
	return <strong style={{ fontWeight: 'bold' }}>{children}</strong>;
}

function Search() {
	const router = useRouter();
	const { location, guests, start, end } = router.query;
	const rangeFrom = start ? format(parseISO(start), 'MMMM dd yyyy') : '';
	const rangeTo = end ? format(parseISO(end), 'MMMM dd yyyy') : '';

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
						<p className="search-small-top-button">Cancellation flexibility</p>
						<p className="search-small-top-button">Type of place</p>
						<p className="search-small-top-button">Price</p>
						<p className="search-small-top-button">Rooms and beds</p>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default Search;
