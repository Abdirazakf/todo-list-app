import "./styles/reset.css"
import "./styles/styles.css"
import taskBar from "./modules/taskbar.js"

const taskbar = new taskBar()

document.addEventListener("DOMContentLoaded", () =>{
    taskbar.createTaskBar()
})