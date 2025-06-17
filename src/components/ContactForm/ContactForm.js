import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    department: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_zp99x2f',
        'template_82pjewb',
        formData,
        'AUk_j79tcGy2P60MS'
      )
      .then(() => {
        alert('✅ Appointment booked! Thank you.');
         // ✅ Message to doctor only
      })
      .catch((error) => {
        alert('❌ Failed to send. Please try again.');
        console.error(error);
      });
  };

//   const sendToDoctorWhatsApp = () => {
//     const { name, email, phone, service, department, message } = formData;
//     const text = `🦷 New Appointment Booking
// 👤 Name: ${name}
// 📧 Email: ${email}
// 📱 Phone: ${phone}
// 🦷 Service: ${service}
// 🏥 Department: ${department}
// 📝 Message: ${message}`;

//     const url = `https://wa.me/919790633757?text=${encodeURIComponent(text)}`;
// window.open(url, '_blank');

  // };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter your name..." required onChange={handleChange} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email address..." required onChange={handleChange} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phone" className="form-control" placeholder="Enter phone number..." required onChange={handleChange} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Service</label>
            <select name="service" className="form-control" required onChange={handleChange}>
              <option value="">Select Service</option>
              <option>Root Canal</option>
              <option>Pediatric Dentistry</option>
              <option>Dental Implants</option>
              <option>General Dentistry</option>
              <option>Tooth Whitening</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Department</label>
            <select name="department" className="form-control" required onChange={handleChange}>
              <option value="">Select Department</option>
              <option>Orthodontics</option>
              <option>Periodontics</option>
              <option>Prosthodontics</option>
              <option>Endodontics</option>
              <option>General Dentistry</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" className="form-control" placeholder="Enter your message..." rows="3" required onChange={handleChange}></textarea>
          </div>
        </div>
        <div className="col-lg-6">
          <button type="submit" className="btn appointment-btn">Book Appointment</button>
        </div>
        <div className="col-lg-6">
          <div className="appointment-call">
            <div className="icon">
              <img src={icon} alt="icon" />
            </div>
            <div className="call-text">
              <p>PRS DENTAL CARE</p>
              <h6>‪+91-7200718607‬</h6>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;