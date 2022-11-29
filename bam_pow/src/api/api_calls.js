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

export const postComic = (data) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/comics/',
		api_comicbook: data
	})
}

export const createCharacter = (newCharacter) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/characters/',
		body: JSON.stringify(data)
	})
}
export const createPublisher = (data) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/publishers/',
		data: {
			publisher: data
		}
	})
}

