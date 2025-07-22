import deleteSvg from "../assets/icons/delete.svg"

export default class Projects {
    constructor() {
        this.resizeButton = null

        this.defaultProject = {
            id: 'p' + crypto.randomUUID(),
            name: "Default",
            tasks: []
        }

        this.projects = [this.defaultProject]

        this.currentProjectID = this.defaultProject.id
    }
    
    expandProjectButton() {
        this.resizeButton = document.querySelector(".resize-project-button")
        
        this.resizeButton.addEventListener('click', () => {
            this.resizeButton.classList.toggle('expanded');
        });
    }
    
    projectUIEvents() {
        function showProjectList(){
            const resizeProjectButton = document.querySelector(".resize-project-button")
            const projectList = document.querySelector(".project-list")
            
            resizeProjectButton.addEventListener("click", () => {
                if (resizeProjectButton.className == "resize-project-button expanded"){
                    projectList.style.height = "100%"
                    projectList.style.padding = "10px"
                } else {
                    projectList.style.height = 0
                    projectList.style.padding = 0
                }
            })
        }

        function openProjectModal() {
            const addProjectButton = document.querySelector(".add-project-button")
            const projectModal = document.querySelector(".project-modal")

            addProjectButton.addEventListener("click", () => {
                projectModal.showModal()
            })
        }

        function closeProjectModal() {
            const closeButton = document.querySelector(".close-button-2")
            const projectModal = document.querySelector(".project-modal")

            closeButton.addEventListener("click", () => {
                projectModal.close()
            })
        }
        
        showProjectList()
        openProjectModal()
        closeProjectModal()
    }

    handleProjectForm() {
        const form = document.querySelector("#project-form")
        const projectModal = document.querySelector(".project-modal")

        if (form) {
            form.addEventListener("submit", (event) =>{
                event.preventDefault()
                projectModal.close()

                const formData = new FormData(form)
                const projectName = formData.get("project-name")

                if (projectName){
                    const newProject = this.createProject(projectName)

                    this.addProject(newProject)

                    form.reset()

                    this.displayProjects()
                }
            })
        }
    }

    createProject(name) {
        return {
            id: "p" + crypto.randomUUID(),
            name: name,
            tasks: []
        }
    }

    addProject(project) {
        this.projects.push(project)

        const event = new CustomEvent('projectAdded', {
            detail: {
                project: project
            }
        })

        document.dispatchEvent(event)
    }

    removeProject(projectID) {
        if (this.projects){
            this.projects = this.projects.filter(p => p.id !== projectID)

            if (this.currentProjectID == projectID) {
                this.currentProjectID = this.projects[0].id
            }

            const event = new CustomEvent('projectRemoved', {
                detail: {
                    project: this.currentProjectID
                }
            })

            document.dispatchEvent(event)

            this.displayProjects()
        }
    }

    setCurrentProject(projectID) {
        this.currentProjectID = projectID
        this.displayProjects()

        const event = new CustomEvent("projectChanged", {
            detail: {
                project: this.getCurrentProject()
            }
        })

        document.dispatchEvent(event)
    }

    getCurrentProject() {
        return this.projects.find(p => p.id == this.currentProjectID)
    }

    displayProjects() {
        const projectList = document.querySelector(".project-list")
        const content = document.querySelector(".content")

        if(projectList){
            projectList.innerHTML = ""

            this.projects.forEach(project => {
                const button = document.createElement("button")
                button.classList.add("project-item")
                button.dataset.indexNumber = project.id
                const name = document.createElement("span")
                name.textContent = project.name
                button.appendChild(name)
                projectList.appendChild(button)

                if (project.id == this.currentProjectID){
                    button.classList.add("active")
                }

                button.addEventListener("click", () => {
                    this.setCurrentProject(project.id)
                    content.innerHTML = ""

                    const header = document.createElement("h1")
                    header.textContent = project.name
                    content.appendChild(header)

                    const contentArea = document.createElement("div")
                    contentArea.classList.add("project-task-area")
                    content.appendChild(contentArea)

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

                        if (task.completed){
                            taskStatus.checked = true
                        }

                        statusDiv.appendChild(statusLabel)
                        statusDiv.appendChild(taskStatus)
                        cardContent.appendChild(statusDiv)

                        taskCard.appendChild(cardContent)
                        contentArea.appendChild(taskCard)
                    })
                })

                if (project.name !== "Default"){
                    const deleteButton = document.createElement("button")
                    deleteButton.classList.add("project-delete-button")
                    const buttonImg = document.createElement("img")
                    buttonImg.src = deleteSvg
                    deleteButton.appendChild(buttonImg)
                    
                    deleteButton.addEventListener("click", (event) => {
                        event.stopPropagation()
                        if (confirm(`Delete project "${project.name}"?`)){
                            this.removeProject(project.id)
                        }
                    })

                    button.appendChild(deleteButton)
                }
            })
        }
    }

    storeData() {
        localStorage.setItem("projects-array", this.projects.projects)
    }

    getData() {
        this.storeData()
        return localStorage.getItem("projects-array")
    }

    init(){
        this.expandProjectButton()
        this.projectUIEvents()
        this.handleProjectForm()
        this.displayProjects()
        this.getData()
    }
}