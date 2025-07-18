export default class Projects {
    constructor() {
        this.resizeButton = null
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
            const closeButton = document.querySelector(".close-button")
            const projectModal = document.querySelector(".project-modal")

            closeButton.addEventListener("click", () => {
                projectModal.close()
            })
        }
        
        showProjectList()
        openProjectModal()
        closeProjectModal()
    }

    init(){
        this.expandProjectButton()
        this.projectUIEvents()
    }
}