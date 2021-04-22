const WeatherRightDetails = ({weatherData}) => {
	return (
		<div className="sm:mt-8 w-64">
			<div className="flex justify-between">
				<p className="flex-1 text-primary ">Cloudy</p>
				<p className="flex-1 pl-28 text-secondary ">
					{weatherData.clouds.all}%
				</p>
			</div>
			<div className="flex py-2 justify-between">
				<p className="flex-1 text-primary ">Humidity</p>
				<p className="flex-1 pl-28 text-secondary ">
					{weatherData.main.humidity}%
				</p>
			</div>
			<div className="flex justify-between">
				<p className="flex-1 text-primary">Wind</p>
				<p className="flex-1 pl-28 text-secondary ">
					{weatherData.wind.speed}m/s
				</p>
			</div>
		</div>
	);
};

export default WeatherRightDetails;
