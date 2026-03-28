import React from 'react'
import "./shorturl.css"
const ShortUrlInput = () => {
  return (
    <div className="short-url-input">
      <div className="input">
        <input type="text" placeholder="Enter a long URL" />
        <button>Shorten</button>
      </div>
      <div className="short-url">
        <p className='url'>Short URL will appear here</p>
        <p>Click on the short URL to copy</p>
        <p>qr code</p>
        <p>Click on the qr code to download</p>
      </div>
    </div>
  )
}

export default ShortUrlInput