// Import packages
import Listr from 'listr';
import { connectDB } from './connect_db';
import { startApp, setRoutes, setStaticFolder } from './app';
import execa from 'execa';

export async function runApp() {
	
	// Set Tasks
	const tasks = new Listr(
		[
			{
				title: 'Starting Application...',
				task: () => {
					return true;
				},
			},
			{
				title: 'Setting Up Routes...',
				task: () => setRoutes(),
			},
			{
				title: 'Setting Views And Static Files...',
				task: () => setStaticFolder(),
			},
			{
				title: 'Connecting To Database...',
				task: () => connectDB(),
			},
			{
				title: 'Starting Application...',
				task: () => startApp(),
			},
		]
	);

	await tasks.run();

	return true;
}