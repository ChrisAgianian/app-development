import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <h1 className='title'>
        React Routing by Chris Agianian
      </h1>
      
      <BrowserRouter>
      <Navbar/>
       <Routes>
          {/* <Route path='/' element={<Navbar />}> */}
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
