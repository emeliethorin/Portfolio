import "../contactform.css";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div className="contact-form">
      <h2 className="contact-heading">Contact me</h2>
      {submitted && <p style={{ color: "green" }}>Message sent!</p>}
      <form onSubmit={handleSubmit}>
        <input className="input-field"
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input className="input-field"
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea className="input-message"
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="submit-btn" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
