import axios from 'axios';
import { LocalStorageService } from '../local-storage';

const localStorageService = new LocalStorageService();
export class HttpService {
	async getHeaders(): Promise<Record<string, string>> {
		let headers: Record<string, string> = {};

		const token = await localStorageService.fetch('authToken');
		if (token && typeof token === 'string') headers.Authorization = token;
		headers['Content-Type'] = 'application/json';
		return headers;
	}

	getTimeOutDuration() {
		const timeOutDuration = 15000;
		return timeOutDuration;
	}

	async post(url: string, data: isTypeObject): Promise<any> {
		return axios.post(url, data);
	}
	async get(url: string): Promise<any> {
		const headers: Record<string, string> = await this.getHeaders();
		return axios.get(url, { headers, timeout: this.getTimeOutDuration() });
	}
}