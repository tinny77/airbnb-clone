import Image from 'next/image';
import {
	GlobeAltIcon,
	Bars3Icon,
	UserIcon,
	UserCircleIcon,
	MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/solid';

function Header() {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-[60px_minmax(200px,_1fr)_180px] md:grid-cols-[170px_minmax(200px,_1fr)_195px] lg:grid-cols-[170px_minmax(200px,_1fr)_300px] bg-white shadow-md p-5 md:px-10">
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="/logo.png"
					alt="Airbnb"
					style={{
						objectFit: 'contain',
						objectPosition: 'left',
					}}
					fill
					className="hidden md:inline"
				/>
				<Image
					src="/logo-sm.png"
					alt="Airbnb"
					style={{
						objectFit: 'contain',
						objectPosition: 'left',
					}}
					width={37}
					height={40}
					className="md:hidden"
				/>
			</div>
			<div className="flex items-center border rounded-full py-2 shadow md:shadow-md pl-4">
				<input
					className="flex-grow  bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
					type="text"
					placeholder="Start your search"
				/>
				<span className="shrink-0 md:inline-flex pr-2">
					<MagnifyingGlassCircleIcon className="h-8 text-red-400 cursor-pointer" />
				</span>
			</div>
			<div className="flex items-center space-x-4 justify-end text-gray-500">
				<p className="hidden lg:inline text-sm">Become a host</p>
				<GlobeAltIcon className="h-6" />
				<div className="flex items-center space-x-2 border p-2 rounded-full">
					<Bars3Icon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
				<UserIcon className="h-6" />
			</div>
		</header>
	);
}

export default Header;
