const today = new Date();

const months = [
	"Jan",
	"Feb",
	"March",
	"Apr",
	"June",
	"July",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];
const weekDay = ["Sun", "Mon", "Tue", "Weds", "Thurs", "Fri", "Sat"];

const month = months[today.getMonth()];
const date = today.getDate();
const day = weekDay[today.getDay()];
const year = today.getFullYear();

export {month, date, day, year}