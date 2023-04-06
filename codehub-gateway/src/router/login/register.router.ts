import router from '@router/index';
import db from '@database/index';
import jwt from '@utils/jwt';
import Result from '@model/common/result';
import { TOKEN_EXPRESS } from '@constants/system';

router.post('/register', async (ctx) => {
  const { username, password } = <{ username: string; password: string }>ctx.request.body;
  // TODO 校验用户名密码，预校验用户已存在
  // TODO check db do not has user => res
  // TODO save to db
  // TODO 获取用户ID
  const userId = '123';
  const token = await jwt.sign({ username, userId });
  db.redis.set(`${userId}_token`, token, 'EX', TOKEN_EXPRESS);
  ctx.body = Result.success(token, '登陆成功');
});
