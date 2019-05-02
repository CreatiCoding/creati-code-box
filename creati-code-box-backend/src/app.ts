import express from 'express';
import router from '@/router';
import DB from '@/utils/database';
import UserRepository from '@/modules/user/UserRepository';

(async () => {
  const app = express();

  app.use('/', router);

  app.listen(3000, function() {
    console.log('Start listening on port 3000!');
    console.log('http://localhost:3000');
  });

  const db = new DB();
  const ret = await db.sql('select * from USER where id = ?', [1]);

  console.log(ret);

  const user_repository = new UserRepository();

  user_repository.test();
})();
