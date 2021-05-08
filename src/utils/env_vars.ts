// Import packages
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import path from 'path';

export function getEnvs (key: string = '') {

	// Import env data
	const env_file = process.env.NODE_ENV === 'production' ? readFileSync(path.join(__dirname, '..', '..', '.env')) : readFileSync(path.join(__dirname, '..', '..', '.env_dev'));

	const env_vars = dotenv.parse(env_file);

	// Return requested key
	if (key) {
		Object.keys(Object(env_vars)).forEach((element, i) => {
			if (key === element) {
				return Object.values(Object(env_vars))[i]
			}
		});
	} else {
		return Object(env_vars);
	};
} 