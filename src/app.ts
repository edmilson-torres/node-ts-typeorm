import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
  return res.json({ message: 'pong' });
});

export default app;
