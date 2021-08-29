/**
 * @file contains axios setup to reduce redundancy
*/

import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://api.hatchways.io/',
});