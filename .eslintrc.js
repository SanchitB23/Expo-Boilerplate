module.exports = {
  extends: [
    'airbnb',
    'react-hooks'
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    //You can override any rules you want
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  },
};
