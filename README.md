# Memory Capsules for Future Me

A React-based web application that allows users to create digital memory capsules and unlock them on a future date. Users can write messages to their future selves, set an unlock date, and revisit their memories when the specified date arrives.

---

## About the Project

Most messaging and note-taking applications focus on immediate access to information. Memory Capsules takes a different approach by allowing users to write messages that remain locked until a chosen future date.

This project was built to explore React fundamentals, state management, date-based logic, conditional rendering, and user-focused design while creating a meaningful application that encourages self-reflection and future planning.

---

## Features

* Create memory capsules with a title and personal message
* Set a future unlock date for each capsule
* Automatically lock messages until the selected date
* Automatically unlock messages when the unlock date arrives
* Delete unwanted capsules
* Persistent storage using Local Storage
* Form validation for better user experience
* Responsive and clean user interface
* Component-based React architecture

---

## Why This Project?

The idea behind Memory Capsules is to create a digital time capsule experience.

Users can:

* Write goals for their future selves
* Save important memories
* Store motivational messages
* Record personal milestones
* Reflect on growth over time

Unlike a traditional notes application, Memory Capsules introduces date-based access control, making the experience more engaging and meaningful.

---

## Tech Stack

* React.js
* JavaScript (ES6+)
* Vite
* CSS3
* HTML5
* Git
* GitHub

---

## Project Structure

```text
src/
├── components/
│   ├── CreateCapsule.jsx
│   ├── CapsuleCard.jsx
│   └── CapsuleList.jsx
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## How It Works

1. Create a new memory capsule.
2. Enter a title and personal message.
3. Select a future unlock date.
4. The capsule remains locked until the selected date.
5. When the unlock date arrives, the message becomes visible automatically.
6. Users can delete capsules whenever they want.

---

## Key Concepts Implemented

### React Fundamentals

* Functional Components
* Component Reusability
* Props
* useState Hook
* Event Handling

### JavaScript Concepts

* Objects and Arrays
* Date Handling
* Conditional Logic
* Dynamic Rendering
* Array Mapping

### Frontend Development

* Responsive Layout Design
* Form Handling
* User Experience Design
* State Management

---

## Key Challenges Solved

### Date-Based Access Control

Implemented logic to compare the current date with the user-selected unlock date and determine whether a capsule should remain locked or become visible.

### Conditional Rendering

Used React conditional rendering to dynamically display locked or unlocked capsule states.

### Dynamic Data Management

Managed user-created capsules through React state and rendered them dynamically using reusable components.

### Persistent Storage

Stored capsule data using Local Storage to preserve user data even after browser refreshes.

### Form Validation

Added validation to prevent empty inputs and invalid capsule creation.

---

## Screenshot

Add a screenshot of your application here.

```md
![Memory Capsules Screenshot](screenshot.png)
```

---

## Learning Outcomes

This project helped strengthen my understanding of:

* React component architecture
* State management using React Hooks
* JavaScript date manipulation
* Conditional rendering
* Dynamic UI updates
* Local Storage integration
* Frontend project organization
* Git and GitHub workflows

---

## Installation

Clone the repository:

```bash
git clone https://github.com/DDas12345/Memory_Capsules.git
```

Navigate to the project directory:

```bash
cd Memory_Capsules
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

---

## Future Enhancements

* Countdown timer until unlock date
* User authentication
* Cloud database integration (Firebase/MongoDB)
* Image and file attachments
* Email reminders before unlock
* Search and filter functionality
* Edit existing capsules
* Dark mode support
* Capsule categories and tags

---

## Resume Highlights

* Developed a React-based time-locked digital memory capsule application.
* Implemented date-based access control using JavaScript Date APIs.
* Built reusable React components following a modular architecture.
* Managed application state using React Hooks.
* Applied Local Storage for persistent client-side data storage.
* Implemented form validation and dynamic conditional rendering.
* Utilized Git and GitHub for version control and project management.

---

## Author

**Debanshika Das**

Built as a React frontend project to explore time-based user interactions, state management, and modern component-driven web development.