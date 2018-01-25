import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);

	app.use(bodyParser.json());
	app.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	await app.listen(3000);
}
bootstrap();
