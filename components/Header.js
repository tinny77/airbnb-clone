import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
	GlobeAltIcon,
	Bars3Icon,
	UserIcon,
	UsersIcon,
	UserCircleIcon,
	MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/solid';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function Header() {
	const router = useRouter();
	const [searchInput, setSearchInput] = useState('');
	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const dateSelectionRange = {
		startDate,
		endDate,
		key: 'day',
	};
	const handleDateSelection = (range) => {
		setStartDate(range.day.startDate);
		setEndDate(range.day.endDate);
	};
	const [numOfGuests, setNumOfGuests] = useState(1);
	const handleGuestsNum = (e) => {
		setNumOfGuests(e.target.value);
	};
	const resetInputs = () => {
		setSearchInput('');
		setNumOfGuests(1);
	};
	const search = () => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				guests: numOfGuests,
				start: startDate.toISOString(),
				end: endDate.toISOString(),
			},
		});
		//resetInputs();
	};
	return (
		<header className="sticky top-0 z-50 grid grid-cols-[60px_minmax(200px,_1fr)_180px] md:grid-cols-[170px_minmax(200px,_1fr)_195px] lg:grid-cols-[170px_minmax(200px,_1fr)_300px] bg-white shadow-md p-5 md:px-10">
			<div
				className="relative flex items-center h-10 cursor-pointer my-auto"
				onClick={() => router.push('/')}
			>
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
					value={searchInput}
					onChange={handleSearchInput}
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
			</div>
			{searchInput && (
				<div className="flex flex-col col-span-4 mx-auto pt-6">
					<DateRangePicker
						ranges={[dateSelectionRange]}
						onChange={handleDateSelection}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
					/>
					<div className="pt-4 flex items-center border-t">
						<h2 className="text-base lg:text-lg font-semibold flex-grow">
							Number of Guests
						</h2>
						{Number(numOfGuests) === 1 ? (
							<UserIcon className="h-5" />
						) : (
							<UsersIcon className="h-5" />
						)}
						<input
							type="number"
							className="w-12 pl-2 text-lg outline-none text-red-400"
							max="50"
							min="1"
							value={numOfGuests}
							onChange={handleGuestsNum}
						/>
					</div>
					<div className="flex mt-4 pt-3 border-t">
						<button className="flex-grow text-gray-500" onClick={resetInputs}>
							Cancel
						</button>
						<button className="flex-grow text-red-400" onClick={search}>
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
