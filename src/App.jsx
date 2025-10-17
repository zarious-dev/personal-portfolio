import { useState, useEffect, useRef } from "react";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaLaravel, FaFigma, FaGitAlt, FaGithub, FaUser, FaGraduationCap, FaHeart } from "react-icons/fa";
// import { SiAdobexd } from "react-icons/si";
// import { MdGroups } from "react-icons/md";


function App() {
  const [activeCard, setActiveCard] = useState(null);

  const closeModal = () => setActiveCard(null);

  // close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const modalRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    if (activeCard !== null) {
      lastActiveRef.current = document.activeElement;
      setTimeout(() => modalRef.current?.focus(), 0);
    } else {
      lastActiveRef.current?.focus?.();
    }
  }, [activeCard]);


  return (
    <>
      {/* Fixed Header */}
      <div className="fixed-header">
        <div className="container">
          <nav id="nav">
            <ul>
              <li><a href="#top">Intro</a></li>
              <li><a href="#biography">Biography</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#resume-buttons">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main */}
      <div id="main">
        {/* Intro */}
        <section id="top" className="one dark cover">
          <div className="container">
            {/* <div className="intro-profile">
              <span className="image avatar48">
                <img src="images/IMG3.png" alt="Caezarie Enriquez" />
              </span>
              <div className="profile-info">
                <h1>Caezarie Enriquez</h1>
                <p className="title">Information Systems Student</p>
              </div>
            </div> */}
            <header>
              <h2 className="alt">
                <strong> Hello! I'm Caezarie Enriquez</strong>{" "}
                <br />
              </h2>
              <p>
                I’m an <strong>Information Systems</strong> student who isn’t deeply into
                coding, but I have a strong passion for exploring, learning,
                and adapting. This portfolio highlights my academic projects,
                skills, and the experiences that have shaped my journey.
                My dream is to work in the medical field, but if that doesn’t happen,
                I’ll use what I’ve learned in Information Systems to contribute to healthcare in the future.
                <br />
              </p>
            </header>
            <footer>
              <a href="#biography" className="button scrolly">Learn More About Me</a>
            </footer>
          </div>
        </section>

        {/* Biography */}
        <section id="biography" className="two">
          <div className="container">
            <header>
              <h2>Biography</h2>
              <p>Learn about my background, education, and passions.</p>
            </header>

            {/* Cards */}
            <div className="biography-cards">
              <div className="bio-card" onClick={() => setActiveCard(0)}>
                <FaUser className="bio-icon" />
                <h3>About Me</h3>
              </div>

              <div className="bio-card" onClick={() => setActiveCard(1)}>
                <FaGraduationCap className="bio-icon" />
                <h3>Education</h3>
              </div>

              <div className="bio-card" onClick={() => setActiveCard(2)}>
                <FaHeart className="bio-icon" />
                <h3>Hobbies & Interests</h3>
              </div>
            </div>
          </div>

          {/* Modal (Pop-up) */}
          {activeCard !== null && (
            <div className="bio-modal-overlay" onClick={closeModal}>
              <div
                className="bio-modal"
                ref={modalRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="bio-modal-title"
                onClick={(e) => e.stopPropagation()}
              >

                <button className="bio-modal-close" onClick={closeModal}>×</button>

                <div className="bio-modal-content">
                  {activeCard === 0 && (
                    <>
                      <FaUser className="bio-modal-icon" />
                      <h3>About Me</h3>
                      <p>
                        I am 
                      </p>
                    </>
                  )}
                  {activeCard === 1 && (
                    <>
                      <FaGraduationCap className="bio-modal-icon" />
                      <h3>Education</h3>
                      <p>
                        I am 
                      </p>
                    </>
                  )}
                  {activeCard === 2 && (
                    <>
                      <FaHeart className="bio-modal-icon" />
                      <h3>Hobbies & Interests</h3>
                      <p>
                        I 
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>


        {/* Projects */}
        < section id="projects" className="three" >
          <div className="container">
            <header>
              <h2>Projects</h2>
            </header>
            <a href="#" className="image featured">
            </a>
            <p>
              Showcase your most impressive projects here — describe the technologies used,
              your role, and what makes each project unique or challenging.
            </p>
            <div className="row">
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit">
                    <img src="images/pic02.jpg" alt="Biography Image 1" />
                  </a>
                  <header>
                    <h3>Early Beginnings</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="#" className="image fit">
                    <img src="images/pic03.jpg" alt="Biography Image 2" />
                  </a>
                  <header>
                    <h3>Journey & Growth</h3>
                  </header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit">
                    <img src="images/pic04.jpg" alt="Biography Image 3" />
                  </a>
                  <header>
                    <h3>Education</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="#" className="image fit">
                    <img src="images/pic05.jpg" alt="Biography Image 4" />
                  </a>
                  <header>
                    <h3>Achievements</h3>
                  </header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit">
                    <img src="images/pic06.jpg" alt="Biography Image 5" />
                  </a>
                  <header>
                    <h3>Current Work</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="#" className="image fit">
                    <img src="images/pic07.jpg" alt="Biography Image 6" />
                  </a>
                  <header>
                    <h3>Future Goals</h3>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section >

        {/* Tools and Frameworks */}
        < section id="tools" className="four" >
          <div className="container">
            <header>
              <h2>Tools and Frameworks</h2>
            </header>
            <p>
              These are the programming languages, tools, and frameworks that I know.
            </p>
            <ul className="tools-list" >
              <li><FaHtml5 color="#E34F26" /> <FaCss3Alt color="#1572B6" />
                <FaReact color="#61DAFB" /> <FaLaravel color="#FF2D20" />
                <FaFigma color="#F24E1E" /> <FaGithub color="#000" />
              </li>
            </ul>
          </div>
        </section >

        {/* Resume */}
        < section id="resume-buttons" className="two" >
          <div className="container">
            <header>
              <h2>Resume</h2>
            </header>
            <p>
              You can view or download my resume below to learn more about my academic
              and professional background.
            </p>

            {/* View Resume (Google Drive) */}
            <a href="https://drive.google.com/file/d/17VnQ96QRf8bmTgCWo_XWyhD0tredw1ZM/view?usp=sharing"
              className="button" target="_blank" rel="noopener noreferrer">View My Resume</a>

            {/* Direct Download Button */}
            <a href="/images/Resume.pdf" download="Resume.pdf"
              className="button" style={{ marginLeft: "10px" }}>Download Resume</a>
          </div>
        </section >

        {/* Contact */}
        < section id="contact" className="three" >
          <div className="container">
            <header>
              <h2>Contacts</h2>
            </header>
            <p>
              Feel free to reach out for collaborations, opportunities, or inquiries.
            </p>
            <ul className="icons">
              <li>
                <a href="https://mail.google.com/mail/?view=cm&to=enriquez.caezarie@gmail.com" className="icon solid fa-envelope">
                  <span className="label">Email</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/sarya.l.enriquez/" className="icon brands fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/zarious-dev" className="icon brands fa-github">
                  <span className="label">Github</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/caezarie-enriquez-0b88792bb" className="icon brands fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </section >
      </div >

      {/* Footer */}
      < div id="footer" >
        <ul className="copyright">
          <li>© Caezarie Enriquez. All rights reserved.</li>
        </ul>
      </div >
    </>
  );
}

export default App;