// Import packages
import chalk from 'chalk';

export function Logger(text: string, color: any = 'yellow') {
	const obj = {
		yellow: chalk.yellow.bold,
		red: chalk.red.bold,
		green: chalk.green.bold,
	};

	console.log(Object(obj)[color](text));
	
	return true;
}
