module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@turbo/core-components': './turbo/core-components',
          '@turbo/core-theme': './turbo/core-theme'
        }
      }
    ]
  ]
};
