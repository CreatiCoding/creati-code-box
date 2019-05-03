import { Router } from 'express';

export default class UserController {
  public get $router(): Router {
    return this.router;
  }
  constructor(private router: Router = Router()) {
    this.router.get('/hello', function(req, res) {
      res.send('Hello user world!!');
    });
  }
}
