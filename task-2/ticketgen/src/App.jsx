import React, { useState, useEffect } from "react";
import TicketSelection from "./components/TicketSelection";
import AttendeeDetails from "./components/AttendeeDetails";
import Confirmation from "./components/Confirmation";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [specialRequest, setSpecialRequest] = useState(localStorage.getItem("specialRequest") || "");
  const [error, setError] = useState(localStorage.getItem("error") || "");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [selectedTicket, setSelectedTicket] = useState(localStorage.getItem("selectedTicket") || "");
  const [numberTickets, setNumberTickets] = useState(Number(localStorage.getItem("numberTickets")) || 1);
  const [photo, setPhoto] = useState(localStorage.getItem("photo") || null);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("selectedTicket", selectedTicket);
    localStorage.setItem("numberTickets", numberTickets);
    localStorage.setItem("error", error);
    localStorage.setItem("specialRequest", specialRequest);

    photo ? localStorage.setItem("photo", photo) : localStorage.removeItem("photo");
  }, [name, email, selectedTicket, numberTickets, photo, error, specialRequest]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="app">
      <Navbar />

      {step === 1 && (
        <TicketSelection
          nextStep={nextStep}
          selectedTicket={selectedTicket}
          numberTickets={numberTickets}
          setNumberTickets={setNumberTickets}
          setSelectedTicket={setSelectedTicket}
          error={error}
          setError={setError}
        />
      )}
      {step === 2 && (
        <AttendeeDetails
          nextStep={nextStep}
          prevStep={prevStep}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          specialRequest={specialRequest}
          setSpecialRequest={setSpecialRequest}
          photo={photo}
          setPhoto={setPhoto}
          error={error}
          setError={setError}
        />
      )}
      {step === 3 && (
        <Confirmation
          prevStep={prevStep}
          selectedTicket={selectedTicket}
          numberTickets={numberTickets}
          email={email}
          specialRequest={specialRequest}
          photo={photo}
          name={name}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default App;
