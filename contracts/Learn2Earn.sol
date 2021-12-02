// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;   

interface LevelOneToken {  
    function approve(address spender, uint256 amount) external returns (bool); 

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool); 

    function balanceOf(address account) external view returns (uint256);
} 

interface LevenOneNFT { 
    function awardCertificate(address learner, string memory tokenURI) external view returns (uint256); 
    function balanceOf(address owner) external view returns (uint256);
}

contract Learn2Earn {  
    //internal values
    // levelone token smart contract address  
    address private levelOneContract; //add the actual test net address

    // nft smart contract address 
    address private levelOneNftContract; // add the actual testnet address 

    //approve this smart contract as a spender for the L1 token contract in the construction
    constructor() { 

    }

    //functions 
    //award user(currentAddress, amountOfTokens)  
    function awardUser(address learner, uint256 tokenAmount) public returns (uint256) { 

    }   

    function awardCertificate(address learner, string memory tokenURI) external view returns (uint256) { 
        
    }

    //check if user is apart of a dao. just take gitcoin
    function isDaoHolder(address learner, address daoToken) public returns (bool) { 

    }

    function hasLevelOneToken(address learner) public { 

    }

    function hasLevelOneNft(address learner) public { 

    }
}