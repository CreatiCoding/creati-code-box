require('dotenv').config({
  path: require('path').resolve(process.cwd(), 'key/.envrc')
});

import DB from '@/utils/database';
import Server from './Server';
import Router from '@/Router';
const server = new Server(new Router(), new DB());

server.start();
