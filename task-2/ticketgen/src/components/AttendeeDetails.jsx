import React, { useState } from "react";
import "./../styles/AttendeeDetails.css";

const AttendeeDetails = ({ nextStep, prevStep, name, setName, 
  email, setEmail, 
  specialRequest, setSpecialRequest, 
  photo, setPhoto, 
  error, setError  }) => {

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

      const uploadedImage = await res.json();
      setPhoto(uploadedImage.url); 
      console.log("Uploaded URL:", uploadedImage.url);
    } catch (err) {
      setError("Image upload failed.");
      console.error(err);
    }
  };

  const handleSubmit = () => {
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
    <div className="container fade-in">
      <h2>Attendee Details</h2>

      <label>Upload Profile Photo</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {photo && <p>Uploaded: <a href={photo} target="_blank">View Image</a></p>}

      <label htmlFor="name">Enter Your Name</label>
      <input 
        id="name"
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      
      <label htmlFor="email">Enter Your Email</label>
      <input 
        id="email"
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="special">Special Request</label>
      <input 
        id="special"
        type="text" 
        placeholder="Special Request" 
        value={specialRequest} 
        onChange={(e) => setSpecialRequest(e.target.value)}
      />
      
      {error && <p className="error">{error}</p>}

      <div className="footer">
        <button className="back-btn" onClick={prevStep}>Back</button>
        <button className="next-btn" onClick={handleSubmit}>Get My Free Ticket</button>
      </div>
    </div>
  );
};

export default AttendeeDetails;
