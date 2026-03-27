import express from 'express';
import { nanoid } from 'nanoid';
import urlModel from '../models/url.model.js';
const router = express.Router();
// create short url
export const createShortUrlRouter = router.post("/", (req, res)=>{
  const {fullurl} = req.body;
  const shortUrl = nanoid(7);
  const url_model = new urlModel({
    originalUrl: fullurl,
    shortUrl: shortUrl,
  });
  url_model.save();
  res.send(`http://localhost:3100/${shortUrl}`);
})
// redirect to original url
export const redirectToOriginalUrl = router.get("/:shortUrl", async (req, res)=>{
  const {shortUrl} = req.params;
  const url = await urlModel.findOneAndUpdate({shortUrl: shortUrl}, {$inc: {clicks: 1}});
  if(url){
    res.redirect(url.originalUrl);
  } else{
    res.status(404).send("URL not found");
  }
})
