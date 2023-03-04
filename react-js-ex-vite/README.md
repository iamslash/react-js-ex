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
```
