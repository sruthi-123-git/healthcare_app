import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
    </div>
  );
}

export default DoctorCard;
