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

    init(){
        this.expandProjectButton()
    }
}