import AboutUs from '../AboutUs/AboutUs';
import Hero from '../Hero/Hero';
import OurServices from '../OurServices/OurServices';
import Planning from '../Planing/Planning';
import Process from '../Process/Process';
import TeamMember from '../TeamMember/TeamMember';
const Home = () => {
    return (
      <div className="pt-2">
        <section id="home" className="h-screen  flex items-center justify-center">
          <Hero></Hero>
        </section>
  
        <section id="about" className="h-screen  flex items-center justify-center">
          <AboutUs></AboutUs>
        </section>
  
        <section id="services" className="h-screen flex items-center justify-center">
          <OurServices></OurServices>
        </section>
  
        <section id="process" className="h-screen  flex items-center justify-center">
          <Process></Process>
          
        </section>
        <section>
        <Planning></Planning>
        </section>
        <section id="blog" className="h-screen  flex items-center justify-center">
          <TeamMember></TeamMember>
        </section>
  
        <section id="contact" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Contact Section</h1>
        </section>
      </div>
    );
  };
  
  export default Home;
  