export default class UserVO {
  private user_idx: number;
  private id: string;
  private password: string;
  private password_salt: string;
  private name: string;
  private role: string;
  private email: string;
  private status_code: string;

  /**
   * Getter $user_idx
   * @return {number}
   */
  public get $user_idx(): number {
    return this.user_idx;
  }

  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $password
   * @return {string}
   */
  public get $password(): string {
    return this.password;
  }

  /**
   * Getter $password_salt
   * @return {string}
   */
  public get $password_salt(): string {
    return this.password_salt;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $role
   * @return {string}
   */
  public get $role(): string {
    return this.role;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Getter $status_code
   * @return {string}
   */
  public get $status_code(): string {
    return this.status_code;
  }

  /**
   * Setter $user_idx
   * @param {number} value
   */
  public set $user_idx(value: number) {
    this.user_idx = value;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }

  /**
   * Setter $password
   * @param {string} value
   */
  public set $password(value: string) {
    this.password = value;
  }

  /**
   * Setter $password_salt
   * @param {string} value
   */
  public set $password_salt(value: string) {
    this.password_salt = value;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $role
   * @param {string} value
   */
  public set $role(value: string) {
    this.role = value;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Setter $status_code
   * @param {string} value
   */
  public set $status_code(value: string) {
    this.status_code = value;
  }

  constructor(model: object = {}) {
    Object.assign(this, model);
  }
}
