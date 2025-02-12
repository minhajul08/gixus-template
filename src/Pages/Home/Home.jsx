import AboutUs from '../AboutUs/AboutUs';
import Hero from '../Hero/Hero';
import OurServices from '../OurServices/OurServices';
import Planning from '../Planing/Planning';
import Process from '../Process/Process';
import TeamMember from '../TeamMember/TeamMember';
const Home = () => {
    return (
      <div className="pt-2">
        <section id="home" className="lg:h-screen  flex items-start lg:items-center lg:justify-center">
          <Hero></Hero>
        </section>
  
        <section id="about" className="lg:h-screen  flex items-start lg:items-center lg:justify-center">
          <AboutUs></AboutUs>
        </section>
  
        <section id="services" className="lg:h-screen flex items-start lg:items-center lg:justify-center">
          <OurServices></OurServices>
        </section>
  
        <section id="process" className="lg:h-screen  flex items-start lg:items-center lg:justify-center">
          <Process></Process>
          
        </section>
        <section>
        <Planning></Planning>
        </section>
        <section id="blog" className="flex items-start lg:items-center lg:justify-center">
          <TeamMember></TeamMember>
        </section>
  
        
      </div>
    );
  };
  
  export default Home;
  