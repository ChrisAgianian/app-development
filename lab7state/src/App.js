import React from 'react';
import {useState} from 'react';

//----Example 3-----
//list of messages
const messages = ["I think therefore I am", "I have a dream", "Hello my friend"]
/*
// add event listener to next button
const next_btn = document.querySelector('.next_btn')
next_btn.addEventListener('click', function(){
  alert('Next Button')
})
//add event listener to previous button
document.querySelector('.prev_btn').addEventListener('click', function(){
  alert('Previous Button')
})
*/

function App() {
  //set the state
  const [count, setCount] = useState(0)

  //set the state - example 2
  const [counter, setCounter] = useState(1)

  //set the state -  example 3
  const [isOpen, setIsopen] = useState(false)

  //set the state to collect the name - example 4 - initially set as empty string
  //const [name, setName] = useState("")
  //its impractical to keep making individual states for each field instead we use spread to collect multiple data as states
  const [inputdata, setInputdata] = useState({})

  //add eventlistener
  // const incrementbtn = document.querySelector('.incrementbtn')
  // incrementbtn.addEventListener('click', function(){
  //   setCount(count + 1)
  // })

  //function to collect changes of each input data
  const handledata =  function(e){
    const name = e.target.name
    const value = e.target.value
    setInputdata(values => ({...values, [name]:value}))
  }

  //submit function
  const submitform = function(e){
    e.preventDefault()
    alert(`Name: ${inputdata.fullname} \nAge: ${inputdata.age} \n Gender: ${inputdata.gender} 
    \n Suggestions: ${inputdata.usercomments}`)
  }

  return (
   <>
    <h1 className="title">Example 4: Forms</h1>
    <section>
      <form className="signupform" onSubmit={submitform}>
        <fieldset>
          <legend>Sign Up Form</legend>
          <div className="formcontrol">
          <label for="name">Enter your Name</label>
          <input id="name" type="text" placeholder="Type your full name..." 
          name="fullname"
          value = {inputdata.fullname} 
          onChange={handledata}/>
          </div>

          <div className="formcontrol" >
          <label for="age">Enter your Age</label>
          <input id="age" type="number" placeholder="enter your age..."
          name="age"
          min={1}
          max={99}
          value={inputdata.age}
          onChange={handledata} />
          </div>

          <div className="formcontrol" >
          <label for="selectgender">Select your Gender: </label>
          <select
          id="selectgender"
          value={inputdata.gender}
          name="gender"
          onChange={handledata}>

          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
          </select>
          </div>

          <div className="formcontrol" >
          <label for="comments">Suggestions...</label>
          <textarea id="commnets" placeholder="Max 100 characters..."
          maxLength={1000}
          name="usercomments"
          value={inputdata.usercomments}
          onChange={handledata} />
          </div>

          <div className="formcontrol" >
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </section>

    <h1 className="title">Example 1</h1>

    <p>hello there</p>

    <p>The count is = {count} </p>

    <button className="incrementbtn" onClick={function(){setCount(count+1)}}>Increment</button>

    <h1 className="title">Example 2: Slice app</h1>

    <section className="slicecontainer">

      <div className="slicewrapper">
        <div className={counter==1 ? "active":""}>1</div>
        <div className={counter==2 ? "active":""}>2</div>
        <div className={counter==3 ? "active":""}>3</div>
      </div>

      {/* since usestate counter is set to 1 already we do count-1 to start from array index 0 */}
      <p className="displaymsg">Display message {counter} = "{messages[counter-1]}"</p> 

      <div className="groupbtn" >
        <button className="prev_btn" onClick={function(){if(counter>1) setCounter(counter-1)}}>Previous</button>
        <button className="next_btn" onClick={function(){if(counter<3) setCounter(counter+1)}}>Next</button>
      </div>

    </section>

    <h1 className="title">Example 3: open and close button</h1>
    <section className="intro">
    <b>Cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat
    <button onClick={function(){setIsopen(!isOpen)}} >{isOpen ? "Hide" : "Read More"}</button>
    </section>

    <section>
    { isOpen && 
      (
        <div className="readmore" >
      The cat (Felis catus), commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. 
      It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the 
      domestication of the cat occurred in the Near East around 7500 BC.
      </div>
      )
      }
    </section>
      
   </>
  );
}

export default App;
