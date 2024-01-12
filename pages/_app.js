import '@/styles/globals.css';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import Layout from '@/components/Layout';

const progress = new ProgressBar({
	size: 4,
	color: '#fe595e',
	className: 'z-100 progressbar',
	delay: 500,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
