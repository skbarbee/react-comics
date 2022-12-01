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
	console.log("data in patch",data)
	return axios({
		method: 'PATCH',
		url:  apiUrl + '/favorites/' ,
		headers: {
			Authorization: `Token ${user.token}`,
		},
		data : {
			favorites : {
				favorite_authors: [data.favorite_authors],
				favorite_characters: data.favorite_characters,
				favorite_illustrators:data.favorite_illustrators,
				favoirte_publishers: data.favoirte_publishers,


				
			},
			owner: user.id
		}
	})
}