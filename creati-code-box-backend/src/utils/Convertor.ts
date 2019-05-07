export default class Convertor {
  constructor() {}
  static any2Object = (obj: any) => JSON.parse(JSON.stringify(obj));
}
