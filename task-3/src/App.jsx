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
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div className="chat-container">
      <OutputDisplay summarizedText={summarizedText} translatedText={translatedText}  messages={messages} />
     <TextInput text={text} setText={setText} detectedLang={detectedLang} setDetectedLang={setDetectedLang} setRawLang={setRawLang} setMessages={setMessages} setError={setError}  />
     {text.length >= 150 && detectedLang === " English" && (
  <SummarizeButton 
    text={text} 
    summarizedText={summarizedText} 
    setSummarizedText={setSummarizedText}
    setMessages={setMessages}
    setError={setError}
  />

)}
  <Translation text={text} translatedText={translatedText} setTranslatedText={setTranslatedText} rawLang={rawLang} setMessages={setMessages} setError={setError}/>
  {error && <p className="error">{error}</p>}
    </div>
   
  );
};

export default App;
