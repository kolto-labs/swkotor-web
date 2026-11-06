const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { ROOT, isProd, commonStats, makeWebpackBar, makeDevOutput } = require('./common');

// Placeholder: the game client has been removed.
// This only publishes a static /game/ page so launcher links resolve.
module.exports = (name, color) => ({
  mode: isProd ? 'production' : 'development',
  entry: {},
  stats: commonStats,
  plugins: [
    makeWebpackBar(name, color),
    new CopyPlugin({
      patterns: [
        { from: "src/apps/game/index.html", to: "index.html" },
        { from: "src/assets/game", to: "" },
        { from: "src/assets/icons/icon.ico", to: "favicon.ico" },
      ],
    }),
  ],
  output: {
    path: path.resolve(ROOT, 'dist/game'),
    ...makeDevOutput('/game/', 'kotor-game'),
  },
});
