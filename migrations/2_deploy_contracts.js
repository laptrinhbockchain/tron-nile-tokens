var JST = artifacts.require("./jst.sol");
var SUN = artifacts.require("./sun.sol");
var TUSD = artifacts.require("./tusd.sol");
var USDC = artifacts.require("./usdc.sol");
var USDD = artifacts.require("./usdd.sol");
var USDT = artifacts.require("./usdt.sol");
var WIN = artifacts.require("./win.sol");
var WTRX = artifacts.require("./wtrx.sol");

module.exports = function(deployer) {
    deployer.deploy(JST);
    deployer.deploy(SUN);
    deployer.deploy(TUSD);
    deployer.deploy(USDC);
    deployer.deploy(USDD);
    deployer.deploy(USDT);
    deployer.deploy(WIN);
    deployer.deploy(WTRX);
};
