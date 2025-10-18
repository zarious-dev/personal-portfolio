import { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaLaravel, FaFigma, FaGitAlt, FaGithub, FaUser, FaGraduationCap, FaHeart, FaStar, } from "react-icons/fa";

function App() {
  const [activeCard, setActiveCard] = useState(null);
  const [sectionClickCounts, setSectionClickCounts] = useState({});

  const closeModal = () => setActiveCard(null);

  // Handle section clicks for color cycling
  const handleSectionClick = (sectionId) => {
    setSectionClickCounts(prev => ({
      ...prev,
      [sectionId]: (prev[sectionId] || 0) + 1
    }));
  };

  // Get section color based on click count (cycles through colors)
  const getSectionColor = (sectionId) => {
    const clickCount = sectionClickCounts[sectionId] || 0;

    // If never clicked, return white
    if (clickCount === 0) return '#ffffff';

    // Define color cycles for each section (colors that rotate)
    const colorCycles = {
      'top': [
        'linear-gradient(#642b73, #c6426e)', //magenta
        'linear-gradient(#1f4037, #99f2c8)', // Greenish
        'linear-gradient(#20002c, #cbb4d4)', // Purple-lav
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', // Teal-Purple
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple
        'linear-gradient(#283c86, #45a247)', //green-blue
        'linear-gradient(#eb5757, #000000)', //green-blue
      ],
      'biography': [
        'linear-gradient(#dbe6f6, #c5796d)', //white-pink-light red
        'linear-gradient(#ada996, #f2f2f2, #dbdbdb, #eaeaea)', // gray-white
        'linear-gradient(#acb6e5, #86fde8)', // windy-blue
        'linear-gradient(#dce35b, #45b649)', // yellow-green
        'linear-gradient(#ffafbd, #ffc3a0)', // pink-orange
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',  // Mint-Pink
      ],
      'projects': [
        'linear-gradient(#dce35b, #45b649)', // yellow-green
        'linear-gradient(#ffafbd, #ffc3a0)', // pink-orange
        'linear-gradient(#b2fefa, #0ed2f7)', // light-dark blue
        'linear-gradient(#74ebd5, #acb6e5)', //purple-blue-pink
        'linear-gradient(#d3cce3, #e9e4f0 )', // lavender na may white
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',  // Mint-Pink

      ],
      'tools': [
        'linear-gradient(#ffefba, #ffffff)', // white na may dirty white
        'linear-gradient(#ee9ca7, #ffdde1)',//pink
        'linear-gradient(#f7f8f8, #acbb78)', //ver blacl(white na may green na may brown)
        'linear-gradient(#ada996, #f2f2f2, #dbdbdb, #eaeaea)', // gray-white
        'linear-gradient(#acb6e5, #86fde8)', // windy-blue
        'linear-gradient(#dce35b, #45b649)', // yellow-green
        'linear-gradient(#c9d6ff, #e2e2e2)', // lav-white

      ],
      'resume': [
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',  // Mint-Pink
        'linear-gradient(#74ebd5, #acb6e5)', //purple-blue-pink
        'linear-gradient(#d3cce3, #e9e4f0 )', // lavender na may white
        'linear-gradient(#ffefba, #ffffff)', // white na may dirty white
        'linear-gradient(#ee9ca7, #ffdde1)',//pink
        'linear-gradient(#f7f8f8, #acbb78)', //ver blacl(white na may green na may brown)
      ],
      'contact': [
        'linear-gradient(#acb6e5, #86fde8)', // windy-blue
        'linear-gradient(#dce35b, #45b649)', // yellow-green
        'linear-gradient(#43c6ac, #f8ffae)', // green-yellow
        'linear-gradient(#b2fefa, #0ed2f7)', // light-dark blue
        'linear-gradient(#74ebd5, #acb6e5)', //purple-blue-pink
        'linear-gradient(#f7f8f8, #acbb78)', //ver blacl(white na may green na may brown)
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',  // Mint-Pink
        'linear-gradient(#c9d6ff, #e2e2e2)', // lav-white
        'linear-gradient(#ada996, #f2f2f2, #dbdbdb, #eaeaea)', // gray-white

      ]
    };

    const colors = colorCycles[sectionId] || colorCycles['top'];

    // Cycle through colors: (clickCount - 1) % 
    const colorIndex = (clickCount - 1) % colors.length;

    return colors[colorIndex];
  };

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
        <section
          id="top"
          className="one dark cover"
          onClick={() => handleSectionClick('top')}
          style={{
            background: getSectionColor('top'),
            transition: 'background 0.6s ease',
            cursor: 'pointer'
          }}
        >
          <div className="container">
            <header>
              <h2 className="alt">
                <strong> Hi! I'm Caezarie Enriquez</strong>{" "}
                <br />
              </h2>
              <p>
                This portfolio highlights my backgrounds and academic projects.
                <br />
              </p>
            </header>
            <footer>
              <a href="#top" className="button scrolly">Learn More About Me</a>
            </footer>
          </div>
        </section>

        {/* Biography */}
        <section
          id="biography"
          className="two"
          onClick={() => handleSectionClick('biography')}
          style={{
            background: getSectionColor('biography'),
            transition: 'background 0.6s ease',
            cursor: 'pointer'
          }}
        >
          <div className="container">
            <header>
              <h2>Biography</h2>
              <p>Learn about my background, education, and interests.</p>
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
                <h3>Hobbies</h3>
              </div>
              <div className="bio-card" onClick={() => setActiveCard(3)}>
                <FaStar className="bio-icon" />
                <h3>Interests</h3>
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
                        Hi! You can call me "C"! I am from Southern part of Palawan.
                        My dream is to work in the medical field, but if that doesn't happen,
                        I'll utilize what I've learned in Information Systems to contribute to healthcare in the future.
                      </p>
                    </>
                  )}
                  {activeCard === 1 && (
                    <>
                      <FaGraduationCap className="bio-modal-icon" />
                      <h3>Education</h3>
                      <p>
                        I am currently taking <strong>Information Systems</strong> and I'm already in my third year.
                        I'm a student who isn't deeply into coding, but I have a passion for exploring, learning,
                        and adapting.
                      </p>
                    </>
                  )}

                  {/* Card 2: Hobbies - ALL CONTENT CENTERED */}
                  {activeCard === 2 && (
                    <>
                      <FaHeart className="bio-modal-icon" />
                      <h3>Hobbies</h3>

                      {/* Uses the class to center the list block AND center the text within it */}
                      <ul className="bio-list hobbies-list-centered">
                        <li>Eating</li>
                        <li>Sleeping</li>
                        <li>Watching</li>
                        <li>Reading</li>
                        <li>Sight Seeing</li>
                      </ul>
                    </>
                  )}

                  {/* Card 3: Interests - MIXED ALIGNMENT */}
                  {activeCard === 3 && (
                    /* Wrap the interests content to enable the complex alignment rules */
                    <div className="interests-container">

                      {/* Icon and H3 are centered by the main modal wrapper */}
                      <FaStar className="bio-modal-icon" />
                      <h3>Interests</h3>

                      {/* This span is centered because of the text-align: center on .interests-container */}
                      <span className="list-title"><strong>I am interested in:</strong></span>

                      {/* The list block is centered, but the text inside is left-aligned */}
                      <ul className="bio-list">
                        <li>discovering new things that spark my interest</li>
                        <li>operating different types of vehicles and heavy equipment</li>
                        <li>Human Biology and Anatomy (the study of the human body)</li>
                        <li>Strategy and Puzzle Games</li>
                        <li>Gun Firing / Target Shooting Sports.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="three"
          onClick={() => handleSectionClick('projects')}
          style={{
            background: getSectionColor('projects'),
            transition: 'background 0.6s ease',
            cursor: 'pointer'
          }}
        >
          <div className="container">
            <header>
              <h2>Projects</h2>
            </header>
            <p>
              These are one of the projects that I made
            </p>

            <div className="projects-grid">
              {/* Project 1 */}
              <article className="item">
                {/* Floating Action Buttons */}
                <div className="fab-buttons">
                  <a
                    href="https://www.figma.com/proto/QN1ciWkcKIMqVOS6GO8UAq/DreamLog?node-id=183-12&starting-point-node-id=183%3A12&t=Wc0M7ljJd2mcyLCW-1"
                    className="fab-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Figma Prototype"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaFigma />                  </a>
                  <a
                    href="https://github.com/LVCCWAD/DreamLog.git"
                    className="fab-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Code"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>&lt;/&gt;</span>
                  </a>
                </div>

                <div className="image fit">
                  <img src="images/dreamlog2.png" alt="Dream Log Website" />
                </div>
                <header>
                  <h3>DreamLog Website</h3>
                </header>
              </article>

              {/* Project 2 */}
              <article className="item">
                {/* Floating Action Buttons */}
                <div className="fab-buttons">
                  <a
                    href="https://www.figma.com/proto/7wSxzqqpIxlkphVZJuzQc5/PRACTICAL_ENRIQUEZ_BSIS2?node-id=197-145&p=f&t=pMq59R79Ejd7PHjH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=181%3A57"
                    className="fab-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Figma Prototype"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaFigma />
                  </a>
                </div>

                <div className="image fit">
                  <img src="images/foodapp3.png" alt="Food Delivery App" />
                </div>
                <header>
                  <h3>Food Delivery App</h3>
                </header>
              </article>
            </div>
          </div>
        </section>

        {/* Tools and Frameworks */}
        <section
          id="tools"
          className="four"
          onClick={() => handleSectionClick('tools')}
          style={{
            background: getSectionColor('tools'),
            transition: 'background 0.6s ease',
            cursor: 'pointer'
          }}
        >
          <div className="container">
            <header>
              <h2>Tools and Frameworks</h2>
            </header>
            <p>
              These are the programming languages, tools, and frameworks that I know.
            </p>
            <ul className="tools-list">
              <li>
                <FaHtml5 color="#E34F26" />
                <FaCss3Alt color="#1572B6" />
                <FaReact color="#61DAFB" />
                <FaLaravel color="#FF2D20" />
                <FaFigma color="#F24E1E" />
                <FaGithub color="#000" />
              </li>
            </ul>
          </div>
        </section>

        {/* Resume */}
        <section
          id="resume-buttons"
          className="two"
          onClick={() => handleSectionClick('resume')}
          style={{
            background: getSectionColor('resume'),
            transition: 'background 0.6s ease',
            cursor: 'pointer'
          }}
        >
          <div className="container">
            <header>
              <h2>Resume</h2>
            </header>
            <p>
              You can view or download my resume below to learn more
              about my academic <br /> and professional background.
            </p>

            {/* View Resume (Google Drive) */}
            <a
              href="https://drive.google.com/file/d/17VnQ96QRf8bmTgCWo_XWyhD0tredw1ZM/view?usp=sharing"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              View My Resume
            </a>

            {/* Direct Download Button */}
            <a
              href="/images/Resume.pdf"
              download="Resume.pdf"
              className="button"
              style={{ marginLeft: "10px" }}
              onClick={(e) => e.stopPropagation()}
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="three"
          onClick={() => handleSectionClick('contact')}
          style={{
            background: getSectionColor('contact'),
            transition: 'background 0.6s ease',
            cursor: 'pointer'
          }}
        >
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
        </section>
      </div>

      {/* Footer */}
      <div id="footer">
        <ul className="copyright">
          <li>© Caezarie Enriquez. All rights reserved.</li>
        </ul>
      </div>
    </>
  );
}

export default App;