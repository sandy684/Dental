import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/img.jpg';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERTS IN DENTAL"
                                title="Top-notch dentistry, from Seattle's top dentists."
                                description="Our expert team combines advanced technology with personalized treatment.Trusted by families for exceptional oral health and long lastings."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Top quality dental team
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    State of the art dental services
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Discount on all dental treatment
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;