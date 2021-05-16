import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import IndexRoutes from './routes/index.routes';
import { customerRoutes } from './routes/customer.routes';

export class App {
    private app: Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/customer', customerRoutes);
    }

    listen() {
        this.app.listen(this.app.get('port'));
        console.log(`Server on port: ${this.app.get('port')}`);
    }
}
