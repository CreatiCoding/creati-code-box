import request_promise from 'request-promise';
import request from 'request';
type rp_type = request.RequestAPI<
  request_promise.RequestPromise,
  request_promise.RequestPromiseOptions,
  request.RequiredUriUrl
>;
export default class Api {
  constructor(private r: rp_type = request_promise) {}
  async get(
    uri: string,
    options: request_promise.RequestPromiseOptions = {},
    body: object = {}
  ): Promise<rp_type> {
    options.method = 'get';
    options.qs = body;
    return this.r(uri, options);
  }
  async post(
    uri: string,
    options: request_promise.RequestPromiseOptions = {},
    body: object = {}
  ): Promise<rp_type> {
    options.method = 'post';
    options.body = body;
    return this.r(uri, options);
  }
}
