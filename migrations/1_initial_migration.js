const Migrations = artifacts.require("TestToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
