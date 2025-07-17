import waving from "../assets/img/waving.png"
import calendar from "../assets/icons/calendar.svg"

export default class Homepage {
    loadHomepage() {
        const content = document.querySelector(".content")

        function createHeader() {
            const header = document.createElement("h1")
            header.textContent = "Welcome to PlannerPro (Your go to Schedule Planner)"
            content.appendChild(header)
        }

        function homepageContent() {
            const contentArea = document.createElement("div")
            contentArea.classList.add("content-area")

            const wavingHand = document.createElement("img")
            wavingHand.src = waving
            contentArea.appendChild(wavingHand)

            const header = document.createElement("h3")
            header.textContent = "Let's Start Planning!"
            contentArea.appendChild(header)

            const para = document.createElement("p")
            para.textContent = `Your Inbox will list your most urgent tasks first, and should be your go to place
            to add quick tasks. Don't forget you can also create projects!`
            contentArea.appendChild(para)

            const addTaskButton = document.createElement("button")
            addTaskButton.classList.add("add-task-button")
            const addTaskSvg = document.createElement("img")
            addTaskSvg.classList.add("svg-icon")
            addTaskSvg.src = calendar
            addTaskButton.appendChild(addTaskSvg)
            const addTaskSpan = document.createElement("span")
            addTaskSpan.textContent = "Add a Task"
            addTaskButton.appendChild(addTaskSpan)
            contentArea.appendChild(addTaskButton)
            
            content.appendChild(contentArea)
        }

        createHeader()
        homepageContent()
    }
}