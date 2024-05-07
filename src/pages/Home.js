import githu from '../assets/github.png';
import linked from '../assets/linkedin.png';
import profilepic from '../assets/profile-pic.png';
import resu from '../assets/Resume(NEW).pdf';
export default function Home() {
  return (
    <div id='home'>
    <section id="profile" className="flex justify-center items-center h-screen">
    <div className="section__pic-container">
    <img src={profilepic} alt="vinay" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">SAI VINAY CHAKRAVARTHI</h1>
      <p className="section__text__p2">Full Stack Developer</p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onClick={() => window.open(resu)}
        >
          Download CV 
        </button>
         <button className="btn btn-color-1" >
          Contact Info
        </button>
       
      </div>
      <div id="socials-container">
        <img
          src={linked}
          alt="My LinkedIn profile"
          className="icon"
          onClick={() => window.location.href='https://www.linkedin.com/in/vinaychakravarthi10110'}
        />
        <img
          src={githu}
          alt="My Github profile"
          className="icon"
          onClick={() => window.location.href='https://github.com/vinay10110'}
        />
      </div>
    </div>
  </section>
  </div>
  )
}