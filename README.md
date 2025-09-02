# 🏋️‍♀️ FitnestX – Fitness Tracker App  

A modern **fitness tracking app** built with **Ionic + Angular (frontend)** and **Node.js + Express + MySQL (backend)**.  
It integrates with **Google Fit API** to sync health data like steps, heart rate, hydration, and sleep.  

---

## ✨ Features
- 🔑 **Firebase Authentication** (Email/Password + Google Sign-In)
- 📊 **Dashboard** with Steps, Heart Rate, Sleep Hours, and Hydration
- 🔄 **Google Fit Sync** for:
  - Daily step count  
  - Hourly & weekly step history  
  - Hydration logs  
  - Heart rate data  
  - Sleep tracking  
- 🗓️ **Workout scheduling & alarms**
- 💾 **MySQL database** for storing user data and health metrics

---

## 🛠️ Tech Stack

### Frontend (Mobile App)
- [Ionic Framework](https://ionicframework.com/) (Angular)
- SCSS for styling (centralized design system)
- Firebase Auth SDK
- Local Storage / Ionic Storage for caching user info

### Backend (API Server)
- Node.js + Express.js
- MySQL database (`fitnestx_db`)
- Firebase Admin SDK (for token verification)
- Axios (for Google Fit API calls)
- REST API endpoints:
  - `/register`, `/login`, `/google-login`  
  - `/sync-steps`, `/steps/:userId`  
  - `/sync-heartrate`, `/heartrate/:userId`  
  - `/sync-hydration`, `/hydration/:userId`  
  - `/sync-sleep`, `/sleep/:userId`  

---

## ⚙️ Project Workflow

1. **User registers/logs in** (via Firebase Auth).
2. **Frontend stores userId + token** in Ionic Storage.
3. **User connects Google Fit** → OAuth flow issues access & refresh tokens.
4. **Backend stores tokens** securely in MySQL `users` table.
5. **Sync endpoints** fetch data from Google Fit APIs and update respective tables:
   - `steps`  
   - `heartrate`  
   - `waterintake`  
   - `sleephours`
6. **Dashboard fetches latest synced data** and displays it in charts, progress rings, and cards.

---

## 📸 Screenshots  

(Add your screenshots here, for example:)  

- **Login Page**  
<img src="./screenshots/login.png" width="250" />  

- **Dashboard**  
<img src="./screenshots/dashboard.png" width="250" />  

- **Workout Page**  
<img src="./screenshots/workout.png" width="250" />  

---


