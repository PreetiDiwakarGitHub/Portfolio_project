import React from 'react';
import './projects.css';
import Calculator from '../componet/Assets/Calculator.png'
import Book from '../componet/Assets/Book.png';
import Game from '../componet/Assets/Game.png';
import Menu from '../componet/Assets/Menu.png';
import Image from '../componet/Assets/Image.png';
import Text from '../componet/Assets/Text.png';
import tic from '../componet/Assets/tic.png';

const projectsData = [{
  name: "Calculator",
  description: "This project is a responsive calculator built with HTML, CSS, and JavaScript that performs basic arithmetic operations and includes functions like clear (AC), delete (DEL), and percentage (%), with interactive feedback and expression evaluation using eval().",
  image: Calculator,
  link: "https://calculator-project-wine-theta.vercel.app/",
  tags: ["JavaScript", "HTML", "CSS"]
},

  {
    name: "Book",
    description: "The Book Project on my GitHub is a responsive web application for managing and displaying a collection of books, featuring a searchable list, favorite marking, and detailed information, built with HTML, CSS, JavaScript, and possibly React, using a JSON file for data storage.",
    image: Book,
    link: "https://bookproject-preetidiwakargithubs-projects.vercel.app/",
    tags: ["JavaScript", "HTML", "CSS","React"]
  },
  {
    name: "Tic Tac Toc",
    description: "The Game Project webpage appears to be a React-based app, but no game or features are immediately visible. It may require additional interaction or the enabling of JavaScript to explore its content. ",
    image: tic,
    link: "https://game-project-seven-flax.vercel.app/",
    tags: ["React js"]
  },
  {
    name: "Lorem Text",
    description: "The Lorem Pink project is a tool for generating customizable placeholder text. It appears to replace the standard Lorem Ipsum with other generated text, likely designed to make content testing more engaging. You can adjust the amount of text to generate as needed",
    image: Text,
    link: "https://lorem-pink.vercel.app/",
    tags: ["HTML","CSS", "JAVASCRIPT" ]
  },
  {
    name: "Food-Menu-Website",
    description: "This project is a responsive web app using HTML, CSS, and JavaScript that displays a food menu, enabling users to filter items by meal type (breakfast, lunch, snacks, dinner) with a grid layout that adapts to various screen sizes.",
    image: Menu,
    link: "https://restaurants-menu-six.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Seasons Gallery",
    description: "The Image Code webpage appears to be a React application, likely focused on image-related features or functionalities, though its specific purpose isn't immediately clear from the homepage. You can explore it further.",
    image: Image,
    link: "https://image-code.vercel.app/",
    tags: ["React JS"]
  },
  
];

const List = () => {
  return (
    <div>
      <h1 className="list-title">Our Projects</h1>
      <br />
      <hr />
      <h3 className="list-title">🌟 Explore my projects to see how I've enhanced my skills.🌟</h3>
      <br />
      <br />
      <div className="list-container">
    {projectsData.map((project, index) => (
        <div key={index} className="project-card">
            <div className="project-name">{project.name}</div>
            <img src={project.image} alt={project.name} className="project-image" />
            <a href={project.link} className="project-link">View Project</a>
            <div className="project-content">
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    ))}
</div>

    </div>
  );
};

export default List;