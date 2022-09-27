import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("useEffect called");
  //   setInterval(()=>{
  //     setCount((prevState)=> prevState + 1)
  //   }, 1000)
  // }, []);

  useEffect(() => {
    document.title = text;
  }, [text])

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  })

  console.log("Component rendering");

  return <div className="container">
 <button onClick={(()=> setCount((prevState) => prevState + 1))} > I've been clicked  {count} times</button>
 <br></br><br></br>
  <input type="text"
  placeholder="Type away...."
  onChange={(e) => setText(e.target.value)}/>
  <DogPics/>
  </div>
 
}

export default App;