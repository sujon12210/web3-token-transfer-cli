const { sendToken } = require("./token");

async function start() {
  const to = process.argv[2];
  const amount = process.argv[3];

  if (!to || !amount) {
    console.log("Usage: node transfer.js 0xReceiver 10");
    return;
  }

  const tx = await sendToken(to, amount);
  console.log("Transaction hash:", tx);
}

start();
