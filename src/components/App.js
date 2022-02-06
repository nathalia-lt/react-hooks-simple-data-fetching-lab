// create your App component here
import React, { useState, useEffect } from "react";


function App(){
    const [imageDog, setImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    
        fetch("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
        .then((response) => response.json())
        .then((data) => {
             setImage(data.message);
             setIsLoaded(true);
          });
      }, []);
    
    
if (!isLoaded) return <p>Loading...</p>;

return <img scr={imageDog} alt="A Random Dog" />;

    }



export default App