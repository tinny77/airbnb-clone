import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
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

function Header({ placeholder = 'Start your search' }) {
	const router = useRouter();
	const { location } = router.query;

	const [searchInput, setSearchInput] = useState('');
	const [openedCalendar, setOpenedCalendar] = useState(false);

	const inputRef = useRef(null);
	const dropdownRef = useRef(null);
	const [autocompleteResults, setAutocompleteResults] = useState([]);
	const famousCities = [
		'Amsterdam',
		'Athens',
		'Auckland',
		'Bangkok',
		'Barcelona',
		'Beijing',
		'Berlin',
		'Brisbane',
		'Buenos Aires',
		'Budapest',
		'Cairo',
		'Cape Town',
		'Copenhagen',
		'Dubai',
		'Dublin',
		'Edinburgh',
		'Florence',
		'Helsinki',
		'Hong Kong',
		'Istanbul',
		'Johannesburg',
		'Kyoto',
		'Lisbon',
		'London',
		'Madrid',
		'Mexico City',
		'Moscow',
		'Mumbai',
		'Munich',
		'Nairobi',
		'New York',
		'Oslo',
		'Paris',
		'Prague',
		'Rio de Janeiro',
		'Rome',
		'Seoul',
		'Singapore',
		'Stockholm',
		'Sydney',
		'Tokyo',
		'Toronto',
		'Vancouver',
		'Vienna',
		'Warsaw',
		'Wellington',
		'Zurich',
	];
	useEffect(() => {
		// If the input element exists, adjust the top position of the autocomplete dropdown
		if (inputRef.current && dropdownRef.current) {
			const inputHeight = inputRef.current.offsetHeight;
			dropdownRef.current.style.top = `${inputHeight}px`;
		}
	}, [autocompleteResults]);

	const handleSearchInput = (e) => {
		const inputValue = e.target.value;
		setSearchInput(inputValue);
		const filteredCities = famousCities.filter((city) =>
			city.toLowerCase().includes(inputValue.toLowerCase())
		);
		setAutocompleteResults(filteredCities);
		inputValue === '' ? setOpenedCalendar(false) : setOpenedCalendar(true);
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
		setOpenedCalendar(false);
	};
	const search = (e) => {
		e.preventDefault();
		setOpenedCalendar(false);
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
	const handleAutocompleteSelect = (selectedCity) => {
		setSearchInput(selectedCity);
		setAutocompleteResults([]);
	};

	useEffect(() => {
		location && setSearchInput(location);
	}, []);
	const headerRef = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				headerRef.current &&
				!headerRef.current.contains(event.target) &&
				event.target !== inputRef.current
			) {
				setOpenedCalendar(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);
	return (
		<header
			className="sticky top-0 z-50 grid grid-cols-[60px_minmax(200px,_1fr)_180px] md:grid-cols-[170px_minmax(200px,_1fr)_195px] lg:grid-cols-[170px_minmax(200px,_1fr)_300px] bg-white shadow-md p-5 md:px-10"
			ref={headerRef}
		>
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
					className="hidden md:inline cursor-pointer"
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
					className="md:hidden cursor-pointer"
				/>
			</div>
			<form
				className="flex items-center border rounded-full py-2 shadow md:shadow-md pl-4 relative"
				onSubmit={search}
			>
				<input
					className="flex-grow  bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
					type="text"
					placeholder={placeholder}
					value={searchInput}
					onChange={handleSearchInput}
					onClick={() => setOpenedCalendar(true)}
					ref={inputRef}
				/>
				<button className="shrink-0 md:inline-flex pr-2" type="submit">
					<MagnifyingGlassCircleIcon
						className="h-8 text-red-400 cursor-pointer"
						onClick={search}
					/>
				</button>
				{/* Autocomplete dropdown */}
				{autocompleteResults.length > 0 && searchInput.length > 2 && (
					<div
						ref={dropdownRef}
						className="absolute mt-10 -ml-4 bg-white w-full border border-gray-200 rounded-lg text-sm overflow-auto max-h-40 z-50"
					>
						{autocompleteResults.map((result) => (
							<div
								key={result}
								className="px-2 py-1 cursor-pointer hover:bg-gray-200 odd:bg-gray-100"
								onClick={() => handleAutocompleteSelect(result)}
							>
								{result}
							</div>
						))}
					</div>
				)}
			</form>

			<div className="flex items-center space-x-4 justify-end text-gray-500">
				<p className="hidden lg:inline text-sm">Become a host</p>
				<GlobeAltIcon className="h-6" />
				<div className="flex items-center space-x-2 border p-2 rounded-full">
					<Bars3Icon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>

			<div
				className={`flex flex-col col-span-4 mx-auto pt-6 ${
					!openedCalendar && 'hidden'
				} ${
					autocompleteResults.length > 0 &&
					searchInput.length > 2 &&
					'opacity-90 blur-sm transform transition duration-200 pointer-events-none'
				}`}
			>
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
		</header>
	);
}

export default Header;
