import express, { Request, Response } from 'express';
import { DomainError } from './domain/errors';

const app = express();
const port = process.env.PORT || 3000;

app.use((err: DomainError | Error, req: Request, res: Response, next: Function) => {
    if (err instanceof DomainError) {
        return res.status(Number(err.statusCode) || 500).json({
            message: err.message,
            isOperational: err.isOperational,
        });
    }

    console.error(err);
    res.status(500).json({ message: "Internal server error" });
});

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the Express + TypeScript Server!' });
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});