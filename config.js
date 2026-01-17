require("dotenv").config();

module.exports = {
  privateKey: process.env.PRIVATE_KEY,
  rpcUrl: process.env.RPC_URL,
  tokenAddress: process.env.TOKEN_ADDRESS,
  abi: require("./erc20ABI.json")
};
