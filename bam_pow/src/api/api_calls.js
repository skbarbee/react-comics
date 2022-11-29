import apiUrl from '../apiConfig'
import axios from 'axios'



export const getAuthors = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/authors/',
	})
}

export const authorCreate = (data) => {
	console.log('this is the data for create author', data.first_name, data.last_name)
	return axios({
		method: 'post',
		url: apiUrl + '/authors/',
		data: {
			author:
			{first_name: data.first_name,
			last_name: data.last_name}
				
		
		},
		headers: {
			'Content-Type' : 'application/json'
		},
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

export const createCharacter = (data) => {
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

