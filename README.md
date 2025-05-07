# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
## Reminder App Features

This app demonstrates a simple reminder management system built with React and TypeScript. Below are the key features:

### Features
- **Add Reminders**: Users can add new reminders with a title, description, and date.
- **Edit Reminders**: Existing reminders can be edited to update their details.
- **Delete Reminders**: Individual reminders can be deleted.
- **Delete All Reminders**: Users can clear all reminders at once.
- **Counter**: A simple counter to demonstrate state management.

### Components
- **App**: The main component that manages the state and renders the UI.
- **ReminderList**: A child component that displays the list of reminders and provides options to delete or edit them.

### State Management
The app uses React's `useState` and `useCallback` hooks for managing state and optimizing performance.

### Styling
The app is styled using Tailwind CSS for a modern and responsive design.

### Example Reminder Object
```ts
{
  id: 1,
  title: "Buy groceries",
  description: "Milk, Bread, Eggs",
  date: "2023-10-01",
}
```

### How to Use
1. Add a new reminder by filling in the title, description, and date fields, then clicking "Add Reminder."
2. Edit an existing reminder by clicking the "Edit" button next to it, updating the fields, and saving the changes.
3. Delete a reminder by clicking the "Delete" button next to it.
4. Clear all reminders by clicking the "Delete All" button.

This app is a great starting point for learning React and TypeScript while building a functional and interactive UI.
