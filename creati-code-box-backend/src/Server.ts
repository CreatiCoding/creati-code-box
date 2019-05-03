import newExpress from 'express';
import Router from '@/Router';
import DB from '@/utils/database';
import { models } from '@/models';
const { UserModel } = models;

export default class Server {
  constructor(
    private router: Router,
    private db: DB,
    private app: newExpress.Express = newExpress()
  ) {}

  async start() {
    this.app.listen(3000, function() {
      console.log('Start listening on http://localhost:3000');
    });
    this.router.use(this.app);

    // tutorial to db connection
    const res: Array<object> = await this.db.sql(
      'select * from USER where user_idx = ? ',
      [11]
    );
    const user = new UserModel(res[0]);
  }
}
