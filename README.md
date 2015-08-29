# RReact Boilerplate
A custom boilderplate from `react-flux-router-boilerplate`, remove flux out of this repo, for small and simple application.


Check this repo for more information
[react-flux-router-boilerplate](https://github.com/apzentral/react-flux-router-boilerplate)
A boilerplate for a full React, Flux and Router application development.

[working demo](http://capheshift.github.io/RReact-boilerplate/)


### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /config/                    # Configuration files for Webpack, Jest etc.
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /assets/                # All assets files
│   ├── /components/            # React components. E.g. Navbar.jsx, Calendar.jsx
│   ├── /commons/               # Enumerations used in action creators and stores
│   ├── /layouts/               # Shared layouts for top-level components
│   ├── /pages/                 # Top-level, URL-bound React components
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /app.js                 # The application's bootstrap file, entry point
│   ├── /config.js              # The application's config file
│── gulpfile.js                 # Configuration file for automated builds
└── package.json                # The list of 3rd party libraries and utilities
```

### Getting Started

1. Clone or fork this project.
2. Then run this command `$ npm install`
3. Run `$ gulp serve`
