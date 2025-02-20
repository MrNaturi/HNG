import React, { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import SummarizeButton from "./components/SummarizeButton";
import OutputDisplay from "./components/OutputDisplay";
import Translation from "./components/Translation";

 

const App = () => {
 
  const [text, setText] = useState('');
  const [detectedLang, setDetectedLang] = useState('');
  const [rawLang, setRawLang] = useState('en');
  const [summarizedText, setSummarizedText] = useState('');
  const [translatedText, setTranslatedText] = useState('')


  return (
    <div className="chat-container">
      <OutputDisplay summarizedText={summarizedText} />
     <TextInput text={text} setText={setText} detectedLang={detectedLang} setDetectedLang={setDetectedLang} setRawLang={setRawLang}/>
     {text.length >= 150 && detectedLang === " English" && (
  <SummarizeButton 
    text={text} 
    summarizedText={summarizedText} 
    setSummarizedText={setSummarizedText} 
  />

)}
  <Translation text={text} translatedText={translatedText} setTranslatedText={setTranslatedText} rawLang={rawLang}/>
    </div>
  );
};

export default App;
