import Head from 'next/head';
import Header from './Header';

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Airbnb clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{children}
		</>
	);
}

export default Layout;
