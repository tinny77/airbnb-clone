import { Map } from 'react-map-gl';
import { useState } from 'react';

function Mapbox() {
	const [viewport, setViewport] = useState({
		longitude: -0.118,
		latitude: 51.5099,
		zoom: 10,
		width: 600,
		height: 1200,
	});
	return (
		<div
			className="w-full h-screen mt-[90px]"
			style={{ border: 'solid 1px red' }}
		>
			<Map
				mapboxAccessToken={process.env.mapbox_key}
				mapLib={import('mapbox-gl')}
				initialViewState={{ ...viewport }}
				mapStyle="mapbox://styles/tinnydev/clratu7e8007c01pe5h6gbu5s"
				style={{ width: '100%', height: 600, border: 'solid 1px lime' }}
			/>
		</div>
	);
}

export default Mapbox;
