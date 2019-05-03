import knex from 'knex';

const host: string = process.env.DATABASE_HOST;
const user: string = process.env.DATABASE_USER;
const password: string = process.env.DATABASE_PASSWORD;
const database: string = process.env.DATABASE_DATABASE;

export default class DB {
  private instance: knex = null;
  constructor() {
    this.instance = knex({
      client: 'mysql',
      connection: {
        host,
        user,
        password,
        database
      },
      pool: { min: 0, max: 7 }
    });
  }
  async sql(sql: string, args: Array<any>): Promise<Array<object>> {
    const result: Array<Array<object>> = await this.instance.raw(sql, args);
    return result[0];
  }
}
