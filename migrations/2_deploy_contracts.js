var JST = artifacts.require("JST");
var SUN = artifacts.require("SUN");
var TUSD = artifacts.require("TUSD");
var USDC = artifacts.require("USDC");
var USDD = artifacts.require("USDD");
var USDT = artifacts.require("USDT");
var WIN = artifacts.require("WIN");
var WTRX = artifacts.require("WTRX");

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
