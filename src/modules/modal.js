export default class Modal {
    createTaskModal() {
        const taskModal = document.querySelector(".task-modal")
        const header = document.createElement("h2")
        header.textContent = "Add a Task"
        taskModal.appendChild(header)

        const form = document.createElement("form")
        form.setAttribute("id", "task-form")
        taskModal.appendChild(form)

        function title() {
            const para1 = document.createElement("p")
            form.appendChild(para1)
            const div1 = document.createElement("div")
            para1.appendChild(div1)
            const titleLabel = document.createElement("label")
            titleLabel.htmlFor = "title"
            titleLabel.textContent = "Title"
            div1.appendChild(titleLabel)
            const titleInput = document.createElement("input")
            titleInput.name = "title"
            titleInput.setAttribute("id", "title")
            titleInput.required = true
            titleInput.setAttribute("maxlength", "30")
            para1.appendChild(titleInput)
        }

        function description() {
            const para2 = document.createElement("p")
            form.appendChild(para2)
            const div2 = document.createElement("div")
            para2.appendChild(div2)
            const descLabel = document.createElement("label")
            descLabel.htmlFor = "description"
            descLabel.textContent = "Description:"
            div2.appendChild(descLabel)
            const descInput = document.createElement("input")
            descInput.name = "description"
            descInput.setAttribute("id", "description")
            descInput.setAttribute("maxlength", "200")
            para2.appendChild(descInput)
        }

        function date() {
            const para3 = document.createElement("p")
            form.appendChild(para3)
            const div3 = document.createElement("div")
            para3.appendChild(div3)
            const dateLabel = document.createElement("label")
            dateLabel.htmlFor = "date"
            dateLabel.textContent = "Due Date"
            div3.appendChild(dateLabel)
            const dateInput = document.createElement("input")
            dateInput.type = "datetime-local"
            dateInput.name = "date"
            dateInput.setAttribute("id", "date")
            para3.appendChild(dateInput)
        }

        function priority() {
            const para4 = document.createElement("p")
            form.appendChild(para4)
            const div4 = document.createElement("div")
            para4.appendChild(div4)
            const priorityLabel = document.createElement("label")
            priorityLabel.textContent = "Priority"
            div4.appendChild(priorityLabel)
            const priorityContainer = document.createElement("div")
            priorityContainer.classList.add("radio-buttons")
            para4.appendChild(priorityContainer)
       
            const lowLabel = document.createElement("label")
            lowLabel.classList.add("radio-button")
            lowLabel.htmlFor = "low-option"
            priorityContainer.appendChild(lowLabel)
            const lowInput = document.createElement("input")
            lowInput.type = "radio"
            lowInput.setAttribute("id", "low-option")
            lowInput.name = "priority"
            lowInput.value = "low"
            lowLabel.appendChild(lowInput)
            const lowDiv = document.createElement("div")
            lowDiv.classList.add("radio-circle")
            lowLabel.appendChild(lowDiv)
            const lowSpan = document.createElement("span")
            lowSpan.classList.add("radio-label")
            lowSpan.textContent = "Low"
            lowLabel.appendChild(lowSpan)

            const midLabel = document.createElement("label")
            midLabel.classList.add("radio-button")
            midLabel.htmlFor = "medium-option"
            priorityContainer.appendChild(midLabel)
            const midInput = document.createElement("input")
            midInput.type = "radio"
            midInput.setAttribute("id", "medium-option")
            midInput.name = "priority"
            midInput.value = "medium"
            midLabel.appendChild(midInput)
            const midDiv = document.createElement("div")
            midDiv.classList.add("radio-circle")
            midLabel.appendChild(midDiv)
            const midSpan = document.createElement("span")
            midSpan.classList.add("radio-label")
            midSpan.textContent = "Medium"
            midLabel.appendChild(midSpan)

            const highLabel = document.createElement("label")
            highLabel.classList.add("radio-button")
            highLabel.htmlFor = "high-option"
            priorityContainer.appendChild(highLabel)
            const highInput = document.createElement("input")
            highInput.type = "radio"
            highInput.setAttribute("id", "high-option")
            highInput.name = "priority"
            highInput.value = "high"
            highLabel.appendChild(highInput)
            const highDiv = document.createElement("div")
            highDiv.classList.add("radio-circle")
            highLabel.appendChild(highDiv)
            const highSpan = document.createElement("span")
            highSpan.classList.add("radio-label")
            highSpan.textContent = "High"
            highLabel.appendChild(highSpan)
        }

        function taskModalButtons() {
            const container = document.createElement("div")
            container.classList.add("button-container")
            form.appendChild(container)

            const submitButton = document.createElement("button")
            submitButton.type = "submit"
            submitButton.classList.add("submit-button")
            container.appendChild(submitButton)
            const submitSpan = document.createElement("span")
            submitSpan.textContent = "Add Task"
            submitButton.appendChild(submitSpan)

            const closeButton = document.createElement("button")
            closeButton.classList.add("close-button")
            closeButton.textContent = "Close"
            container.appendChild(closeButton)
        }

        title()
        description()
        date()
        priority()
        taskModalButtons()
    }

    createProjectModal() {
        
    }

    init() {
        this.createTaskModal()
        this.createProjectModal()
    }
}