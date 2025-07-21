import "./styles/reset.css"
import "./styles/styles.css"
import taskBar from "./modules/taskbar.js"
import Homepage from "./modules/homepage.js"
import Projects from "./modules/projects.js"
import Tasks from "./modules/tasks.js"
import Modal from "./modules/modal.js"

const taskbar = new taskBar()
const homepage = new Homepage()
const projects = new Projects()
const tasks = new Tasks()
const modal = new Modal(projects)

document.addEventListener("DOMContentLoaded", () =>{
    taskbar.createTaskBar()
    homepage.loadHomepage()
    modal.init()
    projects.init()
    tasks.init()
})