import {Express, Request, Response} from 'express';
import {logger} from '../../helpers/logger';

function OpenRoutes(app: Express){
    app.get('/check', (req: Request, res: Response) => {
        logger.info(req);
        logger.info(res);
        res.sendStatus(200);
    });
}

export default OpenRoutes;