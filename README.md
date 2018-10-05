# ebabel-bounding-box
[![Build Status](https://travis-ci.org/ebabel-games/ebabel-bounding-box.svg?branch=master)](https://travis-ci.org/ebabel-games/ebabel-bounding-box)

Calculate a 3D bounding box for a THREE.js mesh.

## Instructions for Module Usage in your project/game

### Install
```
npm i --save ebabel-bounding-box
```

### Usage
```
const boundingBox = require('ebabel-bounding-box');

const result = bounding-box(THREE, mesh);
```

## Development of this module
Fork this repository on Github, `git clone` your repository, checkout the develop branch, and when you are done, submit a pull request from your repository develop branch to this repository develop branch.

* fork this repository on github.com
* git clone your forked repository.
* git checkout develop

### First step when developing
```
npm install
```

### Run linting and unit tests
```
npm test
```

An html coverage report is to be found in the `coverage` folder.

### Generate documentation
```
npm run jsdoc
```

The generated documentation is to be found in the `docs` folder.
