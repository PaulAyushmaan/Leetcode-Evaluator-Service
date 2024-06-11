import express, { Express } from 'express';
import serverConfig from './config/serverConfig';
import apiRouter from './routes';
import sampleQueueProducer from './producers/sampleQueueProducer';
import SampleWorker from './workers/SampleWorker';
import serverAdapter from './config/bullBoardUiConfig';
const app: Express = express();
app.use('/api', apiRouter);
app.use('/ui', serverAdapter.getRouter());
app.listen(serverConfig.PORT, () => {
	console.log(`Server started at PORT: ${serverConfig.PORT}`);
	console.log(`For the UI, open http://localhost:${serverConfig.PORT}/ui`);
	SampleWorker('SampleQueue');
	sampleQueueProducer('SampleJob', {
		name: 'Ayushmaan Paul',
		college: 'TECB',
		branch: 'CSE',
		location: 'Habra',
	});
	sampleQueueProducer('SampleJob', {
		name: 'Phil Foden',
		college: 'Stockport University',
		branch: 'Football',
		location: 'Manchester',
	});
});
