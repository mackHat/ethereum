//overrides metamask v0.2 for our 1.0 version.

//1.0 lets us use async and await instead of promises

import Web3 from "web3";

if (window.ethereum) {

window.web3 = new Web3(window.ethereum);

try {

// Request account access if needed

(async () => {

await window.ethereum.enable();

})();

// Acccounts now exposed

this.web3.eth.sendTransaction({/* … */ });

} catch (error) {

// User denied account access…

}

}

// Legacy dapp browsers…

else if (window.web3) {

window.web3 = new Web3(this.web3.currentProvider);

// Acccounts always exposed

this.web3.eth.sendTransaction({/* … */ });

}

// Non-dapp browsers…

else {

console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");

}

export default window.web3;