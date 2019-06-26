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
}

export default RestClient;