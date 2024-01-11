import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';
import HeaderBanner from '@/components/HeaderBanner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>Airbnb clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<HeaderBanner />
		</div>
	);
}
