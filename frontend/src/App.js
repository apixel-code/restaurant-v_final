import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import '@/App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

// Context
import { AdminProvider, useAdmin } from './context/AdminContext';

// Admin Protected Route
const AdminRoute = () => {
  const { isAuthenticated, loading } = useAdmin();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-zinc-400 mt-4">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
};

// Main App Content
const AppContent = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Check if it's admin route
  const isAdminRoute = window.location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <AdminProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#171717',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          }}
        />
        <AdminRoute />
      </AdminProvider>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <MenuPage setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App bg-black min-h-screen">
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#171717',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />

      {/* Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return <AppContent />;
}

export default App;
