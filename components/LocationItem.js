const LocationItem = ({ item, fetchWeatherData }) => {
	return <li  onClick={() => fetchWeatherData(item)} className="my-1 text-primary cursor-pointer">{item}</li>;
};

export default LocationItem;
