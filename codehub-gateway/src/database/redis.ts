import redis from 'ioredis';
import config from '@config/redis';

export default new redis(config);
