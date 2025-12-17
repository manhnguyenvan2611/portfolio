export const projects = [
  {
    id: 1,
    name: "FACE RECOGNITION",
    img: "photo-editor.png",
    time: "03/2025 - 04/2025",
    team: 1,
    tech: "Django, SQLite, HTML, CSS, Javascript",
    des: "A website login using face recognition by computing correlation of two images of face at at time. There are images of different user's faces stored in database already and i used cpanel for that. So when users login, they take a picture of themself using webcam, that picture they took will be compared with each image in the database. In this case, i use correlation formula for comparing. If the correlation is greate or equal than 0.7 then it's accepted and the users will be delivered to home page.",
    src: "https://github.com/manhnguyenvan2611/face-recognition",
    demo: "on going"
  },
  {
    id: 2,
    name: "PROJECT MANAGEMENT",
    img: "project-management.png",
    time: "06/2025 - 07/2025",
    team: 1,
    tech: "Springboot, MySQL, HTML, CSS, Javascript",
    des: "A website for managing projects. You can add description, status and time line and you also can edit and delete them. This is a simple project, there's only one table to store datas in database and the database is used is MySQL.",
    src: "https://github.com/manhnguyenvan2611/project-management",
    demo: "on going"
  },
  {
    id: 3,
    name: "PORTFOLIO",
    img: "portfolio.png",
    time: "07/2025 - 07/2025",
    team: 1,
    tech: "Reactjs",
    des: "A simple portfolio in reactjs using yarn to initiate. This portfolio is just for showing off my skills.",
    src: "https://github.com/manhnguyenvan2611/portfolio",
    demo: "portfolio-pink-alpha-39.vercel.app"
  },
];