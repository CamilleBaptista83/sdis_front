import axios from "axios";
import { store } from "../../state/store";

let baseUrl = process.env.REACT_APP_URL_BACK;
let frontUrl = process.env.REACT_APP_URL_FRONT;

const CustomAxios = axios.create({});

CustomAxios.interceptors.request.use(
	(request) => {
		let token = localStorage.getItem("accessToken");
		request.headers = {
			Authorization: `Bearer ${token}`,
		};
		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);
CustomAxios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const originalRequest = error.config;
		console.log("error Custom Axios", error.response);
		const status = error.response ? error.response.status : null;
		if (status === 422 && localStorage.getItem("refreshToken") !== null) {
			return axios
				.get(baseUrl + routesApi.GET_REFRESH, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							"refreshToken"
						)}`,
					},
				})
				.then((response) => {
					console.log("refresh token ok");
					localStorage.setItem(
						"accessToken",
						response.data.access_token
					);
					localStorage.setItem(
						"refreshToken",
						response.data.refresh_token
					);
					store.dispatch({
						type: "getLogged",
						payload: true,
					});
					return CustomAxios(originalRequest);
				})
				.catch((error) => {
					console.log("refresh token error", error.response);
					localStorage.removeItem("accessToken");
					localStorage.removeItem("refreshToken");
					store.dispatch({
						type: "getLogged",
						payload: false,
					});
					//window.location.href = frontUrl;
				});
		}
		return Promise.resolve(error);
	}
);

export default CustomAxios;
