import React, { useState, useEffect } from 'react';

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
      At PRS Dental Care, General Dentistry forms the cornerstone of lifelong oral wellness. Our approach goes beyond basic cleaning and checkups—we focus on personalized care that prevents dental problems before they arise. Every patient receives a thorough dental examination, diagnostic X-rays, and professional cleanings tailored to their oral health needs. We aim to detect early signs of decay, gum disease, or other concerns and treat them with precision.
    </p>
    <p>
      Our experienced dental team is committed to delivering comprehensive solutions with a compassionate touch. From fillings and crowns to preventive fluoride treatments and gum health maintenance, we ensure your teeth and gums remain in excellent condition. With a strong emphasis on education and comfort, we empower patients with the knowledge and tools they need to take charge of their oral health at every stage of life.
    </p>
    <p>
      Step into a practice where your comfort and confidence come first. Whether it’s your first visit or your fiftieth, we’re here to keep your smile healthy, beautiful, and strong—because great oral health is the key to your overall well-being.
    </p>
  </>
),

    image: service1,
  },
  {
    title: 'Tooth Whitening',
    description: (
  <>
    <p>
      A bright smile speaks volumes—and at PRS Dental Care, our professional tooth whitening services are designed to help you express your best self. Using clinically approved whitening systems, we safely and effectively lighten stains caused by coffee, tea, wine, tobacco, and aging. Unlike over-the-counter solutions, our whitening is customized for your smile, ensuring stunning results with minimal sensitivity.
    </p>
    <p>
      During your visit, we assess the condition of your teeth and determine the best whitening method for your enamel and goals. The treatment is quick, pain-free, and provides immediate visual improvement—perfect for weddings, photoshoots, or simply boosting your daily confidence. We also provide guidance for post-treatment care to maintain your brighter smile longer.
    </p>
    <p>
      Reclaim your sparkle in just one visit. With our tooth whitening services, you’re not just enhancing aesthetics—you’re renewing self-esteem and leaving a lasting impression.
    </p>
  </>
),

    image: service2,
  },
  {
    title: 'Dental Implants',
   description: (
  <>
    <p>
      Missing teeth can impact everything from your speech to your self-confidence. At PRS Dental Care, our dental implant solutions offer a permanent, natural-looking way to restore your smile. Dental implants are titanium posts placed into the jawbone, acting as artificial roots that support crowns, bridges, or dentures. They provide unmatched stability and closely mimic the function and appearance of natural teeth.
    </p>
    <p>
      The process begins with a thorough consultation and digital imaging to assess bone density and design a custom treatment plan. Once placed, the implant bonds with the jawbone through a process called osseointegration, creating a strong, durable foundation. After healing, a beautifully crafted crown or prosthetic is attached, completing your renewed smile.
    </p>
    <p>
      Whether you’re missing a single tooth or need full-arch restoration, dental implants restore not just your bite—but your quality of life. With proper care, implants can last a lifetime, making them a smart, long-term investment in your health and happiness.
    </p>
  </>
),

    image: service3,
  },
  {
    title: 'Root Canal',
    description: (
  <>
    <p>
      A root canal may sound intimidating, but it’s actually a modern, effective way to save a severely infected or damaged tooth. At PRS Dental Care, we perform root canal therapy with the highest standards of comfort and precision. This procedure eliminates infection from within the tooth, preserving its structure and function—often in just one or two visits.
    </p>
    <p>
      During the treatment, the inflamed pulp is removed, the canals are carefully cleaned and shaped, and the space is sealed with a biocompatible material. The tooth is then restored with a crown or filling to protect it from further damage. Most patients experience immediate relief from pain and a quick return to daily life.
    </p>
    <p>
      Thanks to advanced techniques and gentle care, root canals are no longer something to fear—they’re something to feel grateful for. Let us help you preserve your natural teeth and restore comfort to your smile.
    </p>
  </>
),

    image: service4,
  },
  {
    title: 'Pediatric Dentistry',
    description: (
  <>
    <p>
      Establishing healthy dental habits from a young age is essential—and our pediatric dentistry services are designed to do just that. At PRS Dental Care, we create a friendly, positive environment where children feel at ease and excited about visiting the dentist. Our gentle approach is backed by advanced training in child-specific dental care, ensuring every little patient receives the attention they deserve.
    </p>
    <p>
      We offer a full range of pediatric services including cleanings, fluoride applications, sealants, cavity prevention, and early orthodontic guidance. From a baby’s first tooth to teenage dental milestones, we walk with families every step of the way. Our team also educates parents on effective home care, diet, and habits that support strong, cavity-free smiles.
    </p>
    <p>
      With a focus on prevention and positivity, we aim to make dental care a fun and fear-free part of growing up. Because every child deserves to smile with confidence—now and for years to come.
    </p>
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
  const [fadeUpClass, setFadeUpClass] = useState('');
useEffect(() => {
  setTimeout(() => {
    setFadeUpClass('fade-up-animation');
  }, 500); // delay just to let DOM settle
}, []);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <section className="services-section section-common section-bg">
      {!selectedService ? (
        <>
          <div className="container main-box" data-aos="fade-up" data-aos-duration="2000" style={{ marginTop: '150px' }}>

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

          
          <div className="dental-extra-info"  data-aos="fade-up" data-aos-duration="2000" style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f7f9fb' }}>
            <div className="container">
              <h3 style={{ color: '#0056A0', marginBottom: '20px' }}>Caring for Your Smile, at Every Stage</h3>
              <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
                Whether you're visiting for a routine cleaning, a child's first checkup, or a more complex dental procedure, our team is here to make your experience smooth and stress-free. We combine the latest technology with expert care to ensure your entire family feels safe, comfortable, and well cared for of your teeth and of your convenince of the hospitality in stress free of our concern.
              </p>
            </div>
          </div>

          
          <div className="dental-specialists " data-aos="fade-up" data-aos-duration="2000" style={{ padding: '60px 20px', backgroundColor: '#eef6fb' }}>
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
                      <div className="theme-btn"  style={{ marginBottom: '40px' }}>
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
