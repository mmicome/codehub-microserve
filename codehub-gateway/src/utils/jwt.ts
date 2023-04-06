import jwt from 'jsonwebtoken';
import { privateKey } from '@config/secret';
import { TOKEN_EXPRESS } from '@constants/system';

export default {
  sign: async (payload) =>
    jwt.sign(payload, privateKey, { expiresIn: TOKEN_EXPRESS, algorithm: 'ES256' }),
};
