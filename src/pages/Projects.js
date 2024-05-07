import React from 'react';
import p1 from '../assets/Screenshot 2024-04-24 085810.png'
import p2 from '../assets/Screenshot 2024-04-24 090321.png'
import p3 from '../assets/Screenshot 2024-04-28 171334.png'
const Projects = () => {
  return (
  <div id='Projects'>
    <section id="projects">
    <p className="section__text__p1">Browse My Recent</p>
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={p1}
              alt="Project 1"
              className="project-img"
            />
          </div>
          <div classname='project-content'>
          <h2 className="experience-sub-title project-title">Weather Application</h2>
          <p>	Developed a weather application using Reat.js to showcase the current weather conditions and 7-day forecast for various cities, utilizing the OpenWeatherAPI.
	Integrated OpenWeatherAPI to fetch and parse real-time weather data, providing accurate and up-to-date information to users.
	Parameters such as Humidity, Pressure, Wind speed, Temperature, Visibility are shown in the weather details.
	Created a docker image and deployed on render.
</p>
          <div className="btn-container">
           <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
                   window.location.href="https://github.com/vinay10110/Weather-Application"
              }}
            >
              Github
            </button>
            
            <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
        window.location.href="https://weatherapp-latest.onrender.com"
              }}
            >
              Live Demo
            </button>
            </div>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={p2}
              alt="Project 1"
              className="project-img"
            />
          </div>
          <div>
          <h2 className="experience-sub-title project-title">Blog Application</h2>
          <p>	Developed a full stack blog application using MongoDB, React.js, Express and Node.js enabling users to post and manage their articles on the website
	Implemented CRUD(create, read, update & delete) operations to allow users to create posts, view existing posts, update their posts and delete unwanted posts.
	Used JWT (JSON web tokens) tokens to protect the users profile data.
	Created and deployed on Vercel.
</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
                window.location.href="https://github.com/vinay10110/Blog-Application"
                      }}
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
                window.location.href="https://blog-application-wj24.vercel.app"
                      }}
            >
              Live Demo
            </button>
            </div>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={p3}
              alt="Project 1"
              className="project-img"
            />
          </div>
          <div>
          <h2 className="experience-sub-title project-title">Finance Application</h2>
          <p>	Developed a finance application using TypeScript for frontend and Express.js for backend, with MongoDB for efficient data storage and retrieval.
 Utilized Recharts library to create compelling data visualizations, enabling users to interpret financial data effectively.
 Integrated machine learning algorithm  linear regression, to provide predictive insights, enhancing decision-making capabilities for users.</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
                window.location.href="https://github.com/vinay10110/financeapp"
                      }}
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
                window.location.href="https://financeapp-topaz.vercel.app"
                      }}
            >
              Live Demo 
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  </div>
  );
}



export default Projects;