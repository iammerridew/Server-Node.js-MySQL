import { createPool } from 'mysql';

export function connect() {
    const connection = createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'ng_project',
        connectionLimit: 10,
    });

    return connection;
}
