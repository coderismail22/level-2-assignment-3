import express, { Application, Request, Response, application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5000/api/'] }));

app.use('/api/',router);
// use
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
