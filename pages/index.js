import { Inter } from 'next/font/google';
import HeaderBanner from '@/components/HeaderBanner';
import SmallCard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ exploreData, cardsData }) {
	return (
		<>
			<HeaderBanner />

			<main className="app-container px-4 md:px-8">
				<section className="pt-6">
					<h2 className="text-3xl lg:text-4xl font-semibold pb-5 mt-2">
						Explore Nearby
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
						{exploreData?.map((item) => (
							<SmallCard {...item} key={item.img} />
						))}
					</div>
				</section>

				<section className="pt-6">
					<h2 className="text-3xl lg:text-4xl font-semibold pb-5 mt-4">
						Live Anywhere
					</h2>
					<div className="w-100 overflow-hidden overflow-x-scroll no-scrollbar flex space-x-3  p-3 -ml-3">
						{cardsData?.map((item) => (
							<MediumCard {...item} key={item.img} />
						))}
					</div>
				</section>

				<LargeCard
					img="/large-card.webp"
					title="The Greatest Outdoors"
					description="Wishlist curated by Airbnb"
					buttonText="Get Inspired"
				/>
			</main>

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	/* Explore Nearby section */
	const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
		(res) => res.json()
	);
	/* Live Anywhere section */
	const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
		(res) => res.json()
	);

	return {
		props: { exploreData, cardsData },
	};
}
