import apiUrl from '../apiConfig'
import axios from 'axios'



export const favoritesIndex = (data, user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/favorites/',
		
	})
}

