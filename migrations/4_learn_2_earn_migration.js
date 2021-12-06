const Learn2Earn = artifacts.require('Learn2Earn');
const Level1Token = artifacts.require('LevelOne');
const Level1NFT = artifacts.require('Level1Completion');

module.exports = function (deployer) {
  deployer.deploy(Learn2Earn, Level1Token.address, Level1NFT.address);
};
