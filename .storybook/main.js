const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  presets: [
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "../tsconfig.json"),
          transpileOnly: true,
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
        },
        include: [path.resolve(__dirname, "../src")],
      },
    },
    {
      name: "@storybook/addon-docs/preset",
      options: {
        configureJSX: true,
        //sourceLoaderOptions: null,
      },
    },
  ]
};