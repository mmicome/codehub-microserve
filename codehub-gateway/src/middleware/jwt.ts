import jwt from 'koa-jwt';
import { publicKey } from '@config/secret';

const jwtClient = jwt({
  secret: publicKey,
  tokenKey: 'token',
  key: 'jwtdata',
});

export default jwtClient.unless({
  path: [/^\/gateway\/public/, /^\/gateway\/login/, /^\/gateway\/register/],
});
