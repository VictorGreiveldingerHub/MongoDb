import pino from 'pino';

export const logger = pino({
    name: 'mongoDB_application',
    level: 'debug'
});