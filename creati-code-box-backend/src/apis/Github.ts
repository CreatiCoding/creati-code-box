import git from 'nodegit';
import Api from './Api';
export default class Github {
  constructor(private api: Api = new Api()) {}
  async findRepositoryList(user: string): Promise<Array<string>> {
    const result = await this.api.get(
      `https://api.github.com/users/${user}/repos`,
      {
        headers: {
          'user-agent': 'creco-code-box2'
        },
        json: true
      }
    );
    const result2: Array<object> = JSON.parse(JSON.stringify(result));
    console.log(result2);
    return [];
  }
}
