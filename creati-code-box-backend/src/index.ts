require('dotenv').config({
  path: require('path').resolve(process.cwd(), '../key/.envrc')
});
import Server from './Server';
import Router from '@/modules/Router';
import { DB } from '@/utils';

const server = new Server(new Router(), new DB());

server.start();
