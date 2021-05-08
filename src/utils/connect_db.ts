// Import mongoose
import mongoose from 'mongoose';
import { getEnvs } from './env_vars';
import { Logger } from './logger';

export async function connectDB () {

	Logger("Connecting To Database...");
	
	try {
		const conn = await mongoose.connect(getEnvs().DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});

		Logger(`MongoDB Connected: ${ conn.connection.host }`, 'green');
	} catch (err) {
		// console.error(err);
		Logger("Unable To Connect To MongoDB", 'red');
		process.exit(1);
	};

	return true;
};