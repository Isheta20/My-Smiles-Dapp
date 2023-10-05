import { useState } from "react";
import contractAbi from "./EthAvaxAssessment.sol/EthAvaxAssessment.json";
import Footer from "./components/Footer";

const ethers = require("ethers");

function App() {
  const [smile, setSmile] = useState(undefined);
  const [address, setAddress] = useState("Connect Wallet");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545/"
  );

  const walletProvider = new ethers.providers.Web3Provider(window.ethereum); //signer will help to send data to our smart contract
  const signer = walletProvider.getSigner();

  const getContractData = new ethers.Contract(
    contractAddress,
    contractAbi.abi,
    provider
  );
  const sendContractTx = new ethers.Contract(
    contractAddress,
    contractAbi.abi,
    signer
  );
  const requrestAccount = async () => {
    // console.log(await provider.getCode(contractAddress));

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    // console.log(accounts);//displays the accounts that are connected, after connecting you can switch between accounts
    setAddress(accounts[0]);
  };

  const addSmile = async () => {
    console.log("added");
    // totalSmiles+=1;
    const add = await sendContractTx.recieveSmile();
    await add.wait();
    getTotalSmiles(); //to set the new value of smile
    // console.log("Inside addsmile",smile);
  };

  const subSmile = async () => {
    console.log("sub ");
    const sub = await sendContractTx.sendSmile();
    await sub.wait();
    getTotalSmiles();
    // totalSmiles-=1;
  };

  const getTotalSmiles = async () => {
    console.log("total");
    // const data = await (getContractData.getTotalSmiles()).toNumber();
    const data = await getContractData.getTotalSmiles();
    const count = parseInt(data._hex);
    // console.log("data",count);
    setSmile(count);
    // console.log("after setting smile",smile);
  };

  return (
    <main className="h-screen bg-indigo-100">
      <header className="bg-slate-800 h-36 flex items-center justify-center ">
        <h1 className="text-4xl font-serif text-slate-100">
          Hello, Isheta here!
        </h1>
      </header>

      <section className="flex flex-col gap-4 mt-12">
        <div>
          <p className="text-center text-2xl font-medium font-sans">
            Want to share some joy or get some cheer?
          </p>
          <p className="text-center text-base font-light font-sans">
            Just tap on the button to give a smile or the other one to get a
            smile!
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 mt-8 md:mt-4">
          <h3 className="font-sans text-lg font-light">Your Wallet Address</h3>
          <button
            onClick={requrestAccount}
            class="rounded px-5 py-2.5 overflow-hidden group bg-slate-800 relative hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-800 transition-all ease-out duration-400"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-slate-500 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative font-mono font-medium font-2xl">
              {address}
            </span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8">
          <button
            onClick={addSmile}
            class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-800 text-indigo-800"
          >
            <span class="absolute w-64 h-0 transition-all duration-400 origin-center rotate-45 -translate-x-20 bg-indigo-800 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-indigo-800 transition duration-400 group-hover:text-white ease">
              Send Smile
            </span>
          </button>

          <button
            onClick={subSmile}
            class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-800 text-indigo-800"
          >
            <span class="absolute w-64 h-0 transition-all duration-400 origin-center rotate-45 -translate-x-20 bg-indigo-800 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-indigo-800 transition duration-400 group-hover:text-white ease">
              Recieve Smile
            </span>
          </button>
        </div>

        <p className="mt-8 text-center text-2xl font-serif">
          Number of Smiles &#128513;: {smile}
        </p>
      </section>

      <Footer />
    </main>
  );
}

export default App;
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
