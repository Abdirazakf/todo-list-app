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

            if (title){
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

    addTasktoProject(projectID, task){
        const taskProject = this.projects.projects.find(p => p.id == projectID)
        taskProject.tasks.push(task)
        console.log("Added Task to project")
        console.log(this.projects.projects)
    }

    init() {
        this.tasksUIEvents()
        this.handleTaskForm()
    }
}