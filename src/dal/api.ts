import axios from 'axios';


const instance = axios.create({
	baseURL: 'https://smpt-server-nodejs.herokuapp.com/',
})

export const formAPI = {
	sendMessage(values: any) {
		return instance.post(`sendMessage`, {values})
	}
}