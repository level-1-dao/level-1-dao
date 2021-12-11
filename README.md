# Level 1  
### A fun and friendly learning and development platform designed for decentralized communities to tap into the full awesomeness of their membership. 
### Watch our presentation explaining Level 1 more in depth here here -> [Video](https://youtu.be/labhduL_v0Y)
### Our DApp is currently live on Rinkeby Testnet. Check it out the Gitcoin onboarding course under the 'Discover' tab -> [Level 1 DApp](https://level1.vercel.app/)  


<p align="center">
 <img src="public/assets/images/L1_Mascots_1.png?raw=true" alt="Next js starter banner">
</p>

## Tech Used

- Web3 Js 
- Solidity 
- Alchemy(Ethereum Node Provider) 
- Next.js 
- Vercel
- Open Zeppelin
- Truffle 
- Ipfs

### Smart Contracts(Currently Only on Rinkeby Testnet)

- [Level1Token Contract](https://rinkeby.etherscan.io/address/0xea5Bd7D2aBe3c8546D70c470A65422CC322266E4)
- [Level1NFT Contract](https://rinkeby.etherscan.io/address/0x278C8D7ae2694f888894EA4817eCdB84bc5E6781)
- [Learn2Earn Contract](https://rinkeby.etherscan.io/address/0x45b3fe142ba8c4d55b1f726a24d7ea335516680c)

## Fast Follows Before Mainnet Launch

### Building A Gasless DApp for users  
We would imagine that your first thought after learning about a platform with onboarding users through a Learn2Earn model was "What about the gas fees?". We weren't able to cram this into the scope of the hackathon, but we are doing a fast follow on this for a mainnet launch. We are currently working on incorparating GSN(Gas Station Network), to create a gasless experience for our users. This is a major drawback to our platform currently and definitely serves as our top priority.

### Level 1 Mobile App 
While our platform is catered towards people already in Web3, we recognize that a huge userbase is being left out by not having a mobile component for a platform like this. Our current UI does transfer well to the MetaMask mobile app, however native mobile applications will allow us to leverage a better user experience for users.  

### Gating Discords Through Our Level 1 NFT 
What if we could have DAOs gate their discords by requiring new members to have our Level 1 NFT 🤔  

## Security Concerns 
- Users abusing the Learn2Earn model to earn more tokens than they're allowed to win 
There's about 3 layers of protection we can take to prevent this happening. This first is making sure we have an air tight UI to prevent users from being able to trigger transactions more than once for example. The next layer would be having a check in our Learn2Earn contract to ensure a wallet address hasn't taken a course before of course. However, what if someone just switches their wallet to get more level 1 tokens? This is where our ideas surrounded by tokenomics come in. While we don't want the Level 1 Tokens to be worthless, we will have to have tokenomics in place that essentially don't incentivze bad actors to sit through our courses multiple times to rack up on Level 1 tokens. 
Some ideas we have considered for our tokenomics/ux
- Burning Level 1 tokens after a wallet has exceeded a pre-determined token ownership limit. (sum of all token awards from courses)
- Minting Level 1 tokens at a frequeny that cause for there to be a low incentive to hold the tokens for a long time. This may also be useful for helping users get immediate value out of Level 1 tokens. 


## Level 1 Token 
We know, we know. *Another* cryptocurrency 🙄, the last thing we want to is make this a moonshot project!(add reasons for level 1 token)

## Level 1 NFT  
The Level 1 NFT simply serves as a point of reference for users to have showing proof of having finished a particular course on website. We hope to leverage the NFTs users awarded for by gating discord communities, creating incentive to participate in more courses on the platform through awards from nft ownership, and creating a community amongst Level 1 users.   
<p align="center">
 <img src="public/assets/images/Dog_2_3.png?raw=true" alt="Next js starter banner">
</p>

# Running our DApp locally


