import React, { useState } from "react";
import "./../styles/AttendeeDetails.css";
import cloudsvg from "../assets/cloud-download.svg"

const AttendeeDetails = ({ nextStep, prevStep, name, setName, email, setEmail, specialRequest, setSpecialRequest, photo, setPhoto, error, setError }) => {

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      setError("Please choose a file.");
      return;
    }

    setError("");

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "hng-tasks");
    data.append("cloud_name", "dqiufpjad");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dqiufpjad/image/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error("Image upload failed.");
      }

      const uploadedImage = await res.json();
      setPhoto(uploadedImage.url);
      console.log("Uploaded URL:", uploadedImage.url);
    } catch (err) {
      setError("Image upload failed. Please try again.");
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!photo) {
      setError("Please upload a photo first.");
      return;
    }
    if (!name || !email) {
      setError("Name and email are required!");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 bg-[#041E23] text-white rounded-2xl border-[1px] border-[#197686]">
      <div className="flex justify-between">
        <p className="text-xl font-light mb-2 JejuMyeongjo">Attendee Details</p>
        <p>Step 2/3</p>
      </div>
      <div className="loading-bar mb-6">
        <div className="filled-bar" style={{ width: "50%" }}></div>
      </div>
      
      <div className="max-w-lg mx-auto p-4 sm:p-6 bg-[#08252B] text-white rounded-2xl border border-[#197686]">
        <div className="bg-[#052228] p-4 sm:p-6 border border-[#07373F] rounded-2xl">
          <h2 className="text-sm font-semibold mb-4">Upload Profile Photo</h2>
          <label htmlFor="file-upload" className="cursor-pointer bg-[#0E464F] border-[3px] border-[#24A0B5] rounded-2xl flex justify-center items-center h-40 w-40 py-6 mx-auto">
            {photo ? (
              <img src={photo} alt="Profile Preview" className="w-40 h-40 object-contain rounded-2xl" />
            ) : (
            <p className="text-center text-white text-xs flex flex-col items-center gap-3">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="w-15 h-15"
    fill="white"
  >
    <path d="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.83 7.13 7.39 5.75 8.95 4.38 11 4.08V12.15L9.4 10.6L8 12L12 16L16 12L14.6 10.6L13 12.15V4.08Q15.58 4.43 17.29 6.39 19 8.35 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20Z"/>
  </svg>  
  Drag and drop or click to upload
</p>

            )}
            <input type="file" accept="image/*" id="file-upload" className="hidden" onChange={handleFileChange} />
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Enter Your Name*</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded-lg bg-transparent border border-[#07373F] text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Enter Your Email*</label>
            <div className="flex items-center bg-transparent border border-[#07373F] p-2 rounded-lg">
              <input
                id="email"
                type="email"
                className="w-full bg-transparent outline-none text-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="special" className="block text-sm mb-1">Special Request</label>
            <textarea
              rows={3}
              id="special"
              className="w-full p-2 rounded-lg bg-transparent border border-[#07373F] text-white resize-none"
              placeholder="Special Request"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="JejuMyeongjo text-sm flex flex-col-reverse sm:flex-row justify-between gap-4 mt-4">
            <button
              type="button"
              className="cursor-pointer w-full sm:w-[48%] bg-transparent border-[1px] border-[#24A0B5] text-[#24A0B5] py-3 rounded-lg hover:bg-[#197686] hover:text-white"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              type="submit"
              className="cursor-pointer w-full sm:w-[48%] bg-[#197686] border-[1px] border-[#24A0B5] text-white py-3 rounded-lg hover:bg-transparent"
            >
              Get My Free Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;
