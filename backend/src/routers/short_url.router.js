import express from 'express';
import { nanoid } from 'nanoid';
import urlModel from '../models/url.model.js';
import qrcode from 'qrcode';
const router = express.Router();
// create short url
export const createShortUrlRouter = router.post("/", async (req, res) => {
  try {
    const { fullurl } = req.body;
    const shortUrl = nanoid(7);
    const url_model = new urlModel({
      originalUrl: fullurl,
      shortUrl: shortUrl,
    });
    await url_model.save();
    const fullShortUrl = `http://localhost:3100/${shortUrl}`;
    // generate QR
    const qrCode = await qrcode.toDataURL(fullShortUrl);
    res.json({
      shortUrlForUI: fullShortUrl,
      qrCode: qrCode
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

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


