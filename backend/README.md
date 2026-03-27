

# 🔗 URL Shortener Backend

A fast and minimal **URL Shortener API** built using Node.js and MongoDB.
It allows users to shorten long URLs, track usage, and generate QR codes.

---

## 🚀 Features

* 🔗 Generate short URLs
* 🔁 Redirect to original URLs
* 📊 Track click counts
* 📱 QR code generation for each short link
* 🌐 CORS enabled for frontend integration

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose

---

## 📦 Dependencies

```bash
express
mongoose
nanoid
qrcode
cors
dotenv
nodemon
```

---

## 📁 Project Structure

```bash
url_shortener/
│── app/
│   ├── db.js
│   ├── models/
│   ├── controllers/
│── main.js
│── .env
│── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd url_shortener
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the server

```bash
npm run dev
```

Server will run at:

```bash
http://localhost:3000
```

---

## 📌 API Endpoints

### 🔹 Create Short URL

```http
POST /shorten
```

**Request Body:**

```json
{
  "originalUrl": "https://example.com"
}
```

**Response:**

```json
{
  "shortUrl": "abc123",
  "fullShortUrl": "http://localhost:3000/abc123"
}
```

---

### 🔹 Redirect to Original URL

```http
GET /:shortUrl
```

➡️ Redirects user to the original URL
➡️ Increments click count

---

### 🔹 Generate QR Code

```http
GET /qr/:shortUrl
```

➡️ Returns QR code for the shortened URL

---

## 🧠 How It Works

1. User sends a long URL
2. Server generates a unique ID using `nanoid`
3. Stores mapping in MongoDB
4. Redirect route fetches and redirects
5. QR route generates a QR code for sharing

---

## 📊 Sample Schema

```js
{
  originalUrl: String,
  shortUrl: String,
  clicks: {
    type: Number,
    default: 0
  }
}
```

---

## ⚠️ Important Notes

* Add `.env` and `node_modules/` to `.gitignore`
* Ensure MongoDB is running
* Use proper URL format (include `http://` or `https://`)

---

## 🔮 Future Enhancements

* 🔐 Authentication system
* ✏️ Custom short URLs
* 📈 Analytics dashboard
* ⏳ Link expiration

---

## 👩‍💻 Author

**Lisa**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

### (Bonus for your earlier question 👇)

👉 **Where to implement CORS**

In your `main.js` or `app.js` (entry file):

```js
import cors from "cors";

app.use(cors());
```

Place it **before your routes** ✅

---




