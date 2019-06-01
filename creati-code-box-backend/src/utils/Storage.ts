import fs from 'fs';
class File {
  constructor(
    private name?: string,
    private type?: string,
    private full_path?: string
  ) {}
  // getters & setters
  public get $name(): string {
    return this.name;
  }
  public get $type(): string {
    return this.type;
  }
  public get $full_path(): string {
    return this.full_path;
  }
  public set $name(value: string) {
    this.name = value;
  }
  public set $type(value: string) {
    this.type = value;
  }
  public set $full_path(value: string) {
    this.full_path = value;
  }
}
export default class Storage {
  constructor(private root_path: string = `${process.cwd()}/storage`) {}
  async dir(relative_path: string): Promise<Array<File>> {
    try {
      const target_path = `${this.root_path}/${relative_path}`;
      const list = await fs.readdirSync(target_path, {
        withFileTypes: true
      });
      return list.map(e => {
        return new File(
          e.name,
          e.isDirectory() ? 'd' : 'f',
          target_path + '/' + e.name
        );
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  async mkdir(relative_path: string) {
    try {
      const target_path = `${this.root_path}/${relative_path}`;
      return await fs.mkdirSync(target_path);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  async readFile(relative_path: string): Promise<string> {
    try {
      const target_path = `${this.root_path}/${relative_path}`;
      return await fs.readFileSync(target_path).toString();
    } catch (e) {
      console.error(e);
      return '';
    }
  }
  async writeFile(relative_path: string, contents: string) {
    try {
      const target_path = `${this.root_path}/${relative_path}`;
      await fs.writeFileSync(target_path, contents);
    } catch (e) {
      console.error(e);
      return '';
    }
  }
}
