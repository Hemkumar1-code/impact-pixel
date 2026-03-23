# 🚀 COMPLETE INSTALLATION GUIDE

## STEP-BY-STEP SETUP INSTRUCTIONS

This guide walks you through setting up the LUXE Design website from scratch.

---

## PART 1: PROJECT FILES SETUP

### Step 1: Create Project Directory Structure

You already have these files created:
- ✅ `package.json` - Dependencies
- ✅ `vite.config.js` - Vite configuration
- ✅ `tailwind.config.js` - Tailwind configuration
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `index.html` - Main HTML file
- ✅ `README.md` - Project documentation

### Step 2: Create Source Files

Create the following folder structure in your project root:

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── LoadingScreen.jsx
│   ├── ProtectedRoute.jsx
│   └── PortfolioGallery.jsx
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── Portfolio.jsx
│   ├── Contact.jsx
│   ├── AdminLogin.jsx
│   └── AdminDashboard.jsx
├── context/
│   └── AuthContext.jsx
├── config/
│   └── firebase.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

### Step 3: Copy Component Files

For each `.jsx.txt` file provided, remove the `.txt` extension and place in the corresponding folder:

1. **Navbar.jsx** → `src/components/`
2. **Footer.jsx** → `src/components/`
3. **Hero.jsx** → `src/components/`
4. **ServiceCard.jsx** → `src/components/`
5. **LoadingScreen.jsx** → `src/components/`
6. **ProtectedRoute.jsx** → `src/components/`
7. **PortfolioGallery.jsx** → `src/components/`
8. **Home.jsx** → `src/pages/`
9. **Services.jsx** → `src/pages/`
10. **ServiceDetail.jsx** → `src/pages/`
11. **Portfolio.jsx** → `src/pages/`
12. **Contact.jsx** → `src/pages/`
13. **AdminLogin.jsx** → `src/pages/`
14. **AdminDashboard.jsx** → `src/pages/`
15. **AuthContext.jsx** → `src/context/`
16. **firebase.js** → `src/config/`
17. **index.css** → `src/styles/`
18. **App.jsx** → `src/`
19. **main.jsx** → `src/`

### Step 4: Install Dependencies

Open terminal in project root and run:

```bash
npm install
```

This will install all dependencies listed in `package.json`:
- react & react-dom
- react-router-dom
- framer-motion
- firebase
- tailwindcss
- postcss
- autoprefixer
- lucide-react

---

## PART 2: FIREBASE SETUP

### Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Enter project name (e.g., "luxe-design-site")
4. Continue and complete setup

### Step 2: Get Firebase Credentials

1. In Firebase Console, click your project
2. Go to Project Settings (gear icon)
3. Under "Your apps", select Web app (</> icon)
4. Copy the config object

Your config should look like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD_......",
  authDomain: "project.firebaseapp.com",
  projectId: "project-id",
  storageBucket: "project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

### Step 3: Update Firebase Config File

1. Open `src/config/firebase.js`
2. Replace the placeholder with your actual credentials
3. Save the file

### Step 4: Enable Firebase Services

#### Enable Authentication
1. Go to Authentication → Sign-in method
2. Enable "Email/Password"
3. Save

#### Create Firestore Database
1. Go to Firestore Database
2. Click "Create database"
3. Start in test mode (for development)
4. Select closest region

#### Enable Storage
1. Go to Storage
2. Click "Get started"
3. Start in test mode
4. Select closest region

### Step 5: Create Admin Users

1. Go to Authentication → Users
2. Click "Add user"
3. Create first admin:
   - Email: `HEMKUMAR@HEMKUMAR.COM`
   - Password: `HEMKUMAR`
4. Create second admin:
   - Email: `SAM@SAM.COM`
   - Password: `SAM`

---

## PART 3: START DEVELOPMENT SERVER

### Run Development Server

```bash
npm run dev
```

You should see:
```
Local:        http://localhost:5173/
```

### Open in Browser

1. Go to http://localhost:5173
2. You should see the loading screen and then the home page
3. Navigate through pages to verify everything works

---

## PART 4: TEST FUNCTIONALITY

### Test Public Pages
- [ ] Home page loads with animations
- [ ] Services page shows all 6 services
- [ ] Portfolio page displays gallery
- [ ] Contact form works
- [ ] Navbar responsive on mobile

### Test Admin System
1. Click "Admin" in navbar
2. Login with:
   - Email: `HEMKUMAR@HEMKUMAR.COM`
   - Password: `HEMKUMAR`
3. Should redirect to Admin Dashboard
4. Test features:
   - Switch between tabs (Portfolio, Services, Links)
   - Add new service
   - Delete service
   - Test responsive design

---

## PART 5: CUSTOMIZATION

### Update Company Information

1. **In `src/components/Navbar.jsx`** (around line 15):
   ```jsx
   <span className="text-luxury-gold font-serif">LUXE</span>
   <span className="text-white">Design</span>
   ```

2. **In `src/components/Footer.jsx`** (contact details):
   ```jsx
   <Mail size={18} className="text-luxury-gold" />
   <span>hello@luxedesign.com</span>
   ```

3. **In `src/pages/Contact.jsx`** (contact form action):
   - Update form submission to send emails
   - Integration with EmailJS or backend

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'luxury-black': '#0a0a0a',
  'luxury-gold': '#d4af37',  // Change this color
  'luxury-light': '#f5f5f5',
}
```

### Add More Services

Edit `src/pages/Home.jsx`, `Services.jsx`:
```javascript
const services = [
  {
    id: 1,
    name: 'Service Name',
    description: 'Service description',
    image: null,
  },
  // Add more...
];
```

### Update Portfolio Images

In `src/pages/Portfolio.jsx`:
```javascript
const portfolioImages = [
  {
    id: 1,
    title: 'Project Title',
    category: 'Service Type',
    url: 'https://image-url.com/image.jpg',
  },
  // Add more...
];
```

---

## PART 6: DEPLOYMENT

### Option 1: Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Build project:
```bash
npm run build
```

3. Deploy:
```bash
vercel
```

### Option 2: Deploy to Netlify

1. Build project:
```bash
npm run build
```

2. Drag and drop `dist` folder to Netlify dashboard

### Option 3: Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Build project:
```bash
npm run build
```

3. Initialize Firebase hosting:
```bash
firebase init hosting
```

4. Deploy:
```bash
firebase deploy
```

---

## TROUBLESHOOTING

### Problem: `npm install` fails
**Solution**: 
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` folder
- Run `npm install` again

### Problem: Firebase config not working
**Solution**:
- Verify all credentials in `firebase.js`
- Check Firebase project still exists
- Verify authentication is enabled

### Problem: Styles not loading
**Solution**:
- Make sure Tailwind CSS is imported in `src/styles/index.css`
- Ensure `index.css` is imported in `src/main.jsx`
- Rebuild with `npm run dev`

### Problem: Admin login not working
**Solution**:
- Verify user created in Firebase Authentication
- Check email/password format
- Ensure Authentication is enabled in Firebase

### Problem: Images not showing in portfolio
**Solution**:
- Use valid image URLs
- Ensure URLs are accessible
- Check browser console for CORS errors

---

## ENVIRONMENT VARIABLES

Create a `.env.local` file (optional, for production):

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then update `src/config/firebase.js` to use these:
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ... etc
};
```

---

## NEXT STEPS

1. ✅ Complete all setup steps above
2. ✅ Customize company information
3. ✅ Add real portfolio images
4. ✅ Update service descriptions
5. ✅ Set up email notifications
6. ✅ Deploy to production
7. ✅ Set up custom domain

---

**You're all set! 🎉 Your premium luxury website is ready to go!**
