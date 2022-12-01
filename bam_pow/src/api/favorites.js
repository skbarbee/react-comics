import apiUrl from '../apiConfig'
import axios from 'axios'



export const favoritesIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/favorites/',
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}

