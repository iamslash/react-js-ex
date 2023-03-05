# Tech Stacks

typescript, vite, eslint, prettier, zustand, mui, axios, react-query

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

- [React Query and Axios (Typescript) example with Rest API | bezkoder](https://www.bezkoder.com/react-query-axios-typescript/)
- [React Query 사용해보기 | velog](https://velog.io/@godud2604/React-Query-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0)
- [react-query](https://kyounghwan01.github.io/blog/React/react-query/basic/#react-query-%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%B7)
- [Realworld conduit api-docs](https://api.realworld.io/api-docs/#/Articles/GetArticles)
