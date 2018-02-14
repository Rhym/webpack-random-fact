# Webpack Random Fact Plugin

Generate a random fact at the end of your build. Just because.

This is just a glorified wrapper for my [node-random-fact](https://github.com/Rhym/node-random-fact) repo.

## Install

```
yarn add webpack-random-fact --dev
```

## Usage

In your webpack config, add the plugin to the plugins array. Who would have thunk it?

```javascript
const WebpackRandomFactPlugin = require('webpack-random-fact');

module.exports = {
  //...
  plugins: [
    //...
    new WebpackRandomFactPlugin(),  
  ],
};
```