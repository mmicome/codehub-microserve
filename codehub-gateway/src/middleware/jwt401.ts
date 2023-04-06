import Result from '@model/common/result';

export default function (ctx, next) {
  return next().catch((err) => {
    if (401 == err.status) {
      console.log(ctx.request.header);
      ctx.body = Result.forbid('Protected resource, use Authorization header to get access\n');
    } else {
      throw err;
    }
  });
}
