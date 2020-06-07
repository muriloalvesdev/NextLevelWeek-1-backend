import knex from  'knex';
import { environment } from './environments/environment';

const connection = knex({
    client: 'pg',
    version: '9.5',
    connection: {
        user: environment.databaseUsername,
        password: environment.databasePassword,
        host: environment.databaseHost,
        port: environment.databasePort,
        database: environment.databaseName,
        charset: 'utf8',
        timezone: 'UTC',
    },
    useNullAsDefault: true,
});

export default connection;