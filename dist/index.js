"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverConfig_1 = __importDefault(require("./config/serverConfig"));
const routes_1 = __importDefault(require("./routes"));
const sampleQueueProducer_1 = __importDefault(require("./producers/sampleQueueProducer"));
const SampleWorker_1 = __importDefault(require("./workers/SampleWorker"));
const bullBoardUiConfig_1 = __importDefault(require("./config/bullBoardUiConfig"));
const app = (0, express_1.default)();
app.use('/api', routes_1.default);
app.use('/ui', bullBoardUiConfig_1.default.getRouter());
app.listen(serverConfig_1.default.PORT, () => {
    console.log(`Server started at PORT: ${serverConfig_1.default.PORT}`);
    console.log(`For the UI, open http://localhost:${serverConfig_1.default.PORT}/ui`);
    (0, SampleWorker_1.default)('SampleQueue');
    (0, sampleQueueProducer_1.default)('SampleJob', {
        name: 'Ayushmaan Paul',
        college: 'TECB',
        branch: 'CSE',
        location: 'Habra',
    });
    (0, sampleQueueProducer_1.default)('SampleJob', {
        name: 'Phil Foden',
        college: 'Stockport University',
        branch: 'Football',
        location: 'Manchester',
    });
});
