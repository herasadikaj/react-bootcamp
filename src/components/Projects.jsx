import React from "react";
import "./website.css";
import Buttons from './FilterB';

const Projects = () => {
  const handlePopup = (event) => {
    const popup = event.currentTarget.querySelector('.popuptext');
    popup.classList.toggle('show');
  };

  return (
    <div>
      <h2>Projects</h2>
        <Buttons/>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card" data-category="web-development">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY16Dhb73qHM2G2IbT47n8xr5LeZotzO_Gqg&s" alt="Project 1" />
          <h3>Notes App</h3>
          <p>React Notes App with login and registration functionality.</p>
          <a href="https://github.com/herasadikaj/notes-react" target="_blank" rel="noopener noreferrer">Repository</a>
          <div className="popup" onClick={handlePopup}>
            More info
            <span className="popuptext">Developed a user-friendly React Notes App with secure login and registration functionality. Utilized React hooks (useState and useEffect) for managing state and side effects.</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card" data-category="web-development">
          <img src="https://www.shutterstock.com/image-vector/search-documents-database-by-users-260nw-2110333022.jpg" alt="Project 2" />
          <h3>Products App</h3>
          <p>Responsive product management UI using React.js and React Router.</p>
          <a href="https://github.com/herasadikaj/scandiweb-front" target="_blank" rel="noopener noreferrer">Repository</a>
          <div className="popup" onClick={handlePopup}>
            More info
            <span className="popuptext">Developed a responsive product management UI using React.js, CSS, and React Router. Utilized React hooks (useState and useEffect) for managing state and handling side effects related to product data and form inputs.</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card" data-category="web-development">
          <img src="https://sherburninelmet.co.uk/wp-content/uploads/2023/10/The-Pet-Store-Logo-380x380.jpg.webp" alt="Project 3" />
          <h3>PetStore App</h3>
          <p>Responsive pet store UI using React.js and Tailwind CSS.</p>
          <a href="https://github.com/herasadikaj/petShop-react" target="_blank" rel="noopener noreferrer">Repository</a>
          <div className="popup" onClick={handlePopup}>
            More info
            <span className="popuptext">Developed a responsive pet store UI using React.js, Tailwind CSS, and React Router. Leveraged React hooks (useState and useEffect) for managing state and handling side effects, such as modal visibility and search functionality.</span>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card" data-category="web-development">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/45/47/db/4547db67-b50c-8255-5b78-2c324f383d34/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/1200x630wa.png" alt="Project 4" />
          <h3>CineLovers</h3>
          <p>Cinema website providing movie listings, showtimes, and booking options.</p>
          <a href="https://github.com/herasadikaj/CineLovers" target="_blank" rel="noopener noreferrer">Repository</a>
          <div className="popup" onClick={handlePopup}>
            More info
            <span className="popuptext"> This project is a cinema website designed to provide users with information about current movies, showtimes, and booking options. It includes features such as browsing movie listings, viewing detailed information about each movie, checking showtimes, and booking tickets online.</span>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project-card" data-category="games">
          <img src="https://play-lh.googleusercontent.com/1BxX6Lx_smm5TWqhySt7EaZ2aD0DWSINBAFkbzx_gdzwvRWdOAAdXmCZXMio-xSTmnc=w526-h296-rw" alt="Project 5" />
          <h3>Snake Game</h3>
          <p>Python implementation of the classic Snake game.</p>
          <a href="https://github.com/herasadikaj/snake-game" target="_blank" rel="noopener noreferrer">Repository</a>
          <div className="popup" onClick={handlePopup}>
            More info
            <span className="popuptext">The code is a Python implementation of the classic Snake game. The game is played on a grid-like screen, where the player controls a snake to eat food and grow longer. The objective is to avoid colliding with the boundaries of the screen or the snake's own body.</span>
          </div>
        </div>
        {/*Project 6*/}
        <div className="project-card" data-category="web-development">
                <img src="https://www.shutterstock.com/image-vector/inventory-control-concept-vector-illustration-260nw-2115409796.jpg" alt="Project 6"/>
                <h3>Product BE</h3>
                <p>PHP-based backend for managing product data and RESTful API endpoints.</p>
                <a href="https://github.com/herasadikaj/scandiweb-back" rel="noopener noreferrer">Repository</a>
                <div className="popup"  onClick={handlePopup}>More info
                    <span className="popuptext">Built a PHP-based backend for managing product data, handling form submissions, and ensuring secure data storage. 
                        Built a PHP-based backend for managing product data, handling form submissions, and ensuring secure data storage. Implemented RESTful API endpoints for CRUD operations, enabling smooth interaction between the frontend and database.</span>
                </div>
            </div>
      
      </div>
    </div>
  );
};

export default Projects;
