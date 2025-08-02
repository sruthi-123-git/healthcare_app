// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import DoctorProfile from './pages/DoctorProfile';
// import BookingPage from './pages/BookingPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/doctors/:id" element={<DoctorProfile />} />
//         <Route path="/book/:id" element={<BookingPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DoctorProfile from "./pages/DoctorProfile";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
