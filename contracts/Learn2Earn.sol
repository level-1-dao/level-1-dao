// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;   

interface LevelOneToken {  
    //add needed function signatures

} 

interface LevenOneNFT { 
    //add needed function signatures 
}

contract Learn2Earn {  
    //internal values
    // levelone token smart contract address  
    address private levelOneContract; //add the actual test net address

    // nft smart contract address 
    address private levelOneNftContract; // add the actual testnet address

    //functions 
    //award user(currentAddress, amountOfTokens)  
    function awardUser(address learner, uint256 tokenAmount) public returns (uint256) { 

    }

    // awardNft(currentAddress, nft)  This may not be neccessary. User could just directly mint from the smart contract.  

    //check if user is apart of a dao. just take gitcoin
    function isDaoHolder(address learner, address daoToken) public returns (bool) { 

    }

    function hasLevelOneToken(address learner) public { 

    }

    function hasLevelOneNft(address learner) public { 

    }
}