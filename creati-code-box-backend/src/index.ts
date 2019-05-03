require('dotenv').config({
  path: require('path').resolve(process.cwd(), 'key/.envrc')
});

import Server from './Server';
import Router from '@/modules/router';
import DB from '@/utils/database';

const server = new Server(new Router(), new DB());

server.start();
