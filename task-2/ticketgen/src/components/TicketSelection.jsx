import React, { useState, useEffect } from "react";
import Select from "react-select";

const TicketSelection = ({ nextStep, numberTickets, setNumberTickets, selectedTicket, setSelectedTicket, error, setError }) => {
  const handleSubmit = () => {
    if (!selectedTicket) {
      setError("Please select a ticket.");
      return;
    }
    setError("");
    nextStep();
  };

  const handleSelect = (type) => {
    setSelectedTicket(type);
  };
  const handleNumber = (number) => {
    setNumberTickets(number);
  };
  const options = [
    {
      Price: "Free",
      Type: "Regular Access"
    },
    {
      Price: "$150",
      Type: "VIP Access"
    },
    {
      Price: "$150",
      Type: "VVIP Access"
    },
  ];
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#08252B",
      borderColor: "#07373F",
      color: "white",
      "&:hover": {
        borderColor: "#07373F",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#07373F" : "#08252B",
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#08252B",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  return (
    
      <div className="p-4 sm:p-5 bg-[#08252B] rounded-2xl border-[1px] border-[#07373F]">
      <div className="container fade-in max-w-xl mx-auto p-4 sm:p-6 bg-[#041E23] text-white rounded-2xl border-[1px] border-[#07373F]">
      <div className="flex justify-between flex-col sm:flex-row">
      <h2 className="text-xl font-light mb-2 JejuMyeongjo">Ticket Selection</h2>
      <p className="mb-2 sm:mb-0">Step 1/3</p>
      </div>
      <div className="loading-bar mb-6">
        <div className="filled-bar" style={{ width: "33%" }}></div>
      </div>
      

      <div className="p-4 sm:p-5 bg-[#08252B] rounded-2xl border-[1px] border-[#07373F]">
        <div className="gradientBg text-center py-3 px-3 sm:px-0 rounded-2xl border-[1px] border-[#07373F]">
          <p className="road-rage-regular text-4xl sm:text-6xl">Techember Fest &apos;&apos;25</p>
              <p className="w-[80%] sm:w-[50%] mx-auto text-sm m-2 font-light">
                Join us for an unforgettable at [Event Name]! Secure your spot now.
              </p>
              <span className="hidden sm:flex flex-row justify-center items-center text-sm mb-1 font-light">
                <p>📍[Event Name]!          || March 15, 2025 | 7:00 PM</p>
              </span>
              <span className="flex sm:hidden flex-col gap-1 justify-center items-center text-xs mb-1 mt-6 font-light" style={{ wordSpacing: '0.2em' }}>
                <span className="flex">
              
                <p>04 Rumens road, Ikoyi, Lagos</p>
                </span>
                <p>March 15, 2025 | 7:00 PM</p>
              </span>
          </div>
        <p className="text-sm sm:text-base mb-2 font-light">Select Ticket Type:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#041E23] p-3 border rounded-2xl border-[#07373F]">
          {options.map((type) => (
            <button 
              key={type.Type} 
              className={`cursor-pointer flex flex-col p-2 border-2 rounded-lg transition-all border-[#197686] ${
                selectedTicket === type.Type ? "bg-[#12464E]" : "bg-[#041E23]"
              }`}
              onClick={() => handleSelect(type.Type)}
            >
              <h1 className="mb-2 font-semibold text-lg">{type.Price}</h1>
              <span className="flex flex-col items-start">
                <p className="text-sm uppercase mb-[2px]">{type.Type}</p>
                <p className="text-xs">20/52</p>
              </span>
            </button>
          ))}
        </div>
        <div className="my-4">
          <label className="block text-sm sm:text-base mb-2 font-light">Number of Tickets</label>
          <Select
            value={{ value: numberTickets, label: numberTickets }}
            onChange={(selected) => setNumberTickets(selected.value)}
            options={[...Array(10).keys()].map((num) => ({ value: num + 1, label: `${num + 1}` }))}
            styles={customStyles}
            menuPlacement="bottom"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="JejuMyeongjo text-sm flex flex-col-reverse sm:flex-row justify-between gap-2 sm:gap-0">
          <button className="cursor-pointer w-full sm:w-[48%] bg-transparent border-[1px] border-[#24A0B5] text-[#24A0B5] hover:text-white py-3 rounded-lg hover:bg-[#197686]" onClick={clearStorage}>
            Cancel
          </button>
          <button className="cursor-pointer w-full sm:w-[48%] bg-[#197686] border-[1px] border-[#24A0B5] text-white py-3 rounded-lg hover:bg-transparent" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TicketSelection;
