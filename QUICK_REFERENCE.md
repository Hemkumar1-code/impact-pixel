# QUICK REFERENCE - FILE GUIDE

## 📁 All Project Files Summary

### Configuration Files (Ready)
- ✅ `package.json` - NPM dependencies and scripts
- ✅ `vite.config.js` - Vite build configuration
- ✅ `tailwind.config.js` - Tailwind CSS theme
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `index.html` - Main HTML file
- ✅ `README.md` - Project documentation
- ✅ `SETUP_GUIDE.md` - Setup instructions

### Component Files (.jsx.txt → Remove .txt and place in src/components/)

| File | Purpose |
|------|---------|
| Navbar.jsx | Navigation bar with responsive menu |
| Footer.jsx | Footer with contact info |
| Hero.jsx | Hero section on home page |
| ServiceCard.jsx | Reusable service card component |
| LoadingScreen.jsx | Loading animation screen |
| ProtectedRoute.jsx | Protected route wrapper for admin |
| PortfolioGallery.jsx | Gallery with modal image viewer |

### Page Files (.jsx.txt → Remove .txt and place in src/pages/)

| File | Route | Purpose |
|------|-------|---------|
| Home.jsx | / | Homepage with hero + services |
| Services.jsx | /services | All services listing |
| ServiceDetail.jsx | /service/:id | Individual service details |
| Portfolio.jsx | /portfolio | Portfolio gallery |
| Contact.jsx | /contact | Contact form |
| AdminLogin.jsx | /admin/login | Admin login page |
| AdminDashboard.jsx | /admin/dashboard | Admin control panel |

### Context Files (.jsx.txt → Remove .txt and place in src/context/)

| File | Purpose |
|------|---------|
| AuthContext.jsx | Authentication state management |

### Config Files (.js.txt → Remove .txt and place in src/config/)

| File | Purpose |
|------|---------|
| firebase.js | Firebase initialization & config |

### Style Files (.css.txt → Remove .txt and place in src/styles/)

| File | Purpose |
|------|---------|
| index.css | Global styles & animations |

### Root App Files (.jsx.txt → Remove .txt and place in src/)

| File | Purpose |
|------|---------|
| App.jsx | Main app component with routes |
| main.jsx | React entry point |

---

## 🔧 SETUP CHECKLIST

- [ ] **Install Dependencies**: `npm install`
- [ ] **Create Folder Structure**: Create src/ with subdirectories
- [ ] **Copy All Component Files**: Move from .txt files to src/components/
- [ ] **Copy All Page Files**: Move from .txt files to src/pages/
- [ ] **Copy Context Files**: Move from .txt files to src/context/
- [ ] **Copy Config Files**: Move from .txt files to src/config/
- [ ] **Copy Style Files**: Move from .txt files to src/styles/
- [ ] **Copy Root Files**: Move App.jsx and main.jsx to src/
- [ ] **Firebase Setup**: Create project and get credentials
- [ ] **Update firebase.js**: Add your Firebase config
- [ ] **Create Admin Users**: Create 2 users in Firebase Auth
- [ ] **Start Dev Server**: `npm run dev`
- [ ] **Test All Pages**: Visit each route
- [ ] **Test Admin**: Login with test credentials
- [ ] **Customize**: Update company info and images

---

## 🚀 QUICK START COMMANDS

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔐 ADMIN CREDENTIALS

```
Admin 1:
Email: HEMKUMAR@HEMKUMAR.COM
Password: HEMKUMAR

Admin 2:
Email: SAM@SAM.COM
Password: SAM
```

---

## 📍 ROUTES

| Route | Component | Purpose |
|-------|-----------|---------|
| / | Home.jsx | Homepage |
| /services | Services.jsx | Services listing |
| /service/:id | ServiceDetail.jsx | Service details |
| /portfolio | Portfolio.jsx | Gallery |
| /contact | Contact.jsx | Contact form |
| /admin/login | AdminLogin.jsx | Login page |
| /admin/dashboard | AdminDashboard.jsx | Admin panel |

---

## 🎨 DESIGN TOKENS

### Colors
- Black: `#0a0a0a`
- Dark: `#1a1a1a`
- Gold: `#d4af37`
- Light: `#f5f5f5`

### Fonts
- Serif: Playfair Display (headings)
- Sans: Poppins (body)

### Animations
- Fade in/up on scroll
- Hover scale effects
- Glow animations
- Smooth transitions

---

## 📱 RESPONSIVE BREAKPOINTS

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

---

## 🔥 FIREBASE SERVICES USED

1. **Authentication**: Email/Password login
2. **Firestore**: Store services and metadata
3. **Storage**: Upload portfolio images

---

## 📝 SERVICES OFFERED

1. Poster Design
2. Dress Design
3. Video Editing
4. Web Design
5. V Card Design
6. Xerox Services

---

## 💡 KEY FEATURES

✨ Luxury dark theme with gold accents
🎬 Smooth animations with Framer Motion
📱 Fully responsive design
🔐 Admin authentication system
🖼️ Portfolio image management
📧 Contact form
🌐 Multi-page routing

---

## ⚙️ DEPENDENCIES

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "framer-motion": "^10.16.4",
  "firebase": "^10.7.0",
  "lucide-react": "^0.292.0",
  "tailwindcss": "^3.3.6"
}
```

---

## 🎯 CUSTOMIZATION POINTS

### Update Company Name
- Navbar.jsx (line ~15)
- Footer.jsx (line ~8)

### Update Contact Info
- Footer.jsx (contact section)
- Contact.jsx (contact details)
- AdminLogin.jsx (demo credentials)

### Update Colors
- tailwind.config.js (theme.extend.colors)
- index.css (.gold-text, .gold-glow)

### Update Services
- Home.jsx (services array)
- Services.jsx (services array)
- ServiceDetail.jsx (serviceDetails object)

### Update Portfolio
- Portfolio.jsx (portfolioImages array)

---

## 📞 SUPPORT FILES

- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Detailed setup instructions
- `INSTALLATION_GUIDE.md` - Step-by-step guide
- `QUICK_REFERENCE.md` - This file

---

## 🚨 IMPORTANT NOTES

1. **Never commit Firebase credentials** - Use .env files in production
2. **Create admin users manually** in Firebase Console
3. **Enable all Firebase services** before deploying
4. **Test thoroughly** on mobile devices
5. **Set CORS rules** in Firebase Storage for image uploads

---

## 📈 NEXT STEPS

1. Complete the INSTALLATION_GUIDE.md
2. Test the development server
3. Customize content for your business
4. Add real portfolio images
5. Deploy to production

---

**Total Files: 22**
**Setup Time: ~30 minutes**
**Difficulty: Beginner-Friendly**

Good luck! 🎉
