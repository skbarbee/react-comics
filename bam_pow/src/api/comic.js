import apiUrl from '../apiConfig'
import axios from 'axios'

export const comicCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/comics',
		data: {
			comic: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const comicIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/comics',
	})
}

export const comicShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/comics/' + id,
	})
}

export const comicUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/comics/' + id,
		data: {
			comic: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const comicDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/comics/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}