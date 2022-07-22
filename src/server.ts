import express from 'express';
import router from './routes';

const app = express();
app.use(express.json());
app.use(router);

app.get('/', (req, res) => res.send('hello world'));

app.listen(3000, () => console.log('Server listening on port 3000!'));
