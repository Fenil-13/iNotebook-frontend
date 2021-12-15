import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  const navigate = useNavigate()
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/login')
    }
  }, [])
  return (
    <>
      <NoteState>
        <div className="App">
          <Navbar />
          <Alert alert={alert} />

          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="about" element={<About showAlert={showAlert} />} />
              <Route exact path="login" element={<Login showAlert={showAlert} />} />
              <Route exact path="signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </div>
      </NoteState>
    </>
  );
}

export default App;
