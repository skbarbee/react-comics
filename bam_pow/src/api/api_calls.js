import apiUrl from '../apiConfig'
import axios from 'axios'


export const getAuthors = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/authors/',
	})
}

export const authorCreate = (data) => {
	console.log('this is the data',JSON.stringify(data))
	return axios({
		method: 'POST',
		url: apiUrl + '/authors/',
		data: {
			author: JSON.stringify(data),
		},
		// headers: {
		// 	Authorization: `Token token=${user.token}`,
		// },
	})
}
export const getIllustrators = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/illustrators/',
	})
}
export const getCharacters = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/characters/',
	})
}
export const getPublishers = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/publishers/',
	})
}
export const getAllComics = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/comics/',
	})
}

export const createCharacter = (newCharacter) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/add-character',
		data: {
			character: newCharacter
		}
	})
}