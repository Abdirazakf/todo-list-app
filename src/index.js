import "./styles/reset.css"
import "./styles/styles.css"
import taskBar from "./modules/taskbar.js"
import Homepage from "./modules/homepage.js"

const taskbar = new taskBar()
const homepage = new Homepage()

document.addEventListener("DOMContentLoaded", () =>{
    taskbar.createTaskBar()
    homepage.loadHomepage()
})