# LUXURY BUSINESS WEBSITE - COMPLETE PROJECT SETUP GUIDE

## Quick Start

1. Navigate to the project folder
2. Run: `npm install`
3. Run: `npm run dev`
4. Open browser: http://localhost:5173

---

## PROJECT STRUCTURE

```
luxury-business-site/
├── public/
├── src/
│   ├── config/
│   │   └── firebase.js
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── PortfolioGallery.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── AdminLogin.jsx
│   │   └── AdminDashboard.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## MANUAL SETUP INSTRUCTIONS

Since automated setup had issues, follow these steps:

### Step 1: Create Folder Structure
```
mkdir src
mkdir src/config
mkdir src/context
mkdir src/components
mkdir src/pages
mkdir src/styles
```

### Step 2: Copy Each File
Copy the file contents from below into their respective locations.

### Step 3: Install Dependencies
```
npm install
```

### Step 4: Set Up Firebase
1. Go to https://console.firebase.google.com
2. Create a new project
3. Get your config from Project Settings
4. Update src/config/firebase.js with your credentials

### Step 5: Run Development Server
```
npm run dev
```

---

## PREDEFINED ADMIN ACCOUNTS

```
Email: HEMKUMAR@HEMKUMAR.COM
Password: HEMKUMAR

Email: SAM@SAM.COM
Password: SAM
```

(You'll need to create these manually in Firebase Authentication after setup)

---

## FILE CONTENTS

All file contents are provided in the following sections. Copy each file to its respective location.

