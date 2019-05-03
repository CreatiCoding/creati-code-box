import UserVO from './UserVO';

export default class UserRepository {
  private user_vo: object;
  constructor() {}
  test() {
    this.user_vo = new UserVO();
  }
}
