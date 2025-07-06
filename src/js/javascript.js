import {projects} from './data/projects.js';
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