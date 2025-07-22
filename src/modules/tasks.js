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

            console.log("Form data:", { title, desc, dueDate, priority, project })
            console.log("Available projects:", this.projects.projects)

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
            
            console.log("Task added to project:", taskProject.name)
        } else {
            console.error("Project not found with ID:", projectID)
            console.log("Available project IDs:", this.projects.projects.map(p => p.id))
        }
    }

    init() {
        this.tasksUIEvents()
        this.handleTaskForm()
    }
}