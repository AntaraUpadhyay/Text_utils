import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import About from './componants/About';
import { useState } from 'react';
import Alert from './componants/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
//i can rename this css file and can and also can make chnages in thr app.css file 
//i just have to rename that file and here make chnages  
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#ced4da';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Created By Antara';
      }, 1500);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "primary ");



    }
  }
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <Router>
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} >
            
            </Route>

            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter, character Counter ,UpperCase , LowerCase" mode={mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>

    </>

  );
}

export default App;
