import newCrypto from 'crypto';

export default class Crypto {
  constructor(private crypto: any = newCrypto) {}
  hashing = async (password: string, salt: string): Promise<Buffer> => {
    return this.crypto.scryptSync(password, salt, 64);
  };
}
