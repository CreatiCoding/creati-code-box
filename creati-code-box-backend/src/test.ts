import { Storage } from '@/utils';
try {
  (async () => {
    const s = new Storage();
    let list = await s.dir('.');
    await s.writeFile('hello world!/helloworld.txt', 'hello world!');
    const text = await s.readFile('hello world!/helloworld.txt');
    console.log({ text });
  })();
} catch (e) {
  throw e;
}
