import { date, day, month, year } from "../time";

const WeatherLeftDetails = ({ weatherData }) => {
	return (
		<main className="absolute flex flex-col justify-center ml-5 h-full text-white z-50 sm:justify-end sm:pb-28 lg:flex-row lg:items-end lg:pb-40 lg:space-x-4 lg:ml-10 ">
			<p className="text-5xl font-bold pb-1">
				{Math.round(weatherData.main.temp)}
				<span>&#176;</span>C
			</p>
			<div>
				<p className="text-3xl font-semibold pb-1">{weatherData.name}</p>
				<p className="py-1 sm:py-2">{`${day}, ${date} ${month} ${year}`}</p>
			</div>
			<div>
				<img
					src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
					alt=""
				/>
				<p>{weatherData.weather[0].description}</p>
			</div>
		</main>
	);
};

export default WeatherLeftDetails;
