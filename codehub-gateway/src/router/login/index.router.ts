import router from '@router/index';
import db from '@database/index';
import jwt from '@utils/jwt';
import Result from '@model/common/result';
import { TOKEN_EXPRESS } from '@constants/system';

router.post('/login', async (ctx) => {
  console.log(ctx.request.body);
  // TODO check db user right => res
  const res = { username: 'icome', userId: '22312' };
  const { username, userId } = res;
  const token = await jwt.sign({ username, userId });
  db.redis.set(`${userId}_token`, token, 'EX', TOKEN_EXPRESS);
  ctx.body = Result.success(token, '登陆成功');
});
