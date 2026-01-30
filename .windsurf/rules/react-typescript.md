---
trigger: model_decision
description: This rule should be applied when writing any React code with Typescript for the frontend of the application
---

1. When writing typescript always define interfaces/types, prefer interfaces if possible
2. NEVER use "any" types
3. When creating a component in react, always define the props as an interface, unless the component has no imports
4. ALWAYS break up tsx files into smaller components instead of one large file
5. When creating files, use the components, page, hooks, utils file structure
  - Pages are the main pages of the app
  - Components make up pages
  - hooks are used to call the API
  - utils are tools or functions that are reused throughout the app
6. If code starts to duplicate, consolidate into util functions or components
7. Comment important sections of code, and the purpose of each class or function
8. All components and pages should adhere to light and dark mode standards
