import knex from "knex";

// const host: string = process.env.DATABASE_HOST;
// const user: string = process.env.DATABASE_USER;
// const password: string = process.env.DATABASE_PASSWORD;
// const database: string = process.env.DATABASE_DATABASE;

const host: string = "localhost";
const user: string = "user";
const password: string = "password";
const database: string = "db";

export default class DB {
  constructor(
    private instance: knex = knex({
      client: "mysql",
      connection: {
        host,
        user,
        password,
        database
      },
      pool: { min: 0, max: 7 }
    })
  ) {}
  async sql(sql: string, args: Array<any>): Promise<Array<object>> {
    const result: Array<Array<object>> = await this.instance.raw(sql, args);
    return result[0];
  }
}
