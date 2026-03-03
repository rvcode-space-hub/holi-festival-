# 🎉 Premium Holi Greeting Web App

A beautiful, animated, and personalized Holi greeting web application built using **Next.js, Tailwind CSS, and Framer Motion**.

This project allows you to generate custom Holi greeting pages for different clients with dynamic music playlists and premium animated effects.

---

## ✨ Features

* 🎨 Animated Gradient Background
* 💥 Burst Color Effects
* 💎 Glassmorphism Card Design
* 🎵 Dynamic Background Music (Client-based Playlist)
* 👤 Personalized Greeting via URL
* 📱 Fully Responsive (Mobile Friendly)
* 🌈 Gradient Text Effects
* 🚀 Smooth Animations with Framer Motion

---

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* **Framer Motion**
* **Google Fonts (Yatra One)**

---

## 📂 Project Structure

```
/app
   /[clients]
      page.js
/components
   BackgroundMusic.js
   CornerParticles.js
/public
   (mp3 files)
```

---

## 🔗 How Personalization Works

You can generate a greeting page by visiting:

```
http://localhost:3000/{client-name}
```

Example:

```
http://localhost:3000/anu
http://localhost:3000/lovely
```

The app:

* Validates client name
* Loads custom music playlist
* Displays personalized greeting

---

## 🎵 Playlist Logic

Each client has a mapped playlist:

```js
const playlistMap = {
  anu: [
    { src: "/Lovely.mp3", duration: 15000 },
    { src: "/Common.mp3", duration: 20000 },
  ],
};
```

Music automatically switches based on duration.

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/holi-greeting-app.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📱 Mobile Optimization

* Uses `min-h-screen` instead of `h-screen`
* Webkit gradient text fix added
* Responsive typography

---

## 🎨 Customization

You can:

* Add new client names in `clientList`
* Add custom playlists in `playlistMap`
* Modify burst colors
* Change greeting message
* Update animations

---

## 👨‍💻 Developer

**Ravi Shankar Singh**
Premium Animated Web Experiences ✨

---

## 📜 License

This project is for educational and personal use.

---

## 🌈 Final Note

May this project inspire you to build more creative, animated, and personalized web experiences.

Happy Coding & Happy Holi! 🎨🔥
