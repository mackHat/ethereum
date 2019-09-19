pragma solidity 0.5.10;

contract Contract {
 string public ipfsHash;

 function sendHash(string memory x) public {
   ipfsHash = x;
 }

 function getHash() public view returns (string memory x) {
   return ipfsHash;
 }
}