import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Button from "./UpButton";
import "./website.css";
import Event from "./EventManager";
const Website = () => {
return(
    <div>
        <Header/>
        <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects/>
      </section>
     <section id="skills">
        <Skills/>
     </section>
       <section id="contact">
        <Contact/>
       </section>
       <section id="event">
        <Event/>
       </section>
       <Button/>
      <Footer/>
    </div>
)
}

export default Website;