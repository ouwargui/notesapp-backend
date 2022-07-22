import 'dotenv/config';
import express, {NextFunction, Request, Response} from 'express';
import {checkEnvs} from './config/env';
import routes from './routes';

checkEnvs();

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res
    .status(500)
    .json({status: 'error', message: 'Internal server error'});
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
