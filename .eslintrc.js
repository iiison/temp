module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    impliedStrict: true
  },
  plugins: ["react"],
  settings: {
    "import/resolver": "webpack",
    pragma: "React",
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
      propWrapperFunctions: [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        { property: "freeze", object: "Object" },
        { property: "myFavoriteWrapper" }
      ],
      linkComponents: [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        "Hyperlink",
        { name: "Link", linkAttribute: "to" }
      ]
    }
  },
  rules: {}
};

