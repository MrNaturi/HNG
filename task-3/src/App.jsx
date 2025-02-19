import React, { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";

 

const App = () => {
 
  const [text, setText] = useState('');
  const [detectedLang, setDetectedLang] = useState('');


  return (
    <div className="chat-container">
     <TextInput text={text} setText={setText} detectedLang={detectedLang} setDetectedLang={setDetectedLang} />
    </div>
  );
};

export default App;
