import { Router } from 'express';

export default class TestController {
  public get $router(): Router {
    return this.router;
  }
  constructor(private router: Router = Router()) {
    this.router.get('/hello', function(req, res) {
      res.send('Hello test world!!');
    });
  }
}
