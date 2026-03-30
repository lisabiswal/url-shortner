# 🔗 URL Shortener with QR Code Generator

A full-stack web application that converts long URLs into short, shareable links and generates QR codes for easy access. Built using modern technologies and deployed on cloud platforms.

---

## 🚀 Live Demo

* 🌐 Frontend: https://url-shortner-pglx.vercel.app/
* ⚙️ Backend API: https://url-shortner-ttv1.onrender.com

---

## ✨ Features

* 🔗 Shorten long URLs instantly
* 📱 Generate QR codes for each shortened link
* 📋 Copy short URL to clipboard
* ⬇️ Download QR code
* 🔁 Redirect to original URL using short link
* ⚡ Fast and responsive UI
* 🌍 Fully deployed (Frontend + Backend + Database)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```
url-shortner/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   ├── app.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
│
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/url-shortner.git
cd url-shortner
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

### Run backend:

```bash
npm start
```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
```

### Create `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

### Run frontend:

```bash
npm run dev
```

---

## 🌍 Deployment

### Frontend (Vercel)

* Build Command: `npm run build`
* Output Directory: `dist`
* Environment Variable:

```env
VITE_API_URL=https://url-shortner-ttv1.onrender.com
```

### Backend (Render)

* Build Command: `npm install`
* Start Command: `node app.js`
* Environment Variables:

```env
MONGO_URL=your_mongodb_connection_string
```

---

## 🔌 API Endpoints

| Method | Endpoint      | Description          |
| ------ | ------------- | -------------------- |
| POST   | `/api/url`    | Create short URL     |
| GET    | `/:shortCode` | Redirect to original |

---

## 🧪 Usage

1. Enter a long URL in the input field
2. Click **Shorten**
3. Copy the generated short URL
4. Use QR code for quick access
5. Open short URL to redirect

---

## ⚠️ Important Notes

* MongoDB Atlas must allow access (`0.0.0.0/0`)
* Environment variables must be configured correctly
* Backend must be running for frontend to work

---

## 📌 Future Enhancements

* 📊 Click analytics
* 🔐 Authentication system
* 📁 URL history dashboard
* 🎨 UI/UX improvements

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👩‍💻 Author

**Lisa**
Frontend Developer

---

⭐ If you found this project helpful, consider giving it a star!
