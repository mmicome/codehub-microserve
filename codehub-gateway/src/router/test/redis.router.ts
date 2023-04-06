import router from '@router/index';
import db from '@database/index';

router.post('/user/redis/save', async (ctx) => {
  const user = { id: '', name: '', sex: '' };
  user.id = Math.random() + '';
  user.name = 'hello';
  user.sex = '0';
  db.redis.set('user', JSON.stringify(user));
  ctx.body = user;
});
