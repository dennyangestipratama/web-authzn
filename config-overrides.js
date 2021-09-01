const path = require("path");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin)
  );
  const defaultAlias = config.resolve.alias || {};

  config.resolve.alias = {
    ...defaultAlias,
    "@Image": path.resolve(__dirname, "./src/Assets/Image"),
    "@Icon": path.resolve(__dirname, "./src/Assets/Icon"),
    "@Components": path.resolve(__dirname, "./src/Components"),
    "@Context": path.resolve(__dirname, "./src/Context"),
    "@Layouts": path.resolve(__dirname, "./src/Layouts"),
    "@Routes": path.resolve(__dirname, "./src/Routes"),
    "@Pages": path.resolve(__dirname, "./src/Pages"),
    "@Services": path.resolve(__dirname, "./src/Services"),
    "@Styles": path.resolve(__dirname, "./src/Styles"),
    "@Utils": path.resolve(__dirname, "./src/Utils"),
    "@": path.resolve(__dirname, "./src"),
  };
  return config;
};
