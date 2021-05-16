import { createPool } from 'mysql';

export function connect() {
    const connection = createPool({
        host: 'us-cdbr-east-03.cleardb.com',
        user: 'ba8c9c4e0220b5',
        password: 'db69a049',
        database: 'heroku_56a36dfdc26684c',
    });

    return connection;
}
