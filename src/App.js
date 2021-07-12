import TextTyper from './components/TextTyper/TextTyper';
import Intro from './components/Introduction/Intro';
import Project from './components/Project/Project';
import WorldVision from './Images/WorldVision.png';
import SEProject from './Images/SE_project.png';
import HCI from './Images/HCI_Project.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <TextTyper 
        text = "Hello, my name is Benjamin!"
        subtitle = "Welcome :)"
      />
      <Intro />
      <h1>
        Project Showcase
      </h1>
      <br />
      <Project 
        title = "NetBug/WorldVision"
        image = {WorldVision}
        description = "Project done for the course Introduction to Web Programming on IBU. The project is a web news website with a custom API made in PHP and FlightPHP. The project has seasion management using JWT and supports features like adding comments, searching articles for users. Admins have the ability to add articles, delete articles, add aditional content in the form of images, add catefories and add custom tags to different articles. It is a oversimplified vesrion of a real news website. Frontend was done in vanilla HTML, CSS and Javascript."
      />
      <hr />
      <Project 
        title = "SE Project - Inventory Management System"
        image = {SEProject}
        description = "Project done for the course Software Engeneering on IBU. It is a simple app alowing users to monitor inventory. The goal of this project was to showcase diferent development patterns.We have used the following: Layered Architectural Pattern, Builder Pattern: DAO, Builder Pattern: Singleton and Behavioral Pattern: Composite  .The users have the ability to add products, place orders, add customers, add suppliers and monitor all products in real time. The project was realized using PHP and FlightPHP for backend and HTML, CSS and JavaScript for frontend.The project was done in colaboration with my fellow colledge coleague Amela Kospo (https://github.com/KospoAmela)"
      />
      <hr />
      <Project 
        title = "HCI Project - Design Showcase for a News Portal"
        image = {HCI}
        description = "Project done for the course Introduction to Human Computer Interaction on IBU. It is a simple design showcase of the design of a news website with a custom dyslexic font for easier reading for people with reading dissabilities. The project was realized with ReactJS."
      
      />
      <Project 
      
      />

    </div>
  );
}

export default App;
