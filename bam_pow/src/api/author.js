import apiUrl from '../apiConfig'
import axios from 'axios'

export const authorCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/authors',
		data: {
			author: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const authorIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/authors',
	})
}

export const authorShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/authors/' + id,
	})
}

export const authorUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/authors/' + id,
		data: {
			author: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const authorDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/authors/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}