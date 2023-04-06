import { DataSource } from 'typeorm';
import path from 'path';
const entities = path.resolve(__dirname, '../model/mysql/*.{ts,js}');

export const db = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '8376667249',
  database: 'test',
  synchronize: true,
  logging: ['error', 'query'], //"query",
  entities: [entities],
  subscribers: [],
  migrations: [],
});
