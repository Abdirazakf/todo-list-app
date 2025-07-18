export default class Tasks {
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

    init() {
        this.tasksUIEvents()
    }
}