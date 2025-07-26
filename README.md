# 📋 PlannerPro - Todo List App

A modern, feature-rich todo list application for managing projects and daily tasks. Built with vanilla JavaScript modules and bundled with Webpack, this app provides an intuitive interface for organizing your productivity workflow.

## 🌐 Live Demo

**[Try PlannerPro Live →](https://abdirazakf.github.io/todo-list-app/)**

Experience all features without any installation required!

---

## 🌟 Features

- **Project Management**: Create, organize, and delete custom projects to categorize your tasks
- **Task Creation**: Add detailed tasks with titles, descriptions, due dates, and priority levels
- **Smart Filtering**: View tasks by categories:
  - All Tasks - Complete overview of everything
  - Today - Tasks due today
  - Upcoming - Future tasks
  - Completed - Finished tasks
- **Priority System**: Set task priorities (Low, Medium, High) with visual indicators
- **Task Completion**: Mark tasks as complete/incomplete with checkbox interactions
- **Persistent Storage**: All data automatically saved to localStorage
- **Responsive Design**: Clean, modern interface with collapsible sidebar
- **Modal Dialogs**: Intuitive forms for adding tasks and projects
- **Date Formatting**: Human-readable date display using date-fns library

---

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Build Tool**: Webpack 5 with dev server
- **Styling**: CSS Custom Properties, Flexbox, CSS Animations
- **Date Handling**: date-fns library
- **Storage**: Browser localStorage
- **Asset Management**: Webpack loaders for CSS, HTML, and images

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js) or yarn package manager

### Option 1: Download and Run Locally

#### Quick Setup (Recommended)

1. **Download the project**
   ```bash
   # Clone the repository
   git clone https://github.com/Abdirazakf/todo-list-app.git
   
   # Or download as ZIP from GitHub
   # Click "Code" → "Download ZIP" → Extract the folder
   ```

2. **Navigate to project directory**
   ```bash
   cd todo-list-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open in browser**
   - Automatically opens at `http://localhost:8080`
   - If not, manually visit the URL in your browser

#### Alternative: Direct Download

1. **Download ZIP file**
   - Go to [GitHub Repository](https://github.com/Abdirazakf/todo-list-app)
   - Click the green "Code" button
   - Select "Download ZIP"
   - Extract the downloaded file

2. **Follow steps 2-5 above**

### Option 2: Build for Distribution

Create a production-ready version that can be hosted anywhere:

```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

This creates a `dist/` folder containing:
- `index.html` - Main HTML file
- `main.js` - Bundled JavaScript
- `assets/` - Optimized images and icons

**To use the built version:**
1. Copy the entire `dist/` folder to your web server
2. Or open `dist/index.html` directly in a web browser
3. Or host it on platforms like Netlify, Vercel, or GitHub Pages

---

## 📦 Deployment Options

### Option 1: Local File System
- Open `dist/index.html` directly in any modern browser
- No server required for basic functionality

### Option 2: Static Hosting
Upload the `dist/` folder contents to:
- **GitHub Pages**: Push `dist` contents to `gh-pages` branch ✅ *[See live example](https://abdirazakf.github.io/todo-list-app/)*
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo or upload folder
- **Firebase Hosting**: Use Firebase CLI to deploy

### Option 3: Web Server
Copy `dist/` contents to any web server:
- Apache
- Nginx  
- IIS
- Local server (Python: `python -m http.server`)

---

## 📖 Usage

### Creating Projects
1. Click the "+" button next to "My Projects" in the sidebar
2. Enter a project name (max 50 characters)
3. Click "Add Project" to create

### Adding Tasks
1. Click "Add Tasks" in the sidebar or the "Add a Task" button on the homepage
2. Fill in the task details:
   - **Title**: Required, max 30 characters
   - **Description**: Optional, max 200 characters  
   - **Due Date**: Select date and time
   - **Priority**: Choose Low, Medium, or High
   - **Project**: Select which project to add the task to
3. Click "Add Task" to save

### Managing Tasks
- **View by Project**: Click any project in the sidebar to see its tasks
- **Mark Complete**: Check/uncheck the completion checkbox on any task
- **Filter Views**: Use sidebar buttons to filter tasks by status and timeline

### Project Management
- **Switch Projects**: Click any project name in the sidebar
- **Delete Projects**: Click the delete icon next to project names (Default project cannot be deleted)
- **Expand/Collapse**: Use the arrow button to show/hide the project list

---

## 📁 Project Structure

```
todo-list-app/
│
├── dist/                       # Production build (created after npm run build)
│   ├── index.html
│   ├── main.js
│   └── assets/
├── src/
│   ├── index.js                 # Main entry point
│   ├── template.html            # HTML template
│   ├── modules/
│   │   ├── taskbar.js          # Sidebar navigation and controls
│   │   ├── homepage.js         # Welcome/landing page
│   │   ├── projects.js         # Project management logic
│   │   ├── tasks.js            # Task management and filtering
│   │   └── modal.js            # Modal dialog components
│   ├── styles/
│   │   ├── reset.css           # CSS normalization
│   │   └── styles.css          # Main styles with animations
│   └── assets/
│       ├── img/                # Images and logos
│       └── icons/              # SVG icons
├── webpack.config.js           # Webpack configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

---

## 💻 Development Scripts

```bash
npm start          # Start development server (http://localhost:8080)
npm run build      # Build for production (creates dist/ folder)
npm test           # Run tests (placeholder)
```

---

## 🔧 Troubleshooting

### Common Issues

**Node.js not installed?**
- Download from [nodejs.org](https://nodejs.org/)
- Verify installation: `node --version`

**Port 8080 already in use?**
- The dev server will automatically try the next available port
- Or manually specify: `npm start -- --port 3000`

**Build fails?**
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again
- Try `npm run build`

**Can't open in browser?**
- Make sure you're opening the file from the `dist/` folder after building
- For development, use `npm start` instead of opening files directly

---

## 🌐 Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

**Features used:**
- ES6 Modules
- CSS Custom Properties
- Flexbox
- localStorage API
- Date API

---

## 💻 Code Overview

### Module Architecture

**Projects Class**
```javascript
class Projects {
    constructor() {
        this.projects = [this.defaultProject];
        this.currentProjectID = this.defaultProject.id;
    }
    
    createProject(name) { /* Creates new project with UUID */ }
    addProject(project) { /* Adds to array and dispatches events */ }
    storeData() { /* Saves to localStorage */ }
}
```

**Tasks Class**
```javascript
class Tasks {
    constructor(projectInstance) {
        this.projects = projectInstance;
    }
    
    addTasktoProject(projectID, task) { /* Adds task to specific project */ }
    checkToday(dateString) { /* Filters today's tasks */ }
    checkUpcoming(dateString) { /* Filters future tasks */ }
}
```

### Key Features

- **Event-Driven Architecture**: Custom events for inter-module communication
- **Data Persistence**: Automatic localStorage integration
- **Modular Design**: Separated concerns across different modules
- **UUID Generation**: Unique identifiers for projects and tasks
- **Date Validation**: Smart date filtering and formatting

---

## 🎨 Styling Features

- **CSS Custom Properties**: Consistent color scheme and theming
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Flexible sidebar and content areas
- **Modal Styling**: Polished dialog boxes with form validation
- **Icon Integration**: SVG icons with hover animations

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit:
```bash
git commit -m "Add new feature: description"
```

4. Push to your fork and open a pull request

---

## 👤 Author

**Abdirazak Farah**
- GitHub: [@Abdirazakf](https://github.com/Abdirazakf)
- Project Link: [https://github.com/Abdirazakf/todo-list-app](https://github.com/Abdirazakf/todo-list-app)