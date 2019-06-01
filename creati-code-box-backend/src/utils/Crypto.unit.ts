import jest from 'jest';
import crypto from 'crypto';

describe('crypto test', () => {
  beforeAll(async () => {});

  afterAll(async () => {});
  beforeEach(async () => {});

  test('test for crypto', async () => {
    const realPassword = 'Pa$$w0rd';
    const salt = Buffer.from(
      Array(512)
        .fill(0, 0, 512)
        .map(() => Math.random() * 256)
    );
    const key = await crypto.scryptSync(realPassword, salt, 64);
    const result = await crypto.scryptSync(realPassword, salt, 64);
    console.log(key);
    console.log(result);
    expect(key).toEqual(result);
  });
});
