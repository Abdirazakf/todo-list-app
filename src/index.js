import "./styles/reset.css"
import "./styles/styles.css"
import taskBar from "./modules/taskbar.js"
import Homepage from "./modules/homepage.js"
import Projects from "./modules/projects.js"

const taskbar = new taskBar()
const homepage = new Homepage()
const projects = new Projects()

document.addEventListener("DOMContentLoaded", () =>{
    taskbar.createTaskBar()
    homepage.loadHomepage()
    projects.init()
})