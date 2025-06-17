
import './Team.scss';
// import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/male doctor.png';
import imgTwo from '../../assets/female doctor.png';
import imgThree from '../../assets/male doctor.png';
import imgFour from '../../assets/female doctor.png';

const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Sarathi'
        },
        {
            'img': imgTwo,
            'name': 'Subramaniyam'
        },
        {
            'img': imgThree,
            'name': 'Sundari'
        },
        {
            'img': imgFour,
            'name': 'Keerthana'
        }
    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        {/* <SectionTitle 
                            subTitle="Meet our Team"
                            title="Get to know the dentalist
                            dental Team"
                        /> */}
                    </div>

                    {/* <div className="col-lg-5">
                        <p className='pt-5'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    </div> */}
                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt="" />
                                    </div>
                                    <h3>{team.name}</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;