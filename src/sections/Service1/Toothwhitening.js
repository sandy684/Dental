import React from 'react';
import './TeethWhitening.scss';
import Footer from '../Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import WhiteningBanner from '../../assets/thooth-whitening.jpg';
import ProcedureImage from '../../assets/dental-cleaning.jpg';
import AftercareImage from '../../assets/brushing-thooth.jpg';

const TeethWhitening = () => {
  return (
    <>
      <Navbar />
      <div className="teeth-whitening-page">

        {/* Section 1: Introduction */}
        <section className="intro" style={{ backgroundImage: `url(${WhiteningBanner})` }}>
          <div className="overlay">
            <div className="container">
              <h1>Professional Tooth Whitening</h1>
              <p>
                Unlock your brightest smile with our advanced whitening treatments. At PRS Dental Care, we deliver safe,
                pain-free, and lasting results that enhance your confidence and appearance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Why Whitening? */}
        <section className="why-whiten">
          <div className="container">
            <h2>Why Opt for Tooth Whitening?</h2>
            <div className="benefits">
              <div className="card">✨ Remove deep stains & discoloration</div>
              <div className="card">😊 Boost self-confidence instantly</div>
              <div className="card">🦷 Gentle, non-invasive procedure</div>
              <div className="card">👨‍⚕ Performed by experienced professionals</div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Whitening Procedure */}
        <section className="procedure">
          <div className="container">
            <h2>Our Step-by-Step Whitening Process</h2>
            <div className="procedure-content">
              <img src={ProcedureImage} alt="Whitening procedure" />
              <ol>
                <li><strong>Consultation:</strong> We evaluate your oral health and desired shade.</li>
                <li><strong>Cleaning:</strong> Plaque and surface stains are removed.</li>
                <li><strong>Gel Application:</strong> Professional-grade whitening gel is applied.</li>
                <li><strong>LED Activation:</strong> Light enhances gel performance safely.</li>
                <li><strong>Results & Aftercare:</strong> Immediate whitening, with care tips provided.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 4: Aftercare & Tips */}
        <section className="aftercare">
          <div className="container">
            <h2>Post-Treatment Care</h2>
            <div className="aftercare-content">
              <img src={AftercareImage} alt="Aftercare" />
              <ul>
                <li>🚫 Avoid coffee, wine, and dark sauces for 48 hours</li>
                <li>🪥 Brush and floss regularly with a whitening-friendly toothpaste</li>
                <li>🚬 Say no to smoking and tobacco</li>
                <li>📅 Schedule touch-up appointments every 6–12 months</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TeethWhitening;