import './css/styles.css';
import './css/summary.css';
import './css/education.css';
import './css/skills.css';
import './css/projects.css';
import './css/media.css';
import { useEffect } from 'react';
import {projects} from './js/data/projects.js';

function App() {
  useEffect(() => {
    /***
     * display menu
     */
    let menuBtn = document.querySelector('.menuBtn');
    let headerLeft = document.querySelector('.headerLeft');
    menuBtn.onclick = function () {
      headerLeft.classList.toggle('headerLeft-display');
    }

    /**
     * display projects html
     */
    let projectsSlides = document.querySelector('.projectsSlides');
    let projectsHtml = '';
    projects.forEach(project => {
      projectsHtml += `
      <div class="projectsSlide">
        <img class="projects__img" src="./images/projects/${project.img}" alt="image"/>

        <div class="projectsInfor">
          <div class="projectsDescription">
            <h3 class="projects__name">${project.name}</h3>
            <time class="projects__time">Time: ${project.time}</time>
            <button class="projectsBtn" data-project-id="${project.id}">See more</button>
          </div>

          <button class="arrowBtn" onclick="window.location.href='';">
            <img class="arrow__img" src="./images/icons/diagonal-arrow.png" alt="redirect"/>
          </button>
        </div>
      </div>
      `;
    });

    projectsSlides.innerHTML = projectsHtml;

    /**
     * show modal
     */
    let modal = document.querySelector('.popup');
    let popupInfor = document.querySelector('.popupInfor');
    let popupImg = document.querySelector('.popup__img');
    let projectsBtn = document.querySelectorAll('.projectsBtn');
    let projectInforHtml = '';
    let imgPath = '';
    projectsBtn.forEach(btn => {
      btn.onclick = function () {
        let projectId = btn.dataset.projectId;
        // console.log(projectId);
        modal.classList.add('popup-display');

        projects.forEach(project => {
          if (projectId == project.id) {
            imgPath = `./images/projects/${project.img}`;
            projectInforHtml = `
              <h3 class="popup__name">${project.name}</h3>
              <time class="popupTime"><span class="popup__span">Time:</span> ${project.time}</time>
              <div class="popupTeamSize"><span class="popup__span">Team size: </span>${project.team}</div>
              <div class="popupTech"><span class="popup__span">Technology: </span>${project.tech}</div>
              <div class="popupDes"><span class="popup__span">Description: </span>
                ${project.des}
              </div>
              <div class="popupSource"><span class="popup__span">Source: </span>${project.src}</div>
              <div class="popupDemo"><span class="popup__span">Demo: </span>${project.demo}</div>
            `;
          }
        });

        popupImg.src = imgPath;
        popupInfor.innerHTML = projectInforHtml;
      }
    });

    /*close modal*/
    let popupBtn = document.querySelector('.popupBtn');
    popupBtn.onclick = function () {
      modal.classList.remove('popup-display');
    }
  }, []);
  return (
    <>
      <header className="header">
        <button className="logoBtn">Coder</button>
        <div className="headerLeft">
          <div className="user">
            Hi! John
            <button className="userBtn">
              <img className="user__img" src="./images/icons/user.png" alt="account"/>
            </button>
          </div>
          <button className="searchBtn">
            <img className="search__img" src="./images/icons/search.png" alt="search"/>
          </button>
        </div>

        <button className="menuBtn">
          <img className="menu__img" src="./images/icons/menu.png" alt="menu"/>
        </button>
      </header>

      <div className="popup">
        <div className="popupInfor">
          <h3 className="popup__name">PROJECT NAME</h3>
          <time className="popupTime"><span className="popup__span">Time:</span> 03/2025 - 04/2025</time>
          <div className="popupTeamSize"><span className="popup__span">Team size:</span>1</div>
          <div className="popupTech"><span className="popup__span">Technology:</span>Reactjs, Spring, MySQL</div>
          <div className="popupDes"><span className="popup__span">Description:</span>
            title title title title
            title title title title
          </div>
          <div className="popupSource"><span className="popup__span">Source:</span>https://192.168.01.1</div>
          <div className="popupDemo"><span className="popup__span">Demo:</span>https://192.168.01.1</div>
        </div>

        <div className="popupImage">
          <img className="popup__img" src="./images/banner1.jpg" alt="image"/>
          <button className="popupBtn">Cancel</button>
        </div>
      </div>

      <main className="main">
        <section className="summary">
          <div className="summaryIntro">
            <h2 className="summary__h2">SUMMARY</h2>
            <p className="summary__p">
              Hello, I’m a coder and i passionate for programming and graphic design. I hope that i can create something wonderful from what i have learned for you as well as for others. Feel free to get contact with me if you have any interest in my work
            </p>
          </div>

          <div className="summaryBanner">
            <img className="summary__img" src="./images/banner3.jpg" alt="banner"/>
          </div>
        </section>

        <section className="edu">
          <div className="eduIntro">
            <h2 className="edu__h2">EDUCATION</h2>
            <p className="edu__p">
              I’m the final year student from University of Science, i’m major in mathematic and computer science. I’ve learned a lot from my university, it’s not only give me knowledges it also gives me so many recollections i will never forget.
              <br/> 2021 - 2026
            </p>
          </div>

          <div className="eduImages">
            <img className="edu__img" src="./images/banner4.jpg" alt="banner"/>
            <img className="edu__img" src="./images/banner5.jpg" alt="banner"/>
            <img className="edu__img" src="./images/banner6.jpg" alt="banner"/>
          </div>
        </section>

        <section className="skills">
          <h2 className="skills__h2">SKILLS</h2>

          <div className="skillsContent">
            <img className="skills__img" src="./images/banner1.jpg" alt="banner"/>

            <div className="skillsSlides">
              <div className="skillsSlide">
                <h3 className="slide__h3">Programming</h3>
                <div className="slide">
                  <span className="slide__span">Programming language:</span> java, javascript, php, python<br/>
                  <span className="slide__span">Database:</span> MySQL<br/>
                  <span className="slide__span">Framework/Library:</span> ReactJS, React Native, Spring, Django
                </div>
              </div>

              <div className="skillsSlide">
                <h3 className="slide__h3">Tools</h3>
                <div className="slide">
                  VS Code, Eclipse, XAMPP, DRAW.IO, Github, Figma, Photoshop, Illustrator, Word, Powerpoint, Excel
                </div>
              </div>

              <div className="skillsSlide">
                <h3 className="slide__h3">Certificate</h3>
                <div className="slide">
                  <span className="slide__span">Toeic:</span> ...<br/>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="projects">
          <h2 className="projects__h2">PROJECTS</h2>

          <div className="projectsSlides">
            <div className="projectsSlide">
              <img className="projects__img" src="./images/banner1.jpg" alt="image"/>

              <div className="projectsInfor">
                <div className="projectsDescription">
                  <h3 className="projects__name">Project name Project name Project name Project nameProject name</h3>
                  <time className="projects__time">Time: 03/2025 - 04/2025</time>
                  <button className="projectsBtn">See more</button>
                </div>

                <button className="arrowBtn">
                  <img className="arrow__img" src="./images/icons/diagonal-arrow.png" alt="redirect"/>
                </button>
              </div>
            </div>

            <div className="projectsSlide">
              <img className="projects__img" src="./images/banner1.jpg" alt="image"/>

              <div className="projectsInfor">
                <div className="projectsDescription">
                  <h3 className="projects__name">Project name</h3>
                  <time className="projects__time">Time: 03/2025 - 04/2025</time>
                  <button className="projectsBtn">See more</button>
                </div>

                <button className="arrowBtn">
                  <img className="arrow__img" src="./images/icons/diagonal-arrow.png" alt="redirect"/>
                </button>
              </div>
            </div>

            <div className="projectsSlide">
              <img className="projects__img" src="./images/banner1.jpg" alt="image"/>

              <div className="projectsInfor">
                <div className="projectsDescription">
                  <h3 className="projects__name">Project name</h3>
                  <time className="projects__time">Time: 03/2025 - 04/2025</time>
                  <button className="projectsBtn">See more</button>
                </div>

                <button className="arrowBtn">
                  <img className="arrow__img" src="./images/icons/diagonal-arrow.png" alt="redirect"/>
                </button>
              </div>
            </div>

            <div className="projectsSlide">
              <img className="projects__img" src="./images/banner1.jpg" alt="image"/>

              <div className="projectsInfor">
                <div className="projectsDescription">
                  <h3 className="projects__name">Project name</h3>
                  <time className="projects__time">Time: 03/2025 - 04/2025</time>
                  <button className="projectsBtn">See more</button>
                </div>

                <button className="arrowBtn">
                  <img className="arrow__img" src="./images/icons/diagonal-arrow.png" alt="redirect"/>
                </button>
              </div>
            </div>

          </div>
        </section>

        <footer className="footer">
          <div className="footerInfor">Numbers: 012345678</div>
          <div className="footerInfor">Email: 1234@gmail.com</div>
        </footer>
      </main>
    </>
  );
}

export default App;
