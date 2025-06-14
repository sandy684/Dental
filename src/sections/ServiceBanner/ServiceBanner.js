import React, { useState } from 'react';
import './ServiceBanner.scss';
import { Link } from 'react-router-dom';

import service1 from '../../assets/07.jpg';
import service2 from '../../assets/02.webp';
import service3 from '../../assets/04.jpg';
import service4 from '../../assets/05.jpg';
import service5 from '../../assets/06.avif';

const serviceData = [
  {
    title: 'General Dentistry',
    description: (
      <>
        <p>
          Our general dentistry services focus on maintaining your overall oral health through regular checkups,
          cleanings, and preventive care. From treating cavities and gum issues to routine exams and X-rays,
          we’re here to keep your smile healthy and confident for life.
        </p>
        <h5 style={{ color: '#0056A0' }}>✅ Things to Do:</h5>
        <ul>
          <li>Brush twice daily with fluoride toothpaste</li>
          <li>Visit your dentist every 6 months</li>
          <li>Floss and rinse regularly</li>
          <li>Report any unusual mouth symptoms early</li>
          <li>Maintain a healthy, low-sugar diet</li>
        </ul>
        <h5 style={{ color: '#D9534F' }}>❌ Things to Avoid:</h5>
        <ul>
          <li>Skipping routine dental appointments</li>
          <li>Smoking or chewing tobacco</li>
          <li>Neglecting small cavities or gum inflammation</li>
          <li>Using your teeth to open objects</li>
          <li>Drinking soda and acidic drinks excessively</li>
        </ul>
      </>
    ),
    image: service1,
  },
  {
    title: 'Tooth Whitening',
    description: (
      <>
        <p>
          Brighten your smile with our professional tooth whitening services. Safe, effective, and fast results
          to help you feel more confident and camera-ready!
        </p>
        <h5 style={{ color: '#0056A0' }}>✅ Things to Do:</h5>
        <ul>
          <li>Brush with non-abrasive toothpaste</li>
          <li>Follow aftercare instructions provided</li>
          <li>Use a straw when drinking colored beverages</li>
          <li>Schedule periodic whitening touch-ups</li>
          <li>Maintain good oral hygiene practices</li>
        </ul>
        <h5 style={{ color: '#D9534F' }}>❌ Things to Avoid:</h5>
        <ul>
          <li>Drinking coffee, tea, or wine immediately after whitening</li>
          <li>Smoking</li>
          <li>Using over-the-counter whitening kits without guidance</li>
          <li>Brushing aggressively</li>
          <li>Consuming heavily pigmented foods frequently</li>
        </ul>
      </>
    ),
    image: service2,
  },
  {
    title: 'Dental Implants',
    description: (
      <>
        <p>
          Dental implants are a long-lasting solution for missing teeth. They look, feel, and function just like
          natural teeth—restoring your confidence and bite strength.
        </p>
        <h5 style={{ color: '#0056A0' }}>✅ Things to Do:</h5>
        <ul>
          <li>Follow post-surgical care instructions</li>
          <li>Eat soft foods during healing period</li>
          <li>Use prescribed medications or mouth rinses</li>
          <li>Attend follow-up appointments regularly</li>
          <li>Maintain meticulous oral hygiene</li>
        </ul>
        <h5 style={{ color: '#D9534F' }}>❌ Things to Avoid:</h5>
        <ul>
          <li>Chewing hard or sticky foods during healing</li>
          <li>Skipping follow-up visits</li>
          <li>Smoking or drinking alcohol</li>
          <li>Poor oral hygiene</li>
          <li>Strenuous physical activity immediately after procedure</li>
        </ul>
      </>
    ),
    image: service3,
  },
  {
    title: 'Root Canal',
    description: (
      <>
        <p>
          A root canal is a tooth-saving treatment that removes infected pulp and restores your tooth’s health.
          Contrary to myths, it's a pain-relieving, comfortable procedure.
        </p>
        <h5 style={{ color: '#0056A0' }}>✅ Things to Do:</h5>
        <ul>
          <li>Take antibiotics and pain relief as prescribed</li>
          <li>Eat soft foods and chew on the opposite side</li>
          <li>Use ice packs to reduce swelling (if needed)</li>
          <li>Return for the final crown placement</li>
          <li>Keep up good brushing and flossing habits</li>
        </ul>
        <h5 style={{ color: '#D9534F' }}>❌ Things to Avoid:</h5>
        <ul>
          <li>Eating until numbness wears off</li>
          <li>Biting down on hard items with treated tooth</li>
          <li>Skipping your final crown appointment</li>
          <li>Ignoring post-treatment discomfort</li>
          <li>Delaying dental hygiene post-procedure</li>
        </ul>
      </>
    ),
    image: service4,
  },
  {
    title: 'Pediatric Dentistry',
    description: (
      <>
        <p>
          Our pediatric dental care is focused on prevention and education—offering gentle, fun experiences
          for children to build a lifetime of healthy smiles.
        </p>
        <h5 style={{ color: '#0056A0' }}>✅ Things to Do:</h5>
        <ul>
          <li>Bring your child for regular dental checkups</li>
          <li>Help them brush and floss properly</li>
          <li>Use fluoride toothpaste (pea-sized amount)</li>
          <li>Make dental visits a positive experience</li>
          <li>Encourage healthy snacks like fruits and veggies</li>
        </ul>
        <h5 style={{ color: '#D9534F' }}>❌ Things to Avoid:</h5>
        <ul>
          <li>Giving too many sugary snacks or drinks</li>
          <li>Using bottles at bedtime</li>
          <li>Skipping early dental visits (start at age 1!)</li>
          <li>Letting kids brush unsupervised too early</li>
          <li>Making dental visits feel like punishment</li>
        </ul>
      </>
    ),
    image: service5,
  },
];


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleBack = () => {
    setSelectedService(null);
  };

  return (
    <section className="services-section section-common section-bg">
      {!selectedService ? (
        <>
          <div className="container main-box" style={{ marginTop: '150px',}}>
            <h2 className="text-center mb-5" style={{ color: '#0056A0', padding: '30px',}}>Our Dental Services</h2>
            <div className="services-grid">
              {serviceData.map((service, index) => (
                <div
                  className="service-card"
                  key={index}
                  onClick={() => setSelectedService(service)}
                >
                  <img src={service.image} alt={service.title} className="service-img" />
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
          </div>

          
          <div className="dental-extra-info" style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f7f9fb' }}>
            <div className="container">
              <h3 style={{ color: '#0056A0', marginBottom: '20px' }}>Caring for Your Smile, at Every Stage</h3>
              <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
                Whether you're visiting for a routine cleaning, a child's first checkup, or a more complex dental procedure, our team is here to make your experience smooth and stress-free. We combine the latest technology with expert care to ensure your entire family feels safe, comfortable, and well cared for of your teeth and of your convenince of the hospitality in stress free of our concern.
              </p>
            </div>
          </div>

          
          <div className="dental-specialists" style={{ padding: '60px 20px', backgroundColor: '#eef6fb' }}>
            <h2 style={{ color: '#0056A0', textAlign: 'center', marginBottom: '40px' }}>Meet Our Specialists</h2>
            <div className="specialists-grid" style={{ display: 'grid', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
              <div className="specialist-box">
                <p><strong>Dr. Vijaya Kumar M.D.S</strong><br />
                  Dr. Keerthi.T M.D.S<br />
                  <span>Pedodontist Specialist (Child Specialist)</span></p>
              </div>
              <div className="specialist-box">
                <p><strong>Dr. Ragavendra M.D.S</strong><br />
                  Dr. Yunus Amin M.D.S<br />
                  <span>Orthodontics Specialist</span></p>
              </div>
              <div className="specialist-box">
                <p><strong>Dr. Wasim Ahamed M.D.S</strong><br />
                  Dr. Naren Kumar M.D.S, FCIP<br />
                  <span>Oral Medicine & Maxillofacial Surgeon Specialist</span></p>
              </div>
              <div className="specialist-box">
                <p><strong>Dr. Samu Fathima M.D.S</strong><br />
                  <span>Oral Medicine & Maxillofacial Radiology Specialist</span></p>
              </div>
              <div className="specialist-box">
                <p><strong>Dr. Yoga Rajan M.D.S</strong><br />
                  <span>Periodontist Specialist</span></p>
              </div>
              <div className="specialist-box">
                <p><strong>Dr. Purushotham M.D.S</strong><br />
                  <span>Endodontist Specialist</span></p>
              </div>
              <div className="specialist-box">
                <p><strong>Dr. Faiz M.D.S</strong><br />
                  Dr. Kiran Kumar. P M.D.S<br />
                  <span>Prosthodontist and Implantologist Specialist</span></p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="service-banner-section sub-box">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-6">
                    <div className="service-banner-text" data-aos="fade-up" data-aos-duration="2000" style={{ marginTop: '150px' }}>
                      <h2>{selectedService.title}</h2>
                      <p>{selectedService.description}</p>
                      <div className="theme-btn">
                        <Link to="/Contact">Book an appointment</Link>
                      </div>
                      <button className="back-btn" onClick={handleBack}>← Back to All Services</button>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-banner-img" data-aos="fade-up" data-aos-duration="2000">
                      <img src={selectedService.image} alt={selectedService.title} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
