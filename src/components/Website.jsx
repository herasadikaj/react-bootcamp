import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import "./website.css";

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
      <Footer/>
    </div>
)
}

export default Website;