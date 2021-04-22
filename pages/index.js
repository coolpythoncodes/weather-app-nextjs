import Head from "next/head";
import { SearchIcon } from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import WeatherLeftDetails from "../components/WeatherLeftDetails";
import WeatherRightDetails from "../components/WeatherRightDetails";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

export default function Home() {
	const searchInput = useRef(null);
	const [weatherData, setWeatherData] = useState('');

	// const location = searchInput.current.value;

	const fetchWeatherData = async (location) => {
		const rawData = await axios.get(
			`${baseUrl}?q=${location}&units=metric&appid=${process.env.API_KEY}`
		);
		setWeatherData(rawData.data);
		console.log(rawData.data);
	};

	const formSubmit = (e) => {
		e.preventDefault();
		// console.log(weatherData)
		fetchWeatherData(searchInput.current.value);
	};

	// useEffect(() => {

	// const fetchWeatherData = async () => {
	//   const rawData = axios.get(
	//     		`${baseUrl}?q=${searchInput.current.value}&units=metric&appid=${process.env.API_KEY}`
	//     	);
	//     	const weatherData = await (await rawData).data;
	//       console.log(weatherData)

	// }

	//   fetchWeatherData()
	// }, [searchInput.current.value]);

	return (
		<div className="flex flex-col h-screen sm:flex-row">
			<Head>
				<title>Weather App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Left */}
			<div className="relative flex-1 bg-hot-ballon bg-no-repeat bg-top-4 bg-cover">
				<div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-70 z-0"></div>
				{/* WeatherLeftDetails */}
				{weatherData && <WeatherLeftDetails weatherData={weatherData}/>}
			</div>

			{/* Right */}
			<div className="flex-1 bg-primary">
				<form
					className="flex w-56 py-2 px-2 items-center ml-5 mt-10 bg-secondary shadow:lg"
					onSubmit={formSubmit}
				>
					<input
						className=" bg-transparent outline-none text-white"
						type="text"
						name=""
						id=""
						placeholder="Enter a Location"
						ref={searchInput}
						required
					/>
					<button className="ml-auto focus:outline-none" type="submit">
						<SearchIcon className="h-6 text-white" />
					</button>
				</form>

				<ul className="ml-5 my-4">
					<li className="text-primary">Lagos</li>
					<li className="my-1 text-primary">Lagos</li>
					<li className="text-primary">Lagos</li>
				</ul>

				<div className="ml-5">
					<h1 className="text-white text-3xl pt-4 pb-4">Weather Details</h1>
					{/* WeatherRightDetails */}
					{weatherData && <WeatherRightDetails weatherData={weatherData}/>}
				</div>
			</div>
		</div>
	);
}

// export async function getStaticProps(context) {
// 	const rawData = axios.get(
// 		`${baseUrl}?q=${context.query.location}&units=metric&appid=${process.env.API_KEY}`
// 	);
// 	const weatherData = await (await rawData).data;

// 	return {
// 		props: { weatherData },
// 	};
// }
