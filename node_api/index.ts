import express from 'express';
import 'dotenv/config';
import './db/connect';

import Data from './models/Data';

const app = express();

app.get('/', async (req, res) => {
    try {
        const allData = await Data.find({});
        res.send(allData);
    } catch(error) {
        res.send(error);
    }
});

app.listen(process.env.PORT, () => {
    console.log('server started: ', process.env.PORT);
});