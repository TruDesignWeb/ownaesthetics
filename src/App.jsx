import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';


import Dashboard from './pages/dashboard';
import Login from './components/login';
import ProtectedRoute from './components/protectedroute';
import GuestRoute from './components/guestroute';
import Register from './components/register';
import { useState } from 'react';
import Partners from './pages/collabpartners';
import Reviews from './pages/reviews.jsx';
import Membership from './pages/membership';
import Appointments from './pages/appointments';
import Podcasts from './pages/podcasts';
import Refer from './pages/referringpartners.jsx';

// import AntiWrinkle from './pages/services/antiwrinkle';
// import Aquafirme from './pages/services/aquafirme';
// import NouvaDerm from './pages/services/nouvaderm';
// import SaltFacial from './pages/services/saltfacial';
// import Cellenis from './pages/services/cellenis';
// import ChemicalPeels from './pages/services/chemicalpeels';
import Consultation from './pages/services/consultation';
// import Exosomes from './pages/services/exosomes';
// import Facials from './pages/services/facials';
// import HairTreatments from './pages/services/hairtreatments';
// import Juvederm from './pages/services/juvederm';
// import Kybella from './pages/services/kybella';
// import Sclerotherapy from './pages/services/sclerotherapy';
// import Sculptra from './pages/services/sculptra';
// import SkinPen from './pages/services/skinpen';
// import SkinTypes from './pages/services/skintypes';


export default function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/membership" element={<Membership />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/referring-partners" element={<Refer />} />

        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/partners" element={<Partners />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/appointments" element={<Appointments />} />



        {/* <Route path = "services/antiwrinkle" element={<AntiWrinkle />} /> */}
        {/* <Route path = "services/aquafirme" element={<Aquafirme />} /> */}
        {/* <Route path = "services/nouvaderm" element={<NouvaDerm />} /> */}
        {/* <Route path = "services/saltfacial" element={<SaltFacial />} /> */}

        {/* <Route path = "services/cellenis" element={<Cellenis />} /> */}
        {/* <Route path = "services/chemicalpeels" element={<ChemicalPeels />} /> */}
        <Route path = "services/consultation" element={<Consultation />} />
        {/* <Route path = "services/exosomes" element={<Exosomes />} /> */}

        {/* <Route path = "services/facials" element={<Facials />} /> */}
        {/* <Route path = "services/hairtreatments" element={<HairTreatments />} /> */}
        {/* <Route path = "services/juvederm" element={<Juvederm />} /> */}
        {/* <Route path = "services/kybella" element={<Kybella />} /> */}

        {/* <Route path = "services/sclerotherapy" element={<Sclerotherapy />} /> */}
        {/* <Route path = "services/sculptra" element={<Sculptra />} /> */}
        {/* <Route path = "services/skinpen" element={<SkinPen />} /> */}
        {/* <Route path = "services/skintypes" element={<SkinTypes />} /> */}





        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />


        <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
        
      </Routes>
      
    </>
  );
}