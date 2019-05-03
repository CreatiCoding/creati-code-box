import newExpress from 'express';
import Router from '@/modules/Router';
import DB from '@/utils/database';
import { UserVO } from '@/models/vo';

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
    const user = new UserVO(res[0]);
    console.log(user);
  }
}
