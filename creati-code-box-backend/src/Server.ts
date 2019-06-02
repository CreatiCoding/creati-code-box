import newExpress from 'express';
import Router from '@/modules/Router';
import { DB } from '@/utils';
import { UserVO } from '@/models/vo';

export default class Server {
  constructor(
    private router: Router,
    private db: DB,
    private app: newExpress.Express = newExpress()
  ) {}

  async start() {
    // FOR CORS
    this.app.all('/*', function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'POST, GET');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, code');
      res.header('Access-Control-Request-Headers', 'code');
      next();
    });
    // FOR AUTH
    this.app.use('/*', function(req, res, next) {
      // FOR CORS
      if (req.method === 'OPTIONS') {
        return next();
      }
      // FOR AUTH
      if (!req.headers.code || req.headers.code !== process.env.CODE) {
        return res.status(404).send(`Not found ${JSON.stringify(req.headers)}`);
      }
      return next();
    });
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
