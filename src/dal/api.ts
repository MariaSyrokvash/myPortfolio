import axios from 'axios';


const instance = axios.create({
	baseURL: 'https://my-node-js-smtp-server.herokuapp.com/',
	// baseURL: 'http://localhost:3010/',
})

export const formAPI = {
	sendMessage(values: any) {
		return instance.post(`sendMessage`, {values})
	}
}