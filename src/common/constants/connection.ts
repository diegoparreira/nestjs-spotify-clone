export const connection: Connection = {
  CONNECTION_STRING: 'MYSQL:12344:3306',
  DB: 'MYSQL',
  DBNAME: 'TEST',
};

export type Connection = {
  CONNECTION_STRING: string;
  DB: 'MYSQL' | 'POSTGRES';
  DBNAME: string;
};
