import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert'
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  const [mode,setMode] = useState('light'); //Wheather dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
  }
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode is enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success")
    }
  }
  return (
    <>   
   {/* <Navbar title="TextUtils" aboutText="About Textutils" /> */}
   {/* <Navbar/> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm heading="Enter the text to analyse" mode={mode}/>
   {/* <About/> */}
   </div>
    </>
  );
}

export default App;
