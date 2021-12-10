const Level1NFT = artifacts.require('Level1Completion');

module.exports = function (deployer) {
  deployer.deploy(Level1NFT);
};
