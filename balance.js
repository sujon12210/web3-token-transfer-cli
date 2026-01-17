const { ethers } = require("ethers");
const config = require("./config");

async function getBalance(address) {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const contract = new ethers.Contract(
    config.tokenAddress,
    config.abi,
    provider
  );

  const balance = await contract.balanceOf(address);
  return balance.toString();
}

module.exports = { getBalance };
