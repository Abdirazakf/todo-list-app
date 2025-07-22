import Projects from "./projects"

const projectClass = new Projects()

export default class Tasks {
    constructor(projectInstance){
        this.projects = projectInstance
    }

    tasksUIEvents() {
        function openModal() {
            const modal = document.querySelector(".task-modal")
            const addTaskBar = document.querySelector(".add-task")
            const addHomepage = document.querySelector(".add-task-button")

            addTaskBar.addEventListener("click", () => {
                modal.showModal()
            })

            addHomepage.addEventListener("click", ()=> {
                modal.showModal()
            })
        }

        function closeModal() {
            const modal = document.querySelector(".task-modal")
            const closeButton = document.querySelector(".close-button")

            closeButton.addEventListener("click", () => {
                modal.close()
            })
        }

        openModal()
        closeModal()
    }

    handleTaskForm() {
        const form = document.querySelector("#task-form")
        const modal = document.querySelector(".task-modal")

        form.addEventListener("submit", (event) =>{
            event.preventDefault()
            modal.close()

            const formData = new FormData(form)
            const title = formData.get("title")
            const desc = formData.get("description")
            const dueDate = formData.get("date")
            const priority = formData.get("priority")
            const project = formData.get("project")

            if (title && project){
                const newTask = {
                    id: "t" + crypto.randomUUID(),
                    title,
                    desc,
                    dueDate,
                    priority,
                    project,
                    completed: false
                }

                this.addTasktoProject(project, newTask)
            }

            form.reset()
        })
    }

    addTasktoProject(projectID, task) {
        const taskProject = this.projects.projects.find(p => p.id === projectID)
        
        if (taskProject) {
            taskProject.tasks.push(task)
            
            const event = new CustomEvent("taskAdded", {
                detail: {
                    projectID: projectID,
                    task: task
                }
            })
            document.dispatchEvent(event)
        }
    }

    allTasks() {
        const button = document.querySelector(".all-tasks-button")
        const content = document.querySelector(".content")

        button.addEventListener("click", () =>{
            content.innerHTML = ""
            const header = document.createElement("h1")
            header.textContent = "All Tasks"
            const contentArea = document.createElement("div")
            contentArea.classList.add("project-task-area")

            this.projects.projects.forEach(project =>{
                project.tasks.forEach(task => {
                    const taskCard = document.createElement("div")
                    taskCard.classList.add("card")
                    const cardContent = document.createElement("div")
                    cardContent.classList.add("card-content")
                    
                    const taskTitle = document.createElement("h3")
                    taskTitle.textContent = task.title
                    cardContent.appendChild(taskTitle)
                
                    const taskDesc = document.createElement("p")
                    taskDesc.textContent = `Description: ${task.desc}`
                    cardContent.appendChild(taskDesc)
                
                    const taskDate = document.createElement("p")
                    taskDate.textContent = `Due Date: ${task.dueDate}`
                    cardContent.appendChild(taskDate)
                    
                    const taskPriority = document.createElement("p")
                    taskPriority.textContent = `Priority: ${task.priority}`
                    cardContent.appendChild(taskPriority)
                    
                    const statusDiv = document.createElement("div")
                    const taskStatus = document.createElement("input")
                    const statusLabel = document.createElement("label")
                    statusLabel.textContent = "Completed"
                    statusLabel.htmlFor = "completed"
                    taskStatus.setAttribute("id", "completed")
                    taskStatus.type = "checkbox"
                    taskStatus.checked = task.completed || false
                    
                    taskStatus.addEventListener("change", () =>{
                        this.projects.toggleTaskComplete(project.id, task.id)
                        console.log(project)
                    })
                
                    statusDiv.appendChild(statusLabel)
                    statusDiv.appendChild(taskStatus)
                    cardContent.appendChild(statusDiv)
                    
                    taskCard.appendChild(cardContent)
                    contentArea.appendChild(taskCard)
                })
                content.appendChild(header)
                content.appendChild(contentArea)
            })
        })
    }      

    init() {
        this.tasksUIEvents()
        this.handleTaskForm()
        this.allTasks()
    }
}