import 'dotenv/config';
import express from 'express';
import {checkEnvs} from './config/env';
import router from './routes';

checkEnvs();

const app = express();
app.use(express.json());
app.use(router);

app.get('/', (req, res) => res.send('hello world'));

app.listen(3000, () => console.log('Server listening on port 3000!'));
