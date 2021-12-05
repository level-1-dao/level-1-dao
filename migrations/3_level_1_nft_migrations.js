const Level1NFT = artifacts.require('Level1NFT');

module.exports = function (deployer) {
  deployer.deploy(Level1NFT);
};
