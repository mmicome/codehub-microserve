export enum State {
  success = 'success',
  error = 'error',
  warning = 'warning',
  forbid = 'forbid',
}

export declare class Result {
  static success(data: any): Result;
  static error(data: any): Result;
  static warning(data: any, code: number): Result;
}
