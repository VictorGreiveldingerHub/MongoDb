import mongoose from 'mongoose';
import config from 'config';

import { logger } from '../../helpers/logger';

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/restaurants");
        logger.info("Connection à la BDD ok");
    } catch (error) {
        logger.info(error);
    }
}

export default connect;