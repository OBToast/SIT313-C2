import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";

import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import SignUpPage from "./routes/SignUpPage";

function App() {
  // store the current logged in user to share with other states
  // let the header know, and let the login page set it
  const [currentUser, setCurrentUser] = useState(null);
  return <div>
    <Header currentUser={currentUser} />

    <Routes>
      <Route path='/login' element={<LoginPage setCurrentUser={setCurrentUser} />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>

    <Footer />
  </div>
}

export default App;