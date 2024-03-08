# MDB 5 Academic Portfolio Template

### Built with Bootstrap 5, Material Design 2.0 UI Kit, and Font Awesome 6 Pro

### [>> My academic website built with this template](https://www.cs.toronto.edu/~ming/)
##### [>> Give MDB 5 a star](https://github.com/mdbootstrap/mdb-ui-kit/)

___

### Installation
```
npm install
```
A free version of **MDB UI Kit** and a paid version of **Font Awesome** are already included as a dependencies, in 
[package.json](package.json). 
Upgrade to paid or downgrade to free as you like.
### Dev Server
```
npm run start
```

### Build
```
npm run build
```

### Features:

* Bundling via [Webpack](https://github.com/webpack/webpack) 5.74.0
* ES6+ Support via [babel-cli](https://github.com/babel/babel) v7.18.10
* SASS Support via [sass-loader](https://github.com/webpack-contrib/sass-loader) v13.0.2
* Linting via [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin) v3.2.0
* Unit Testing via [jest](https://github.com/facebook/jest) v29.0.1
* Code Formatting via [prettier](https://github.com/prettier/prettier) v2.7.1

### Files structure:

```
mdbootstrap-academic/
├── dist/
│   └── index.html
├── src/
│   ├── js/
│   └── scss/
└── webpack.config.js
```
<br><br>

___

# MDB UI KIT - Importing of MDB files

### Importing JS modules
You can import the entire library or just individual modules:
```
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { Input as CustomInput } from 'mdb-ui-kit'; // module with custom name
```

### Importing CSS file
To import MDB stylesheet please use the following syntax:
```
@import '~mdb-ui-kit/css/mdb.min.css';
```
