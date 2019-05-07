require('dotenv').config({
  path: require('path').resolve(process.cwd(), 'key/.envrc')
});
// import { Storage } from '@/utils';
import { Crypto } from '@/utils';
// import { Api, Github } from '@/apis';
try {
  (async () => {
    const c = new Crypto();
    const word = await c.hashing('passw@rd', 'salting');
    const str: string = word.toString('utf8');
    const arr: Array<string> = str.split('');
    console.log(arr.length);
    for (let i in arr) {
      console.log(arr[i].charCodeAt(0));
    }
    console.log(word.toString());
    // await g.findRepositoryList('creaticoding');
    // const a = new Api();
    // console.log(
    //   await a.get('https://google.com', { q: '@@@@@@@@@@@@@@@@@@@@' })
    // );
    // const s = new Storage();
    // let list = await s.dir('.');
    // await s.writeFile('hello world!/helloworld.txt', 'hello world!');
    // const text = await s.readFile('hello world!/helloworld.txt');
    // console.log({ text });
  })();
} catch (e) {
  throw e;
}
