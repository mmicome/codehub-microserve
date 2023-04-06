import { State } from '@typings/result';

export default class Result {
  constructor(public state: State, public data: any, public code: number, public msg?: string) {}
  static success(data: any, msg?: string) {
    return new Result(State.success, data, 200, msg);
  }
  static error(msg: string, data?: any) {
    return new Result(State.error, data, 404, msg);
  }
  static warning(msg: string, data?: any, code?: number) {
    return new Result(State.warning, data, code, msg);
  }
  static forbid(data: any) {
    return new Result(State.forbid, data, 401, '没有权限');
  }
  static ok(state: State, data: any, code: number, msg?: string) {
    return new Result(state, data, code, msg);
  }
}
