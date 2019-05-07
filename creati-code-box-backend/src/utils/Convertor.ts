export default class Convertor {
  static any2Object = (obj: any) => JSON.parse(JSON.stringify(obj));
}
