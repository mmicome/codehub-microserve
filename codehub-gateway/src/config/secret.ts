import fs from 'fs';
import path from 'path';
export const publicKey = fs.readFileSync(path.resolve(__dirname, '../cert/codehub-public.pem'));
export const privateKey = fs.readFileSync(path.resolve(__dirname, '../cert/codehub-private.pem'));
