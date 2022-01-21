// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;  

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; 
import "@openzeppelin/contracts/utils/Counters.sol"; 
import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";

contract Level1Completion is ERC721URIStorage, BaseRelayRecipient {  

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; 

    constructor(address _trustedForwarder) ERC721("L1Completion","L1C") { 
        trustedForwarder = _trustedForwarder;
    }   

    modifier onlyOwner(){
            require(msg.sender == owner);
            _;
        }

    function setTrustedForwarder(address _trustedForwarder) onlyOwner { 
       trustedForwarder = _trustedForwarder;
    }

    function versionRecipient() external view override returns (string memory) {
        return "1";
    }

    function awardCertificate(address learner, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(learner, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

}