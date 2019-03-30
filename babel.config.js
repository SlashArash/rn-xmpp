module.exports = function(api) {
  api.cache(true);
  return {
    "presets": [
      "babel-preset-expo",
    ],
    "plugins": [
      "@babel/plugin-transform-runtime",
    ],
    "env": {
      "production": {
        "plugins": ["transform-remove-console"]
      },
    }
  };
};
