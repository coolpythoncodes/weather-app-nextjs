import Head from "next/head";
import { SearchIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import axios from "axios";
import WeatherLeftDetails from "../components/WeatherLeftDetails";
import WeatherRightDetails from "../components/WeatherRightDetails";
import LocationItem from "../components/LocationItem";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
// const history = [];


export default function Home() {
	const searchInput = useRef(null);
	const [weatherData, setWeatherData] = useState("");
	const [errorOcurred, setErrorOcurred] = useState(false);
	const [history, setHistory] = useState([]);

	const addHistory = (weather) => {
		if (weather && !history.includes(weather.name)) {
			if(history.length < 3){
				setHistory([...history, weather.name])
			}else{
				history.shift()
				setHistory([...history, weather.name])
			}
		}
	}

	const fetchWeatherData = async (location) => {
		try {
			const rawData = await axios.get(
				`${baseUrl}?q=${location}&units=metric&appid=${process.env.API_KEY}`
			);
			setWeatherData(rawData.data);
			setErrorOcurred(false);
			addHistory(rawData.data)
			// console.log(history)
		} catch (error) {
			if (error) {
				setErrorOcurred(true);
				setWeatherData();
			}
		}
	};

	const formSubmit = (e) => {
		e.preventDefault();

		fetchWeatherData(searchInput.current.value);
		searchInput.current.value = "";
	};

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
				{weatherData && (
					<WeatherLeftDetails
						weatherData={weatherData}
						errorOcurred={errorOcurred}
					/>
				)}
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
					{
						history.map((item,index) => <LocationItem key={index} fetchWeatherData={fetchWeatherData} item={item} />)
					}
					{/* <li className="text-primary">Lagos</li>
					<li className="my-1 text-primary">Lagos</li>
					<li className="text-primary">Lagos</li> */}
				</ul>

				<div className="ml-5">
					<h1 className="text-white text-3xl pt-4 pb-4">
						{errorOcurred ? "Something went wrong" : "Weather Details"}
					</h1>
					{/* WeatherRightDetails */}
					{weatherData && (
						<WeatherRightDetails
							weatherData={weatherData}
							errorOcurred={errorOcurred}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
