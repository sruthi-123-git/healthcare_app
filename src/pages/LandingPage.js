import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctors from "../data/doctors";

function LandingPage() {
  const [search, setSearch] = useState("");

  // Filter doctors based on search input (by name or specialization)
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", textAlign: "center"}}>
      <h2 style={{fontFamily: "Bree Serif", fontSize: "28px"}}>List of Doctors</h2>

      <input
        type="text"
        placeholder="Search doctors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "8px",
          width: "100%",
          maxWidth: "400px",
          fontSize: "16px",
          borderRadius: "10px",
          borderColor: "white",
          fontFamily: "Roboto",
        }}
      />

      {filteredDoctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap",  justifyContent: "center" }}>
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              style={{
                borderRadius: "8px",
                padding: "15px",
                width: "200px",
              }}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{fontFamily: "Bree Serif", color: "#202021ff"}}>{doctor.name}</h3>
              <p style={{fontFamily: "Bree Serif", fontSize: "16px", color: "#333e48ff"}}>{doctor.specialization}</p>
              <p style={{fontFamily: "Bree Serif", fontSize: "16px", color: "#df2323ff"}}>
                <strong>{doctor.availability}</strong>
              </p>
              <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LandingPage;
