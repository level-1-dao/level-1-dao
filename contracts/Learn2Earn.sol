// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;   

interface LevelOneToken {  
    function approve(address spender, uint256 amount) external returns (bool); 

    function transfer(address recipient, uint256 amount) external returns (bool) ; 

    function balanceOf(address account) external view returns (uint256);
} 

interface LevelOneNFT { 
    function awardCertificate(address learner, string memory tokenURI) external view returns (uint256); 
    function balanceOf(address owner) external view returns (uint256);
}

contract Learn2Earn {  
    //internal values
    // levelone token smart contract address  
    address private levelOneContract; //add the actual test net address

    // nft smart contract address 
    address private levelOneNftContract; // add the actual testnet address 

    //(TODO): Adam - approve this smart contract as a spender for the L1 token contract in the construction
    constructor(address tokenContract, address nftContract) {  
        levelOneContract = tokenContract; 
        levelOneNftContract = nftContract;
    }

    //functions 
    function awardUser(address learner, uint256 tokenAmount) public payable returns (bool)  { 
        return LevelOneToken(levelOneContract).transfer(learner, tokenAmount);
    }   

    function awardCertificate(address learner, string memory tokenURI) external view returns (uint256) { 
        return LevelOneNFT(levelOneNftContract).awardCertificate(learner, tokenURI);
    }

    //(TODO): Adam - check if user is apart of a dao. just use gitcoin for testing
    function isDaoHolder(address learner, address daoToken) public returns (bool) { 

    }

    function hasLevelOneToken(address learner) public view returns (bool) {  
        uint tokenAmount = LevelOneToken(levelOneContract).balanceOf(learner);
        if (tokenAmount > 0) { 
            return true;
        } 
        return false ;
    }

    function hasLevelOneNft(address learner) public view returns (bool) {  
        uint nftAmount = LevelOneNFT(levelOneNftContract).balanceOf(learner);  
        if (nftAmount > 0) { 
            return true;
        } 
        return false ;
    }
}