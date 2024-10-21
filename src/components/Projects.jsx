// Projects.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard"; 
import FilterB from "./FilterB"; 
import ProjectModal from "./Modal"; 
import "./website.css";

function Projects() {
  const projectArr = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY16Dhb73qHM2G2IbT47n8xr5LeZotzO_Gqg&s",
      title: "Notes App",
      description: "React Notes App with login and registration functionality.",
      category: "web-development",
      repository: "https://github.com/herasadikaj/notes-react",
      info:"Developed a user-friendly React Notes App with secure login and registration functionality. Utilized React hooks (useState and useEffect) for managing state and side effects."

    },
    {
      id: 2,
      image: "https://www.shutterstock.com/image-vector/search-documents-database-by-users-260nw-2110333022.jpg",
      title: "Product App",
      description: "Responsive product management UI using React.js and React Router.",
      category: "web-development",
      repository: "https://github.com/herasadikaj/scandiweb-front",
      info:"Developed a responsive product management UI using React.js, CSS, and React Router. Utilized React hooks (useState and useEffect) for managing state and handling side effects related to product data and form inputs."
    },
    {
      id: 3,
      image: "https://sherburninelmet.co.uk/wp-content/uploads/2023/10/The-Pet-Store-Logo-380x380.jpg.webp",
      title: "PetStore App",
      description: "Responsive pet store UI using React.js and Tailwind CSS.",
      category: "web-development",
      repository: "https://github.com/herasadikaj/petShop-react",
      info:"Developed a responsive pet store UI using React.js, Tailwind CSS, and React Router. Leveraged React hooks (useState and useEffect) for managing state and handling side effects, such as modal visibility and search functionality."
    },
    {
      id: 4,
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/45/47/db/4547db67-b50c-8255-5b78-2c324f383d34/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/1200x630wa.png",
      title: "CineLovers",
      description: "Cinema website providing movie listings, showtimes, and booking options.",
      category: "web-development",
      repository: "https://github.com/herasadikaj/CineLovers",
      info:"This project is a cinema website designed to provide users with information about  current movies, showtimes, and booking options. It includes features such as browsing movie listings, viewing detailed information about each movie, checking showtimes, and booking tickets online."
    },
    {
      id: 5,
      image: "https://play-lh.googleusercontent.com/1BxX6Lx_smm5TWqhySt7EaZ2aD0DWSINBAFkbzx_gdzwvRWdOAAdXmCZXMio-xSTmnc=w526-h296-rw",
      title: "Snake Game",
      description: "Python implementation of the classic Snake game.",
      category: "games",
      repository: "https://github.com/herasadikaj/snake-game",
      info:"The code is a Python implementation of the classic Snake game. The code is a Python implementation of the classic Snake game. The game is played on a grid-like screen, where the player controls a snake to eat food and grow longer. The objective is to avoid colliding with the boundaries of the screen or the snake's own body"
    },
    {
      id: 6,
      image: "https://www.shutterstock.com/image-vector/inventory-control-concept-vector-illustration-260nw-2115409796.jpg",
      title: "Product BE",
      description: "PHP-based backend for managing product data and RESTful API endpoints.",
      category: "web-development",
      repository: "https://github.com/herasadikaj/scandiweb-back",
      info:"Built a PHP-based backend for managing product data, handling form submissions, and ensuring secure data storage. Built a PHP-based backend for managing product data, handling form submissions, and ensuring secure data storage. Implemented RESTful API endpoints for CRUD operations, enabling smooth interaction between the frontend and database."
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projectArr);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const handleFilterChange = (category) => {
    if (category === 'all') {
      setFilteredProjects(projectArr);
    } else {
      setFilteredProjects(projectArr.filter(project => project.category === category));
    }
  };

  
  const handleShowModal = (id) => {
    const project = projectArr.find(project => project.id === id);
    setSelectedProject(project);
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <h2>Projects</h2>
      <FilterB onFilterChange={handleFilterChange} />
      <div className="projects-container"> 
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            category={project.category}
            repository={project.repository}
            onShowModal={handleShowModal} 
          />
        ))}
      </div>

     
      {selectedProject && (
        <ProjectModal 
          show={showModal} 
          handleClose={handleCloseModal} 
          project={selectedProject} 
        />
      )}
    </>
  );
}

export default Projects;
