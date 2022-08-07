export const timestampToDate = (timestamp: number) => {
	const currentTime = Date.now();
	const date = getDate(timestamp);
	const isTodayPost = getDate(currentTime) === date;
	if (isTodayPost) return getTime(timestamp);
	else return date;
};

const getDate = (timestamp: number) => {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = ("0" + (date.getMonth() + 1)).substr(-2);
	const day = ("0" + date.getDate()).substr(-2);
	return year + "-" + month + "-" + day;
};
const getTime = (timestamp: number) => {
	const date = new Date(timestamp);
	const hour = ("0" + date.getHours()).substr(-2);
	const minutes = ("0" + date.getMinutes()).substr(-2);
	const seconds = ("0" + date.getSeconds()).substr(-2);
	return hour + ":" + minutes + ":" + seconds;
};
