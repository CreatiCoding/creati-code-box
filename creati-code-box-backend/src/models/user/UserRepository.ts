import UserModel from './UserModel';

export default class UserRepository {
  private user_vo: object;
  constructor() {}
  test() {
    this.user_vo = new UserModel();
  }
}
