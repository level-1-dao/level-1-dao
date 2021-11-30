// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 
import "@openzeppelin/contracts/access/Ownable.sol";

contract LevelOne is ERC20, Ownable {
        constructor() ERC20("LevelOne", "LO") { 
            _mint(msg.sender, 1000000); 
        } 
}