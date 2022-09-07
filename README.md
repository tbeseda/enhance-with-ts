```
.
├── enhance ................... the app source directory
│  ├── api .................... compiled/copied to app/api/
│  │  └── todos.ts
│  ├── components ............. compiled to public/components/
│  │  ├── todo-item.ts
│  │  └── tsconfig.json ....... provides TS config for browser
│  ├── elements ............... compiled/copied to app/elements/
│  │  ├── todo-footer.mjs
│  │  ├── todo-header.mjs
│  │  ├── todo-item.ts ........ look, a .ts file!
│  │  └── todo-list.mjs ....... mixed with .mjs
│  ├── head.ts ................ compiled/copied to app/
│  ├── pages .................. compiled/copied to app/pages/
│  │  ├── index.ts
│  │  └── todos.html
│  └── tsconfig.json .......... parent TS configuration
├── app ....................... destination for compiled files
│  └── pages .................. dir must be present on Sandbox start
└── public
   ├── components
   │  └── ..................... files from enhance/components
   └── styles.css
```
