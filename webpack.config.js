const { isProd } = require('./webpack/common');

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('isProd', isProd ? 'true' : 'false');

const libraryConfig  = require('./webpack/KotOR');
const launcherConfig = require('./webpack/Launcher');
const gameConfig     = require('./webpack/Game');

module.exports = [
  libraryConfig('KotOR.js', 'green'),
  launcherConfig('Launcher', 'orange'),
  gameConfig('Game Client', 'blue'),
];
