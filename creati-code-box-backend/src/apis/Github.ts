import git from 'nodegit';
import Api from './Api';
import { Convertor } from '@/utils';
export default class Github {
  constructor(private api: Api = new Api()) {}
  async findRepositoryList(user: string): Promise<Array<string>> {
    const result = await this.api.get(
      `https://api.github.com/users/${user}/repos`,
      {
        headers: {
          'user-agent': 'creco-code-box2',
          authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
        },
        json: true
      }
    );
    const result2: Array<object> = Convertor.any2Object(result);
    console.log(result2);
    return [];
  }
}
