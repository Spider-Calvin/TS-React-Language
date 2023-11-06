# LearnLanguages - Language Learning Web App

## Overview

LearnLanguages is a web application designed for language enthusiasts to expand their vocabulary. With this app, you can learn new words, listen to their correct pronunciations, take interactive quizzes, and track your language learning progress.

## Technologies Used

- React
- TypeScript
- React Redux Toolkit
- Shadcdn UI components
- Webpack
- Vite.js

## Getting Started

Follow these steps to get started with the project:

1. Clone this repository to your local machine.
2. Install project dependencies by running `npm install`.
3. Start the development server with `npm run dev`.
4. Access the app in your browser at `http://localhost:3000`.

## Usage

1. Browse the list of words and their corresponding audio pronunciations.
2. Click on a word to hear its pronunciation.
3. Test your knowledge by taking interactive quizzes.
4. Keep track of your progress and view your quiz results.

## Contributing

We welcome contributions and enhancements. If you'd like to contribute, please open an issue or create a pull request.

## License

This project is licensed under the MIT License.

Happy learning!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
