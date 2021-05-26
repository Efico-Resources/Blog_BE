// Import packages
import express from 'express';
import terminalLink from 'terminal-link';
const app = express();
import chalk from 'chalk';
import { Logger } from './logger';
import path from 'path';
import { json, urlencoded } from 'body-parser';

// Import routes
const authRoutes = require('../routes/api/authRoutes');
const postRoutes = require('../routes/api/postRoutes');

// Set Port
const PORT = process.env.PORT || 3000;

/**
 * Initiate application
 */
export function startApp() {
	
	// Set Greeting And Start App
	if (process.env.NODE_ENV === "production") {
		const greeting = "Application Started At PORT " + PORT + " in " + process.env.NODE_ENV + " Mode";

		// Start app
		app.listen(PORT, () => {
			Logger(greeting, 'green');
		});
	} else {
		const greeting = "Application Started At PORT " + PORT + "\nApplication can be found at " + terminalLink(chalk.yellow.bold('http://localhost:' + PORT), 'http://localhost:' + PORT);

		// Start app
		app.listen(PORT, () => {
			Logger(greeting, 'green');
		});
	};
}

/**
 * Set up routes and 404
 */
export function setRoutes() {

	app.use(express.json());
	app.use(urlencoded({ extended: true }));
	
	// Mount routes
	app.use('/', authRoutes);
	app.use('/', postRoutes);

	// Handle 404
	app.use('*', (req: any, res: any) => {
		res.status(404).json({
			message: "404 | Not Found"
		});
	});
}

/**
 * Create Public folder in compiled code
 */
export function setStaticFolder() {
	// Set static files
	app.use(express.static(path.join(__dirname, '..', '..','dist', 'public')));
}