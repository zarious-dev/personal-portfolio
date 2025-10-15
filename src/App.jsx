function App() {

  return (
    <>
      {/* Header */}
      <div id="header">
        <div className="top">
          {/* Logo */}
          <div id="logo">
            <span className="image avatar48">
              <img src="images/IMG3.png" alt="" />
            </span>
            <h1 id="title">Caezarie Enriquez</h1>
            <p>Information Systems Student</p>
          </div>
          {/* Nav */}
          <nav id="nav">
            <ul>
              <li>
                <a href="#top" id="top-link">
                  <span className="icon solid fa-home">Intro</span>
                </a>
              </li>
              <li>
                <a href="#biography" id="biography-link">
                  <span className="icon solid fa-user">Biography</span>
                </a>
              </li>
              <li>
                <a href="#projects" id="projects-link">
                  <span className="icon solid fa-th">Projects</span>
                </a>
              </li>
              <li>
                <a href="#skills" id="skills-link">
                  <span className="icon solid fa-cogs">Skills</span>
                </a>
              </li>
              <li>
                <a href="#resume" id="resume-link">
                  <span className="icon solid fa-file-alt">Resume</span>
                </a>
              </li>
              <li>
                <a href="#contact" id="contact-link">
                  <span className="icon solid fa-envelope">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
      {/* Main */}
      <div id="main">
        {/* Intro */}
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                Hi! I'm <strong>Prologue</strong>, a{" "}
                <a href="http://html5up.net/license">free</a> responsive
                <br />
                site template designed by <a href="http://html5up.net">HTML5 UP</a>.
              </h2>
              <p>
                Ligula scelerisque justo sem accumsan diam quis
                <br />
                vitae natoque dictum sollicitudin elementum.
              </p>
            </header>
            <footer>
              <a href="#portfolio" className="button scrolly">
                Magna Aliquam
              </a>
            </footer>
          </div>
        </section>
        {/* Biography */}
        <section id="biography" className="two">
          <div className="container">
            <header>
              <h2>Biography</h2>
            </header>
            <p>
              Here’s where you can share your background, story, and experiences that led you to your current journey.
              Mention key milestones, passions, or what inspires you professionally.
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
        </section>

        {/* Projects */}
        <section id="projects" className="three">
          <div className="container">
            <header>
              <h2>Projects</h2>
            </header>
            <a href="#" className="image featured">
              <img src="images/pic08.jpg" alt="Project Showcase" />
            </a>
            <p>
              Showcase your most impressive projects here — describe the technologies used,
              your role, and what makes each project unique or challenging.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="four">
          <div className="container">
            <header>
              <h2>Skills</h2>
            </header>
            <p>
              List your core technical and soft skills — programming languages, tools, frameworks,
              and other relevant abilities that highlight your strengths.
            </p>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Node.js, Laravel</li>
              <li>UI/UX Design (Figma, Adobe XD)</li>
              <li>Version Control (Git, GitHub)</li>
              <li>Team Collaboration & Agile Development</li>
            </ul>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="five">
          <div className="container">
            <header>
              <h2>Resume</h2>
            </header>
            <p>
              You can provide a brief summary of your professional experience and
              education, or embed a downloadable resume link below.
            </p>
            <a href="https://drive.google.com/file/d/17VnQ96QRf8bmTgCWo_XWyhD0tredw1ZM/view?usp=sharing" className="button" download>
              View My Resume
            </a>
          </div>
        </section>

        {/* Contact */}

        <section id="contact" className="six">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>
            <p>
              Feel free to reach out for collaborations, opportunities, or inquiries.
            </p>

            <div className="bottom">
              {/* Social Icons */}
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
          </div>
        </section>
      </div>
      {/* Footer */}
      <div id="footer">
        {/* Copyright */}
        <ul className="copyright">
          <li>© Untitled. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
