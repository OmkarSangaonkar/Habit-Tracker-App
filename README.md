## Overview

Habit Tracker React is a web application built with React and Redux for efficiently managing daily and weekly habits.

## Components/Today Folder

### ActionButton.jsx

- **Responsibility:**
  - Manages habit status updates.
- **Redux Integration:**
  - Dispatches actions for status changes.
- **Design Choices:**
  - Utilizes FontAwesome icons for intuitive UI.
- **Code Structure:**
  - Modular and concise for easy maintenance.

### HabitCard.jsx

- **Responsibility:**
  - Displays detailed habit information.
- **Deletion Functionality:**
  - Supports habit deletion with Redux integration.
- **Progress Display:**
  - Visualizes target and actual habit progress.
- **Code Organization:**
  - Structured to enhance readability.

### Home.jsx

- **State Management:**
  - Utilizes React hooks and Redux.
- **Error Handling:**
  - Displays error message for invalid habit input.
- **Habit Rendering:**
  - Maps through habits to render components.
- **Date Display:**
  - Integrates today's date in the top section.

### TopNav.jsx

- **Navigation Bar:**
  - Provides links for Home and Weekly views.
- **Date Display:**
  - Shows the current date.
- **Styling:**
  - Utilizes styles for a consistent theme.

## Components/Week Folder

### ActionDayButton.jsx

- **Responsibility:**
  - Manages weekly habit status changes.
- **Redux Integration:**
  - Dispatches actions for status changes.
- **Code Structure:**
  - Follows a consistent design.

### SingleDay.jsx

- **Responsibility:**
  - Displays individual days minimally.
- **Customization:**
  - Placeholder for additional content.

### Weekly.jsx

- **Habit Rendering:**
  - Maps through habits to render components.

### WeeklyCard.jsx

- **Responsibility:**
  - Displays habit information for the weekly view.
- **Integration:**
  - Includes ActionDayButton and SingleDay components.
- **Code Structure:**
  - Organized for clarity.

## Reducers Folder

### habitReducer.js

- **Redux Reducer:**
  - Manages application state for habits.
- **ActionTypes:**
  - Handles ADD_HABIT, DELETE_HABIT, ADD_HABIT_STATUS, ADD_WEEKLY_DONE_STATUS.
- **Default State:**
  - Initializes habits with default data.

### index.js

- **Root Reducer:**
  - Combines all reducers into a root reducer.

## Other Files

### App.jsx

- **Routing:**
  - Utilizes React Router for navigation.

### index.js (Store Configuration)

- **Redux Store:**
  - Configures the Redux store with local storage persistence.
- **Subscription:**
  - Subscribes to store changes.

## Styling

- **CSS Modules:**
  - Modular and scoped styling for each component.
- **Consistency:**
  - Ensures a consistent and visually appealing theme.
