const { ethers } = require("ethers");
const config = require("./config");

async function sendToken(to, amount) {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const wallet = new ethers.Wallet(config.privateKey, provider);

  const contract = new ethers.Contract(
    config.tokenAddress,
    config.abi,
    wallet
  );

  const tx = await contract.transfer(to, amount);
  await tx.wait();
  return tx.hash;
}

module.exports = { sendToken };
