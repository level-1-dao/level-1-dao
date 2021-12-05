const Level1Token = artifacts.require('Level1Token');

module.exports = function (deployer) {
  deployer.deploy(Level1Token);
};