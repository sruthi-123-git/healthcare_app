// src/pages/DoctorProfile.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import doctors from "../data/doctors";
import { useNavigate } from 'react-router-dom';

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  
  if (!doctor) return <p>Doctor not found</p>;
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${doctor.id}`);  // navigate to this URL
  };

  return (
    <div>
      <h2 style={{fontFamily: "Bree Serif", color: "#202021ff"}}>{doctor.name}</h2>
      <img src={doctor.image} alt={doctor.name} />
      <p style={{fontFamily: "Bree Serif", fontSize: "16px", color: "#333e48ff"}}><strong>Specialization: </strong>{doctor.specialization}</p>
      <p style={{fontFamily: "Bree Serif", fontSize: "16px", color: "#df2323ff"}}>Availability: {doctor.availability}</p>
      <button type="submit" onClick={handleClick}>Book Appointment</button>
    </div>
  );
}

export default DoctorProfile; // ✅ make sure this line exists
