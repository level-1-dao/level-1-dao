# Level 1 
#### Our DApp is currently live on Rinkeby Testnet. Check it out! -> [Level 1](https://level1.vercel.app/)


<p align="center">
 <img src="public/assets/images/L1_Mascots_1.png?raw=true" alt="Next js starter banner">
</p>

### A fun and friendly learning and development platform designed for decentralized communities to tap into the full awesomeness of their membership.

## Tech Used

- Web3 Js 
- Solidity 
- Alchemy(Ethereum Node Provider) 
- Next.js
- Open Zeppelin
- Truffle

### Smart Contracts

- [Level1Token Contract](https://rinkeby.etherscan.io/address/0xea5Bd7D2aBe3c8546D70c470A65422CC322266E4)
- [Level1NFT Contract](https://rinkeby.etherscan.io/address/0x278C8D7ae2694f888894EA4817eCdB84bc5E6781)
- [Learn2Earn Contract](https://rinkeby.etherscan.io/address/0x45b3fe142ba8c4d55b1f726a24d7ea335516680c)

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/main.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Boilerplate)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-js-Boilerplate)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)
