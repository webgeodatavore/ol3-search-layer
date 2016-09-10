module.exports = {
  "extends": "openlayers",
  "env": {
    "browser": 1
  },
  "globals": {
    "ol": 1,
    "horsey": 1
  },
  "plugins": [],
  "rules": {
    "no-console": [
      2,
      {
        "allow": [
          "assert"
        ]
      }
    ],
    "no-constant-condition": 0
  }
};