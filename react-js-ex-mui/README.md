# Tech Stacks

typescript, vite, eslint, prettier, zustand, mui

# Build & Run

```bash
# Create a project
$ yarn create vite react-js-vite --template react-ts
$ cd ract-js-vite

# Install node_modules
$ yarn

# Run
$ yarn dev

# Install eslint
$ yarn add -D eslint @typescript-eslint/parser
# Update eslint config
$ vim .eslintrc.cjs
# Run ESLint
$ yarn eslint src/**/*.ts*
# Fix with ESLint
$ yarn eslint src/**/*.ts* --fix

# Install prettier
$ yarn add  -D prettier eslint-config-prettier eslint-plugin-prettier
# Update prettier config
$ vim .prettierrc.cjs
# Update eslint config
$ vim .eslintrc.cjs

# Update vscode config
$ vim .vscode/settings.json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
# Install Prettier Formatter for Visual Studio Code

# Install zustand
$ yarn add zustand
```

# Materials

- [[Zustand] 초간단 전역 상태관리! (ft.Typescript)](https://velog.io/@hinyc/Zustand-%EC%B4%88%EA%B0%84%EB%8B%A8-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-ft.Typescript)
