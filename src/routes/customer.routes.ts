import { Router } from 'express';
import { customerController } from '../controller/customer.controller';

class CustomerRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router
            .route('/')
            .get(customerController.index)
            .post(customerController.store);
        this.router
            .route('/:id')
            .get(customerController.show)
            .put(customerController.update)
            .delete(customerController.destroy);
    }
}

export const customerRoutes = new CustomerRoutes().router;
