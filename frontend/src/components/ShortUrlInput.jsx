import React, { use, useState } from 'react'
import "./shorturl.css"
import { fetchShortUrl } from '../api/fetchApi'
import { toast } from 'react-toastify'
const ShortUrlInput = () => {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [visible, setVisible] = useState(false);
  const handelSubmit = () => {
    console.log(longUrl)
    fetchShortUrl(longUrl).then((data) => {
      setLongUrl('')
      console.log(data)
      setShortUrl(data.shortUrlForUI)
      setQrCode(data.qrCode)
      setVisible(true)
    })
  }
  const handelCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    toast.success("Copied!");
  }
  const handelDownload = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = "qr-code.png";
    link.click();
  }
  return (
    <div className="short-url-input">
      <div className="input">
        <input
          type="text"
          placeholder="Enter a long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button onClick={handelSubmit}>Shorten</button>
      </div>
      
      <div className="short-url" style={{ display: visible ? 'block' : 'none' }}>
        <p className='url'
          onClick={handelCopy}
        >{shortUrl}
        <button className='copy-url'>copy</button>
        </p>

        <div className="qr" onClick={handelDownload}>
          <img src={qrCode} alt="QR Code" /><br />
          <button className='download'>Download</button>
        </div>

      </div>
    </div>
  )
}

export default ShortUrlInput