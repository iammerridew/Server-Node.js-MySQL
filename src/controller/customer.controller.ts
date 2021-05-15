import { Request, Response } from 'express';
import { connect } from '../database';

class CustomerController {
    public index(request: Request, response: Response) {
        connect().query('SELECT * FROM customer', (error, results, fields) => {
            if (error) throw error;
            response.json(results);
        });
    }

    public store(request: Request, response: Response) {
        connect().query(
            'INSERT INTO customer SET ?',
            [request.body],
            (error, results, fields) => {
                if (error) throw error;
                response.json({ message: 'Stored' });
            }
        );
    }

    public show(request: Request, response: Response) {
        connect().query(
            'SELECT * FROM customer WHERE id = ?',
            [request.params.id],
            (error, results, fields) => {
                if (error) throw error;
                response.json(results);
            }
        );
    }

    public update(request: Request, response: Response) {
        connect().query(
            'UPDATE customer SET ? WHERE id = ?',
            [request.body, request.params.id],
            (error, results, fields) => {
                if (error) throw error;
                response.json({ message: 'Updated' });
            }
        );
    }

    public destroy(request: Request, response: Response) {
        connect().query(
            'DELETE FROM customer WHERE id = ?',
            [request.params.id],
            (error, results, fields) => {
                if (error) throw error;
                response.json({ message: 'Deleted' });
            }
        );
    }
}

export const customerController = new CustomerController();
