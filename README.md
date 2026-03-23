# 🎨 LUXE Design - Premium Luxury Business Website

A modern, high-end React.js website for premium design services. Built with Vite, Tailwind CSS, Framer Motion, and Firebase.

## ✨ Features

### Public Pages
- **Home**: Hero section with services preview and smooth animations
- **Services**: Showcase of 6 core services with detailed descriptions
- **Service Details**: In-depth service information with pricing
- **Portfolio**: Interactive image gallery with hover effects
- **Contact**: Contact form with business information

### Admin System
- **Admin Login**: Secure authentication with Firebase
- **Admin Dashboard**: Manage content dynamically
  - Upload portfolio images
  - Add/edit/delete services
  - Manage external links
  - User management

### Design Features
- Dark luxury theme with black background
- Gold (#d4af37) and white premium accents
- Glassmorphism UI with blur effects
- Smooth animations with Framer Motion
- Fully responsive design
- Loading screen with animations
- Hover glow effects
- Scroll animations

## 📋 Project Structure

```
luxury-business-site/
├── public/
├── src/
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
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── config/
│   │   └── firebase.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account (https://firebase.google.com)

### Installation

1. **Clone or navigate to the project directory**
```bash
cd luxury-business-site
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase** (Important!)
   - Go to https://console.firebase.google.com
   - Create a new project or select existing
   - Enable Authentication (Email/Password)
   - Create Firestore Database
   - Enable Storage
   - Get your credentials from Project Settings

4. **Update Firebase Configuration**
   - Open `src/config/firebase.js`
   - Replace the placeholder values with your Firebase config:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

5. **Create Admin Users in Firebase**
   - Go to Firebase Console → Authentication → Users
   - Create two users:
     - Email: HEMKUMAR@HEMKUMAR.COM, Password: HEMKUMAR
     - Email: SAM@SAM.COM, Password: SAM

6. **Start Development Server**
```bash
npm run dev
```

7. **Open in Browser**
   - Navigate to http://localhost:5173

## 🛠 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Routing**: React Router 6.20
- **Backend**: Firebase
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Storage**: Firebase Storage
- **Icons**: Lucide React

## 🎨 Design Features

### Glassmorphism
- Semi-transparent cards with blur effects
- Modern, premium aesthetic
- Applied to all component backgrounds

### Color Scheme
- **Background**: #0a0a0a (luxury black)
- **Accent**: #d4af37 (luxury gold)
- **Text**: #f5f5f5 (light)

### Typography
- **Serif Font**: Playfair Display (headings)
- **Sans Font**: Poppins (body)

### Animations
- Page transitions with Framer Motion
- Smooth scroll animations
- Hover effects and glow
- Loading screen animation
- Scroll indicators

## 📱 Responsive Design

- **Mobile**: <640px
- **Tablet**: 640px - 1024px
- **Desktop**: >1024px

All pages are fully responsive and optimized for all screen sizes.

## 🔐 Admin System

### Authentication
- Firebase email/password authentication
- Protected routes for admin pages
- Session persistence

### Admin Credentials
```
Admin 1:
Email: HEMKUMAR@HEMKUMAR.COM
Password: HEMKUMAR

Admin 2:
Email: SAM@SAM.COM
Password: SAM
```

### Dashboard Features
1. **Portfolio Management**
   - Upload images to Firebase Storage
   - Delete images
   - Organize by category

2. **Services Management**
   - Add new services
   - Edit service details
   - Delete services
   - Real-time updates

3. **Links Management**
   - Add external links (YouTube, portfolio, etc.)
   - Organize links by type

4. **User Management**
   - View all users
   - Add new admin users

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod
```

### Firebase Hosting
```bash
npm install -g firebase-tools
npm run build
firebase deploy
```

## 📝 Services Included

1. **Poster Design**: Eye-catching promotional posters
2. **Dress Design**: Custom fashion and apparel design
3. **Video Editing**: Professional video production and editing
4. **Web Design**: Modern, responsive websites
5. **V Card Design**: Professional business cards
6. **Xerox Services**: Printing and copying solutions

## 🎯 File Organization

### Key Files Explained

**src/config/firebase.js**
- Firebase configuration
- Initialize services (Auth, Firestore, Storage)

**src/context/AuthContext.jsx**
- React Context for authentication
- Provides login/logout/user state

**src/components/Navbar.jsx**
- Sticky navigation bar
- Mobile menu support
- Auth links

**src/pages/AdminDashboard.jsx**
- Admin control center
- Content management interface
- Image and service CRUD

## 🚀 Performance Optimizations

- Code splitting with React Router
- Image optimization
- CSS minification
- JavaScript bundle optimization
- Lazy loading components

## 📞 Contact & Support

- Email: hello@luxedesign.com
- Phone: +1 (555) 123-4567
- Location: New York, USA

## 📄 License

This project is created for premium design services. All rights reserved.

## 🎯 Next Steps

1. ✅ Complete Firebase setup
2. ✅ Create admin accounts
3. ✅ Customize company information
4. ✅ Upload portfolio images
5. ✅ Add services descriptions
6. ✅ Deploy to production

---

**Created with ❤️ for premium design services**
