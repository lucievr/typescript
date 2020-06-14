import express from 'express'; // this import syntax can be used with ts, preferable => code autocompletion
import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(3000);
