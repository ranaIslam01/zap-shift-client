# Zap Shift - Client

A modern parcel delivery and logistics platform built with React that provides seamless service for both customers and riders.

## 🚀 Features

- **User Authentication**: Secure login and registration system with Firebase
- **Parcel Management**: Easily send, track, and manage parcels
- **Rider Dashboard**: Comprehensive dashboard with order management for delivery riders
- **User Profile**: Manage user information and preferences
- **Service Coverage**: View service areas and coverage zones
- **Pricing Information**: Transparent pricing details for various services
- **Real-Time Tracking**: Map integration for parcel tracking
- **Responsive Design**: Fully responsive UI for desktop and mobile devices

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Zap-Shift-Client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🏃 Running the Project

### Development Mode

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── Components/          # Reusable React components
│   ├── Be A Rider/     # Rider registration components
│   ├── Dashborad/      # Dashboard components
│   ├── Home/           # Home page components
│   ├── LoadingSpinner/ # Loading indicator
│   ├── LogIn/          # Login component
│   ├── MapComponent/   # Map integration
│   └── SignUp/         # Registration component
├── Context/            # React Context for state management
│   └── Auth/           # Authentication context
├── hooks/              # Custom React hooks
│   ├── useAuth.jsx     # Authentication hook
│   ├── useAxios.jsx    # Axios hook
│   └── useAxiosSecure.jsx # Secure axios hook
├── Pages/              # Page components
│   ├── About/
│   ├── Be A Rider/
│   ├── Coverage/
│   ├── Dashboard/
│   ├── Home/
│   ├── Pricing/
│   ├── SendParcelForm/
│   └── Errorpage/
├── Layout/             # Layout components
├── Router/             # Route configuration
├── firebase/           # Firebase configuration
├── assets/             # Static assets
└── main.jsx           # Application entry point
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS3
- **State Management**: React Context API
- **Authentication**: Firebase
- **HTTP Client**: Axios
- **Mapping**: Map integration component
- **Routing**: React Router

## 📦 Dependencies

Main packages used in this project:

- react
- react-router-dom
- firebase
- axios
- vite

## 🔐 Environment Variables

Create a `.env` file with the following variables:

```env
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

## 📱 Pages and Routes

- `/` - Home page
- `/about` - About page
- `/coverage` - Service coverage
- `/pricing` - Pricing information
- `/be-a-rider` - Rider registration
- `/send-parcel` - Parcel delivery form
- `/dashboard` - User/Rider dashboard
- `/login` - User login
- `/signup` - User registration

## 🎨 Features Summary

### Home Page

- Hero section with call-to-action
- Service highlights
- How it works section
- Testimonials
- FAQ section
- Sales team information

### Dashboard

- Parcel management
- User profile management
- Rider details
- Recent order tracking
- Statistics cards

### Rider Features

- Registration form
- Earning information
- Order management
- Profile management

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💼 Support

For support, please contact the development team or open an issue in the repository.

---

**Happy Coding! 🚀**
