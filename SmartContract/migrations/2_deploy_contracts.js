const Market = artifacts.require("./Market.sol");

module.exports = function(deployer) {
  deployer.deploy(Market);
};
