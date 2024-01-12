/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'links.papareact.com',
			},
		],
	},
	env: {
		mapbox_key:
			'pk.eyJ1IjoidGlubnlkZXYiLCJhIjoiY2xyYXRvd3R5MGZtdDJqcGpkaWo0eGc2NyJ9.aoQozLl6pOQFRlLxBjdr4g',
	},
};

module.exports = nextConfig;
