import Config from "./Config.js"

class RestClient {
	GetAbout(callback) {
		fetch(Config.ApiEndPointRoot + Config.ApiEndPoints.About)
			.then((response) => response.json())
			.then((responseJson) => {
				callback(responseJson);
			});
	}
	GetFeatured(callback) {
		fetch(Config.ApiEndPointRoot + Config.ApiEndPoints.Featured)
			.then((response) => response.json())
			.then((responseJson) => {
				callback(responseJson);
			});
	}
	GetExperience(callback) {
		fetch(Config.ApiEndPointRoot + Config.ApiEndPoints.Experience)
			.then((response) => response.json())
			.then((responseJson) => {
				callback(responseJson);
			});
	}
	GetEducation(callback) {
		fetch(Config.ApiEndPointRoot + Config.ApiEndPoints.Education)
			.then((response) => response.json())
			.then((responseJson) => {
				callback(responseJson);
			});
	}
	GetPortfolio(callback) {
		fetch(Config.ApiEndPointRoot + Config.ApiEndPoints.Portfolio)
			.then((response) => response.json())
			.then((responseJson) => {
				callback(responseJson);
			});
	}
	GetPortfolioItem(callback, id) {
		fetch(Config.ApiEndPointRoot + Config.ApiEndPoints.Portfolio + "/" + id)
			.then((response) => response.json())
			.then((responseJson) => {
				callback(responseJson);
			});
	}
}

export default RestClient;