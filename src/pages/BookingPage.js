// src/pages/BookingPage.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import doctors from "../data/doctors";

function BookingPage() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  const [form, setForm] = useState({ name: "", email: "", datetime: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!doctor) return <p>Doctor not found</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px"}}>
      <h2 style={{fontFamily: "Bree Serif", color: "#202021ff"}}>Book Appointment with {doctor.name}</h2>

      {submitted ? (
        <p>Thank you! Your appointment has been booked.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ display: "block", marginBottom: "10px", fontFamily: "Roboto" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ display: "block", marginBottom: "10px", fontFamily: "Roboto" }}
          />
          <input
            type="datetime-local"
            name="datetime"
            value={form.datetime}
            onChange={handleChange}
            required
            style={{ display: "block", marginBottom: "10px", fontFamily: "Roboto" }}
          />
          <button type="submit" style={{textAlign: "center"}}>Confirm Appointment</button>
        </form>
      )}
    </div>
  );
}

export default BookingPage; // ✅ IMPORTANT
