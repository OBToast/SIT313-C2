import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import {Routes, Route} from 'react-router-dom'

import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import SignUpPage from "./routes/SignUpPage";

function App() {
  return <div>
    <Header />
  
    <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/signup' element={<SignUpPage />}/>
      <Route path='/home' element={<HomePage />}/>
    </Routes>

   <Footer />
  </div>
}

export default App;