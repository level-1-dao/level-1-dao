const Learn2Earn = artifacts.require('Learn2Earn');
const Level1Token = artifacts.require('Leven1Token');
const Level1NFT = artifacts.require('Level1NFT');

module.exports = function (deployer) {
  deployer.deploy(Learn2Earn, Level1Token.address, Level1NFT.address);
};
