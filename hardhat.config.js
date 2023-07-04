require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of all accounts", async (taskArgs,hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account);
  }
}) 

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};
