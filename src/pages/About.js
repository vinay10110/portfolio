import React from 'react'  
import  {Line} from 'rc-progress'
const About = () => {
  
  return (
    <div id='About'>
    <div className="about-section">
    <h1 className="title">About Me</h1>
      <p>Welcome to my <b>portfolio!</b> I'm a passionate full-stack web developer with expertise in utilizing cutting-edge technologies like the <b>MERN stack (MongoDB, Express.js, React.js, Node.js)</b> to craft dynamic and immersive web experiences. With a strong foundation in both front-end and back-end development, I thrive on bringing ideas to life through elegant code and intuitive user interfaces.
My journey in the world of web development began with a curiosity to understand how digital landscapes are constructed and a drive to create solutions that seamlessly integrate form and function. 
Whether it's building robust APIs, designing responsive user interfaces, or optimizing performance for scalability, I approach every project with dedication and a commitment to excellence. 
In addition to technical proficiency, I prioritize clean code practices, adherence to best practices, and a user-centric approach to development. My goal is not just to deliver functional solutions, but to create experiences that resonate with users and drive tangible results for businesses.
Beyond the realm of coding, I'm a lifelong learner who thrives on exploring new technologies and methodologies. 
<b>Thank you for visiting my portfolio.</b> </p>
    </div>
    
    <div className="skill-section">
    <h1 className="title">Skills</h1>
    <div className='skill-container '>
      <div className="skill-1 color-container">
      <h2 className="experience-sub-title project-title">Front End</h2>
        <div className="linecontainer">
          React
        <Line percent={88} strokeWidth={4} trailWidth={4} strokeColor='#EEAECA'/>
        </div>
        <div className="linecontainer">
          HTML
        <Line percent={90} strokeWidth={4} trailWidth={4} strokeColor='#EEAECA'/>
        </div>
        <div className="linecontainer">
          CSS
        <Line percent={70} strokeWidth={4} trailWidth={4} strokeColor='#EEAECA'/>
        </div>
        <div className="linecontainer">
         JavaScript
        <Line percent={77} strokeWidth={4} trailWidth={4} strokeColor='#EEAECA'/>
        </div>
      </div>
      <div className="skill-2 color-container">
      <h2 className="experience-sub-title project-title">Back End</h2>
      <div className="linecontainer">
        Node.js
        <Line percent={70} strokeWidth={4} trailWidth={4} strokeColor='#EEAECA'/>
        </div>
        <div className="linecontainer">
          MongoDB
        <Line percent={95} strokeWidth={4} trailWidth={4} strokeColor='#EEAECA'/>
        </div>
        <div className="linecontainer">
          MySQL
        <Line percent={90} strokeWidth={4} trailWidth={4} strokeColor='#EEAECA'/>
        </div>
        <div className="linecontainer">
         Express
        <Line percent={87} strokeWidth={4} trailWidth={4} strokeColor='#EEAECA'/>
        </div>
      </div>
  </div>
    </div>
    
  </div>
  )
}

export default About
