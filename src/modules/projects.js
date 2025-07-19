export default class Projects {
    constructor() {
        this.resizeButton = null

        this.defaultProject = {
            id: 'a' + crypto.randomUUID(),
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
            id: "a" + crypto.randomUUID(),
            name: name,
            tasks: []
        }
    }

    addProject(project) {
        this.projects.push(project)
    }

    removeProject(projectID) {
        if (this.projects){
            this.projects = this.projects.filter(p => p.id !== projectID)

            if (this.currentProjectID == projectID) {
                this.currentProjectID = this.projects[0].id
            }

            this.displayProjects()
        }
    }

    displayProjects() {
        const projectList = document.querySelector(".project-list")

        if(projectList){
            projectList.innerHTML = ""

            this.projects.forEach(project => {
                const button = document.createElement("button")
                button.classList.add("project-item")
                button.dataset.indexNumber = project.id
                button.textContent = project.name
                projectList.appendChild(button)
            })
        }
    }

    init(){
        this.expandProjectButton()
        this.projectUIEvents()
        this.handleProjectForm()
        this.displayProjects()
    }
}