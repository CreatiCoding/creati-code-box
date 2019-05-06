// import { Storage } from '@/utils';
import { Git } from '@/utils';
import { Api, Github } from '@/apis';
try {
  (async () => {
    const g = new Github();
    await g.findRepositoryList('creaticoding');
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
