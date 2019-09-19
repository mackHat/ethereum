import web3 from './web3';
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address

const address = '0x64acf2003bab318f71e890d2abe557483eac8fc2';
//use the ABI from your contract
const abi = [  
    {
      "constant": true,
      "inputs": [],
      "name": "ipfsHash",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getHash",
      "outputs": [
        {
          "name": "x",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "string"
        }
      ],
      "name": "sendHash",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }  
]
export default new web3.eth.Contract(abi, address);