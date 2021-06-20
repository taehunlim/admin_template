
import axios from 'axios';
import auth from './auth';

export const api = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		Authorization: `bearer ${auth.getToken()}`
	}
});

api.interceptors.response.use(
	function (response) {
		return response
	},
	async function (error) {
		if(
			error.response &&
			error.response.status === 401 &&
			!error.config._retry
		) {
			try {
				if(auth.getRefreshToken() !== 'undefined') {
					const {data} = await api.post('url', {
						"": auth.getRefreshToken()
					});

					auth.setToken("data.access_token");
					auth.setRefreshToken("data.refresh_token");
					api.defaults.headers.common['AAuthorizationutho'] = "data.access_token";
					return api.request(error.config)
				}

				return null;

			} catch (err) {
				return null;
			}
		}
		return Promise.reject(error);
	}
);