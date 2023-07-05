
# Smiles Dapp

This project demonstrates the development of a simple Smiles dapp using React and Ethereum blockchain technology. The project allows users to connect their MetaMask wallets, send and recieve smiles, and view the smiles collected.

## Prerequisites
- Node.js (v18.16.0 or higher)        
- MetaMask wallet extension installed in your browser   
- ethers.js (v5.7.2 or higher)
## Description
This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The functionality of the smart contract is displayed to the user through a frontend made in react. The contract has a state variable, "totalSmiles" and has three functions. The "recieveSmile()" function increases value of "totalSmiles" variable by 1 while the "sendSmile()" function does the opposite. The "getTotalSmiles()" function reads the value of "totalSmiles" from the smart contract and returns it. Further, the smart contract is deployed with help of hardhat and connected to the Ethereum blockchain using ethers.js. The smart contract is integerated with react to display it's functionslities on a browser and the user can connect their metamask wallet to make transactions.


## Getting Started

1. Clone the repository:
   
```
git clone <https://github.com/Isheta20/My-Smiles-Dapp.git>
```

2. Install the dependencies :

```
cd Assessment_frontend           
npm i
```

Open two additional terminals in your VS code.

In the second terminal type: npx hardhat node.

In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js.

Back in the first terminal, type npm start to launch the front-end.

Open the application in your browser, the project will be running on your localhost. Typically at:

```
http://localhost:3000
```

Connect your MetaMask wallet and interact with the dapp interface.
## Project Structure
- artifacts/ - Contains the contract ABI and artifacts
- Assessment_frontend/ - Contains the react app
  - src/ - Contains the application source code
    - App.css - Contains the main application design/style
    - App.js - Main application component
    - index.js - Entry point of the application
    - index.css - Entry point design/style
- contracts/ - Contains the Solidity smart contract code
- scripts/ - Contains the deploy.js
## Technologies Used
- React - JavaScript library for building user interfaces  
- Ethereum - Blockchain network for decentralized applications  
- MetaMask - Wallet and gateway to Ethereum blockchain  
- ethers.js - Library for interacting with Ethereum smart contracts  
- Hardhat - Development environment and task runner for building, testing, and deploying smart contracts on Ethereum and other blockchain platforms
## Authors

- [@Isheta20](https://github.com/Isheta20)
- [Linkedin](www.linkedin.com/in/isheta-aggarwal-76a91b230)




## License

This project is licensed under the MIT License - see [MIT LICENSE](https://github.com/Isheta20/ETHAssessement/blob/main/LICENSE)
 for details

