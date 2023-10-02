import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';
import db from './config/db';
const port = process.env.PORT;
db().then();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => console.info(`Server is running on port ${port}! 🚀`));
