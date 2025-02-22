module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            helpers: './src/helpers',
            components: './src/components',
            assets: './src/assets',
            views: './src/views',
            providers: './src/providers',
            templates: './src/templates',
            store: './src/store'
          },
        },
      ],
    ],
  };
};
