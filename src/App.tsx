import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { RoomList } from './pages/RoomList';
import { RoomDetail } from './pages/RoomDetail';
import { BookingPage } from './pages/BookingPage';
import { Profile } from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomList />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;