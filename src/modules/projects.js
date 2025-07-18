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
    
    taskBarEvents() {
        function showProjectList(){
            const resizeProjectButton = document.querySelector(".resize-project-button")
            const projectList = document.querySelector(".project-list")
            
            resizeProjectButton.addEventListener("click", () => {
                if (resizeProjectButton.className == "resize-project-button expanded"){
                    console.log("It's open")
                    projectList.style.height = "100%"
                    projectList.style.padding = "10px"
                } else {
                    projectList.style.height = 0
                    projectList.style.padding = 0
                    console.log("It's closed")
                }
            })
        }
        
        showProjectList()
    }

    init(){
        this.expandProjectButton()
        this.taskBarEvents()
    }
}