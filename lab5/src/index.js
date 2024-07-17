import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import land1 from './images/land1.jpg';
import User from './comments';
//import images
import manavatar from './images/manavatar.png';
import womanavatar from './images/womanavatar.png';
import busmanavatar from './images/busmanavatar.png';

//create content in the app using fct components
const App = function(){
  //define a var
  let fullname = "Chris AG";

  //declare a fct
  function greeting(){
    return "Good Evening"
  }

  return(
    <div>
    <h1 style={{textAlign: "center", color:"orange"}}>Welcome to React JS {fullname}</h1>
    <p>{greeting()}lets get familiar with JSX element </p>
    <figure className='introimg'>
      <img src={land1}/>
    </figure>
    {/*  */}
    <section className='cardcontainer'>
      <User image={manavatar} name='Peter' date='07/06/24' comments='Great Job!' />
      <User image={womanavatar} name='Jessica' date='07/06/24' comments='Super Organized' />
      <User image={busmanavatar} name='Jason' date='07/06/24' comments='Dedicated Businessman' />
    </section>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
