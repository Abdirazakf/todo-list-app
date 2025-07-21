import logoImg from "../assets/img/logo.png"
import sidebar from "../assets/icons/sidebar.svg"
import add from "../assets/icons/add.svg"
import inbox from "../assets/icons/inbox.svg"
import today from "../assets/icons/today.svg"
import upcoming from "../assets/icons/upcoming.svg"
import check from "../assets/icons/check.svg"
import plus from "../assets/icons/plus.svg"
import arrow_down from "../assets/icons/arrow_down.svg"
import Homepage from "./homepage"

const homepage = new Homepage()

export default class taskBar {    
    createTaskBar() {
        const taskbar = document.querySelector(".task-bar")

        function createTaskBarHeader(){
            const content = document.querySelector(".content")
            const headerContainer = document.createElement("div")
            headerContainer.classList.add("task-bar-header")

            const logo = document.createElement("img")
            logo.src = logoImg
            logo.alt = "Logo"

            const header = document.createElement("h2")
            header.classList.add("logo-header")
            header.textContent = "PlannerPro"

            header.addEventListener("click", () => {
                content.innerHTML = ""
                homepage.loadHomepage()
            })

            const control = document.createElement("button")
            control.classList.add("task-bar-control")
            const controlImage = document.createElement("img")
            controlImage.src = sidebar

            control.appendChild(controlImage)
            headerContainer.appendChild(logo)
            headerContainer.appendChild(header)
            headerContainer.appendChild(control)
            taskbar.appendChild(headerContainer)
        }

        function createTaskBarButtons() {
            const buttonContainer = document.createElement("div")
            buttonContainer.classList.add("task-bar-buttons")

            const addButton = document.createElement("button")
            addButton.classList.add("add-task")
            const addSvg = document.createElement("img")
            addSvg.src = add
            const addSpan = document.createElement("span")
            addSpan.textContent = "Add Tasks"
            addButton.appendChild(addSvg)
            addButton.appendChild(addSpan)

            const allTasksButton = document.createElement("button")
            allTasksButton.classList.add("all-tasks-button")
            const allTasksSvg = document.createElement("img")
            allTasksSvg.src = inbox
            const allTasksSpan = document.createElement("span")
            allTasksSpan.textContent = "All Tasks"
            allTasksButton.appendChild(allTasksSvg)
            allTasksButton.appendChild(allTasksSpan)

            const todayButton = document.createElement("button")
            todayButton.classList.add("today-button")
            const todaySvg = document.createElement("img")
            todaySvg.src = today
            const todaySpan = document.createElement("span")
            todaySpan.textContent = "Today"
            todayButton.appendChild(todaySvg)
            todayButton.appendChild(todaySpan)

            const upcomingButton = document.createElement("button")
            upcomingButton.classList.add("upcoming-button")
            const upcomingSvg = document.createElement("img")
            upcomingSvg.src = upcoming
            const upcomingSpan = document.createElement("span")
            upcomingSpan.textContent = "Upcoming"
            upcomingButton.appendChild(upcomingSvg)
            upcomingButton.appendChild(upcomingSpan)

            const completeButton = document.createElement("button")
            completeButton.classList.add("complete-button")
            const completeSvg = document.createElement("img")
            completeSvg.src = check
            const completeSpan = document.createElement("span")
            completeSpan.textContent = "Completed Tasks"
            completeButton.appendChild(completeSvg)
            completeButton.appendChild(completeSpan)

            buttonContainer.appendChild(addButton)
            buttonContainer.appendChild(allTasksButton)
            buttonContainer.appendChild(todayButton)
            buttonContainer.appendChild(upcomingButton)
            buttonContainer.appendChild(completeButton)
            taskbar.appendChild(buttonContainer)
        }

        function createTaskBarProjects() {
            const projectContainer = document.createElement("div")
            projectContainer.classList.add("project-container")

            const projectHeader = document.createElement("div")
            projectHeader.classList.add("project-header")
            projectContainer.appendChild(projectHeader)

            const header = document.createElement("h4")
            header.classList.add("project-title")
            header.textContent = "My Projects"
            projectHeader.appendChild(header)

            const addProjectButton = document.createElement("button")
            addProjectButton.classList.add("add-project-button")
            const addProjectSvg = document.createElement("img")
            addProjectSvg.src = plus
            addProjectButton.appendChild(addProjectSvg)
            projectHeader.appendChild(addProjectButton)

            const resizeProjectButton = document.createElement("button")
            resizeProjectButton.classList.add("resize-project-button")
            resizeProjectButton.classList.add("expanded")
            const resizeSvg = document.createElement("img")
            resizeSvg.src = arrow_down
            resizeSvg.classList.add("svg-icon")
            resizeProjectButton.appendChild(resizeSvg)
            projectHeader.appendChild(resizeProjectButton)

            taskbar.appendChild(projectContainer)
        }

        function createProjectList(){
            const projectContainer = document.querySelector(".project-container")
            const projectList = document.createElement("div")
            projectList.classList.add("project-list")
            projectContainer.appendChild(projectList)
        }

        createTaskBarHeader()
        createTaskBarButtons()
        createTaskBarProjects()
        createProjectList()
    }

    init() {
        this.createTaskBar()
    }
}