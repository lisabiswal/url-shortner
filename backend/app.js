import express from 'express';
import { createShortUrlRouter, redirectToOriginalUrl } from './src/routers/short_url.router.js';
import connectDB from './src/config/mongo.config.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// create short url with post request
app.use("/api/url",createShortUrlRouter);
// get original url and redirect
app.use('/', redirectToOriginalUrl);
const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
  connectDB();
});