/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./website.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul id="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#event">Events</a></li>
        </ul>
      </nav>

      <div className="text-center">
  <h1 className="text-5xl font-bold mb-4">Hera Sadikaj</h1>
  <p>Future Web Developer</p>
  <a href="#projects" className="btn">Click</a> <br /><br />
  <img src="https://i.pinimg.com/564x/c5/6f/58/c56f5806f9abedb2f2793477c0cfa529.jpg" alt="Your Photo" />
</div>

    </header>
  );
};

export default Header;
