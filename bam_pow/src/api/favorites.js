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

export const favoritesPost = (data,user) => {
	return axios({
		method: 'PATCH',
		url:  apiUrl + '/favorites/',
		headers: {
			Authorization: `Token ${user.token}`,
		},
		data : {
			favorites : {
				favorite: data.favorite
			},
		}
	})
}