import apiUrl from '../apiConfig'
import axios from 'axios'

export const illustratorCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/illustrators',
		data: {
			illustrator: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const illustratorIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/illustrators',
	})
}

export const illustratorShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/illustrators/' + id,
	})
}

export const illustratorUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/illustrators/' + id,
		data: {
			illustrator: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const illustratorDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/illustrators/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}