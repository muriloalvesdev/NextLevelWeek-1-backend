import { environment } from './src/database/environments/environment';
import path from 'path';

module.exports = {
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
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
}