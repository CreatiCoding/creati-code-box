import { Router as newRouter, Express } from 'express';

import { controllers } from '@/modules';
const { UserController } = controllers;
const routers = [{ '/user': new UserController() }];

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
