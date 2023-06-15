import express from 'express';
import 'dotenv/config';
import './db/connect';

import Data from './models/Data';

const app = express();

app.get('/', async (req, res) => {
    try {
        const allData = await Data.find({});
        res.send(allData);
    } catch (error) {
        res.send(error);
    }
});

app.get('/getData', async (req, res) => {
    try {
        const country = req.query.country;
        const topic = req.query.topic;
        const region = req.query.region;
        const end_year = req.query.end_year;
        const sector = req.query.sector;
        const pestle = req.query.pestle;
        const source = req.query.source;
        const allData = await Data.find(Object.fromEntries(
            Object.entries({
                country,
                topic,
                region,
                end_year,
                sector,
                pestle,
                source,
            }).filter(([_, value]) => value !== undefined)
        ));
        res.send(allData);
    } catch (error) {
        res.send(error);
    }
});

app.listen(process.env.PORT, () => {
    console.log('server started: ', process.env.PORT);
});