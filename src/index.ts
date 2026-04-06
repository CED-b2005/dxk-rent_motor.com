import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the Express + TypeScript Server!' });
});

//  test motor info entity
import { MotorInfoEntity } from '@domain/motor_infos/entity';
const motorInfoEntity = new MotorInfoEntity(
    'motor1',
    'Motor 1',
    'This is motor 1',
    'electric',
    100,
    200,
    300,
    "http://example.com/motor1.jpg"
);

console.log(motorInfoEntity.toJSON());


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});