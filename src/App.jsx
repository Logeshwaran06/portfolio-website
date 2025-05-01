import './App.css';
import React, { useRef, useState } from "react";
import Swal from 'sweetalert2';

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const skills = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Node JS", "Express JS", "MongoDB", "Python", "Machine Learning"];

  const projectDetails = [
    { 
      heading: "E-commerce website", 
      discription: "Developed a mini e-commerce platform with user authentication, product listing, cart management, and checkout",
      viewProject: "View Project"
    },

    {
      heading: "CRUD Application",
      discription: "Built a full-stack application with Create, Read, Update, and Delete functionalities, implementing RESTful APIs and authentication.",
      viewProject: "View Project"
    },

    { 
      heading: "To Do App", 
      discription: "A feature-rich To-Do app built with the MERN stack, allowing users to add, edit, delete, and manage tasks efficiently. It features a responsive UI, persistent MongoDB storage, and Lucide Icons for a modern look",
      viewProject: "View Project"
    },

    {
      heading: "Fruit Recognition using Machine Learning", 
      discription: "A machine learning model that identifies fruits using a diffusion map. Currently developing a fruit recognition system using machine learning. Planning to improve accuracy and deploy as a web app", 
      viewProject: "View Project"
    },
  ];

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  function viewCV() {
    window.open('https://logeshwaran-resume.netlify.app/resume.pdf', '_blank');
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4f511ce0-76ee-41e4-870b-6bd5396881b5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      console.log(json);
      event.target.reset(); // Reset the form after successful submission
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error"
      });
    }
  };

  const clickMenuIcon = () => {
    setIsOpen(true);
  };

  const handleCloseIcon = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container">
      {/* Header section */}
      <div className='header'>
        <h2 className='Name textHeading'>Logeshwaran</h2>

        <nav className='navHeader'>
          <ul className='navBar'>
            <li className='navList'><a onClick={(e) => { e.preventDefault(); handleScroll(homeRef); }} className='navTitle colors accentColor' href='#home'>Home</a></li>
            <li className='navList'><a onClick={(e) => { e.preventDefault(); handleScroll(aboutRef); }} className='navTitle colors accentColor' href='#about'>About</a></li>
            <li className='navList'><a onClick={(e) => { e.preventDefault(); handleScroll(projectsRef); }} className='navTitle colors accentColor' href='#projects'>Projects</a></li>
            <li className='navList'><a onClick={(e) => { e.preventDefault(); handleScroll(contactRef); }} className='navTitle colors accentColor' href='#contact'>Contact</a></li>
          </ul>
        </nav>

        <ul className='contactList'>
          <li className='contactInfo'><a className='colors' href="https://www.linkedin.com/in/logeshmohan"><icon className='icons accentColor linkedIn'>LinkedIn</icon></a></li>
          <li className='contactInfo'><a className='colors' href="https://github.com/Logeshwaran06"><icon className='icons accentColor gitHub'>GitHub</icon></a></li>
          <li className='contactInfo'><a className='colors' href="https://wa.me/9080891865"><icon className='icons accentColor gitHub'>WhatsApp</icon></a></li>
        </ul>

        <img src="menuIcon.svg" alt="menu" onClick={clickMenuIcon} className="menuIcon" width='40px' height='40px' />
      </div>

      {isOpen && (
        <div className="slideContainer">
          <div className='slideHeader'>
            <nav className='slideNavHeader'>
              <ul className='slideNavBar'>

                <img src="closeIcon.svg" alt="" className="closeIcon" width='40px' onClick={handleCloseIcon} />

                <hr width="100%" />

                <li className='slideNavList'><img src="home_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="slideSectionIcon" /><a onClick={(e) => { e.preventDefault(); handleScroll(homeRef); setIsOpen(false); }} className='slideNavTitle colors accentColor' href='#home'>Home</a></li>
                <li className='slideNavList left2'><img src="person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="" className="slideSectionIcon" width='30px' /><a onClick={(e) => { e.preventDefault(); handleScroll(aboutRef); setIsOpen(false); }} className='slideNavTitle colors accentColor' href='#about'>About</a></li>
                <li className='slideNavList'><img src="text_snippet_25dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="slideSectionIcon" /><a onClick={(e) => { e.preventDefault(); handleScroll(projectsRef); setIsOpen(false); }} className='slideNavTitle colors accentColor' href='#projects'>Projects</a></li>
                <li className='slideNavList'><img src="phoneIcon.svg" alt="" className="slideSectionIcon" /><a onClick={(e) => { e.preventDefault(); handleScroll(contactRef); setIsOpen(false); }} className='slideNavTitle colors accentColor' href='#contact'>Contact</a></li>
              </ul>
            </nav>

            <ul className='slideContactList'>
              <hr width="80%" />
              <li className='slideContactInfo'><a className='colors' href="https://www.linkedin.com/in/logeshmohan"><icon className='icons accentColor linkedIn'>LinkedIn</icon></a></li>
              <li className='slideContactInfo'><a className='colors' href="https://github.com/Logeshwaran06"><icon className='icons accentColor gitHub'>GitHub</icon></a></li>
              <li className='slideContactInfo'><a className='colors' href="https://github.com/Logeshwaran06"><icon className='icons accentColor gitHub'>WhatsApp</icon></a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Home section */}
      <div ref={homeRef} id="home" className="home">
        <div className='content'>
          <h1 className="contentName textHeading">Hi, <br /> <span className="newLine">I'm Logeshwaran P 👋 </span> </h1>
          <p className='description textBody'>
            I am a passionate MERN stack developer and AI enthusiast with a strong 
            foundation in web development and machine learning. I enjoy building interactive applications, solving
            technical problems, and continuously expanding my skill set. Currently, I am working on full-stack projects 
            and exploring AI-driven solutions to enhance user experiences.
          </p>
          <div className='moreDetails'>
            <div className='divDetails'>
              <img className="details" src='location.svg' />
              <p className='details location textBody'>Theni</p>
            </div>
            <div className='divDetails'>
              <img className="details" src='phoneIcon.svg' />
              <p className='details phoneNo textBody'>9080891865</p>
            </div>
            <div className='divDetails'>
              <img className="details" src='Email.svg' />
              <p className='details mail textBody'>logeshmohan4080@gmail.com</p>
            </div>
            <button onClick={viewCV} className='button1 colors'>View CV</button>
          </div>
        </div>
        <div className='photo'>
          <img className="myPhoto" src='myImage.jpeg' />
        </div>
      </div>

      {/* About section */}
      <div ref={aboutRef} className="about">
        <div className='aboutContent'>
          <h1 className='aboutMe textHeading'>About Me</h1>
          <p className='aboutDescription textBody'>
            Hi, I'm <strong className='accentColor'>Logeshwaran</strong>, a passionate MERN Stack Developer and AI enthusiast.
            I specialize in building web applications using React.js, Node.js, MongoDB, and Express.js.
            I am also exploring AI & ML, aiming to create innovative AI-driven solutions. 
            Currently, I am working on a <strong className='accentColor'>job search aggregator</strong> and an AI-based chatbot.
            My goal is to develop scalable and efficient applications that solve real-world problems.
          </p>
          <div className='skills'>
            <h2 className='mySkills textHeading'>My Skills</h2>
            <ul className='skillList'>
              {skills.map(skill => (
                <li className='skill divBorder'>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div ref={projectsRef} className="projectsDiv">
        <h1 className='projects textHeading'>Projects</h1>
        <div className='project'>
          {projectDetails.map((project, index) => (
            <div key={index} className="projectDiv divBorder">
              <div className="projectContents">
                <h3 className="projectTitle textHeading">{project.heading}</h3>
                <p className="projectDescription">{project.discription}</p>
              </div>
              <div className="projectLinks">
                <a className="projectLink colors accentColor" href='#'>GitHub Repo</a>
                <vr />
                <a className="projectLink colors accentColor" href='#'>Live Link</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="contactContainer">
        <h1 ref={contactRef} className='getInTouch textHeading'>Get in touch</h1>
        <div className="contactDiv">
          
          <div className='contactForm'>
            <form className='form' onSubmit={onSubmit}>
              <h2 className="sendMessage textHeading">Send a message</h2>
              <input className='input' type='text' name='name' placeholder='Enter your name' required />
              <br /><br />
              <input className='input' type='email' name='email' placeholder='Enter your email' required />
              <br /><br />
              <textarea className='input textArea' name='message' placeholder='Enter your message here' required></textarea>
              <br /><br />
              <button className='button colors' type='submit'>Send</button>
            </form>
          </div>

          <div className='contact'>
            <div className='divDetails'>
              <img className="details" src='location.svg' />
              <p className='details location textBody'>Theni</p>
            </div>
            <div className='divDetails'>
              <img className="details" src='phoneIcon.svg' />
              <p className='details phoneNo textBody'>9080891865</p>
            </div>
            <div className='divDetails'>
              <img className="details" src='Email.svg' />
              <p className='details mail textBody'>logeshmohan4080@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h2 className='textHeading'>About Me</h2>
            <p className='textBody'>Passionate web developer skilled in MERN stack, AI, and cybersecurity. Let's build something amazing together!</p>
          </div>
          
          <div className="footer-social">
            <h2 className='textHeading'>Follow Me</h2>
            <div className="social-icons">  
              <a className='colors accentColor' href="https://github.com/Logeshwaran06" target="_blank"><icon className="fab fa-github">GitHub</icon></a>
              <a className='colors accentColor' href="https://www.linkedin.com/in/logeshmohan" target="_blank"><icon className="fab fa-linkedin">LinkedIn</icon></a>
              <a className='colors accentColor' href="https://wa.me/9080891865" target="_blank"><icon className="fab fa-linkedin">WhatsApp</icon></a>
            </div>
          </div>      
        </div>
        <div className="footer-bottom">
          <p className='copyText'>© 2025 Logeshwaran. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </>
  );
}