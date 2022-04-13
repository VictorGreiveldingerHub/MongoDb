import config from 'config';
import connect from './helpers/db_mongo/connect';
import OpenRoutes from './routes/open/OpenRoutes';
import RestrictedRoutes from './routes/restricted/RestrictedRoutes';

import {logger} from './helpers/logger';

import express from 'express';

const PORT = config.get("port") || 8080;

const app = express();


app.listen(PORT, async () => {
    logger.info(`Listening on port ${PORT}`);
    await connect();
    OpenRoutes(app);
});