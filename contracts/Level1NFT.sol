// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;  

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; 
import "@openzeppelin/contracts/utils/Counters.sol";

contract Level1Completion is ERC721URIStorage {  

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; 

    constructor() ERC721("L1Completion","L1C") {}  

    function awardCertificate(address learner, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(learner, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

}