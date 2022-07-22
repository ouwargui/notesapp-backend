import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import {checkEnvs} from './config/env';
import routes from './routes';
import {errorHandler} from './middlewares/errorHandler';

checkEnvs();

const app = express();
app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(3000, () => console.log('Server listening on port 3000!'));
