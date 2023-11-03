import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Loginpage from './Components/Loginpage';
import Registerpage from './Components/Registerpage';
import Storedata from './Components/Storedata';
 const App = () => {
  return (
    <div className='App'> 
     <BrowserRouter>
        <Form/>
        <Routes>
          <Route path="/Loginpage" exact element={<Loginpage/>} />
          <Route path="/Register" exact element={<Registerpage />} /> 
          <Route path="/Storedata" exact element={<Storedata />} /> 
        </Routes>
      </BrowserRouter>
  </div>
  );
};

export default App;
