import { Router as newRouter, Express } from 'express';

import { UserController, TestController } from '@/modules/controller';

// TODO #refactoring about inject controller
const routers = [
  { '/user': new UserController() },
  { '/test': new TestController() }
];

export default class Router {
  constructor(private router: newRouter = newRouter()) {}

  use(app: Express) {
    app.use('/', this.router);
    routers
      .map(e => Object.entries(e))
      .map(e => {
        this.router.use(e[0][0], e[0][1].$router);
      });
  }
}
