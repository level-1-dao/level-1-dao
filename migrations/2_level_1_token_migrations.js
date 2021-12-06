const Level1Token = artifacts.require('LevelOne');

module.exports = function (deployer) {
  deployer.deploy(Level1Token);
};
