import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    console.log("useEffect");

    setInterval(() => {
      fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        console.log(data)
        setImages(data.message);
        setIsLoaded(false);
      });
    }, 4000)
  
  },[]);

  console.log("render");

  return (
    <div>
      {isLoaded && <h1>Loading ....</h1> }
      {images.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
  );
}

export default DogPics;