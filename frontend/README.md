# 🔗 URL Shortener Frontend

A modern, responsive frontend for a URL Shortener application that allows users to convert long URLs into short, shareable links and generate QR codes instantly.

---

## 🚀 Features

* 🔗 Shorten long URLs instantly
* 📱 Generate QR codes for each short URL
* 📋 Copy short URL to clipboard
* ⬇️ Download QR code
* ⚡ Fast and responsive UI
* 🌐 Connected to live backend API

---

## 🛠️ Tech Stack

* **React.js** (Frontend library)
* **Vite** (Build tool)
* **Axios** (API requests)
* **CSS** (Styling)

---

## 📂 Project Structure

/*************  ✨ Windsurf Command 🌟  *************/
```
frontend
├── public/
├── src/
│   ├── api/
│   │   └── fetchApi.js
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── .env
├── package.json
└── vite.config.js
```
/*******  8db39cb0-194b-4b26-9953-50b2d3d62db3  *******/  

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/url-shortner.git
cd url-shortner/frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the frontend root:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

### 4️⃣ Run locally

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 🌍 Deployment

The frontend is deployed on **Vercel**.

### Steps:

1. Push code to GitHub
2. Import project in Vercel
3. Set:

   * Build Command: `npm run build`
   * Output Directory: `dist`
4. Add environment variable:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## 🔌 API Integration

The frontend communicates with backend endpoints:

* `POST /api/url` → Create short URL
* `GET /:shortCode` → Redirect to original URL

---

## 🧪 Usage

1. Enter a long URL
2. Click **Shorten**
3. Copy the generated short URL
4. Scan or download the QR code

---

## ⚠️ Notes

* Ensure backend is running before using frontend
* CORS must be enabled in backend
* Environment variables must be configured correctly

---

## 📌 Future Improvements

* 📊 URL analytics (click tracking)
* 🔐 User authentication
* 📁 History of shortened URLs
* 🎨 UI enhancements

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👩‍💻 Author

**Monalisa Biswal**
Fullstack Developer

---

⭐ If you like this project, give it a star!
