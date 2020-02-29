import React, { useState, useRef } from "react";

function App() {
  let [name, setName] = useState("Nate");

  let nameRef = useRef();

  const submitButton = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    console.log(nameRef.current);
    setName(nameRef.current.value);
    console.log(document.getElementById("maaz"));
  };

  return (
    <div className="App">
      <p>{name}</p>
      <div>
        <input type="text" ref={nameRef} id="maaz" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
