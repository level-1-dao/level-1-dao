import Image from "next/image";
import Link from "next/link";

const levels = [
  {
    id: 1,
    name: "Aragon Ambassador Program",
    href: "#",
    imageSrc: "/assets/images/logos/Aragon-wallpaper.png",
    imageAlt: "Aragon Network DAO Join the Fight",
    description:
      "An interactive introduction to the Aragon Network DAO and the Ambassador program.",
    comingSoon: true,
  },
  {
    id: 2,
    name: "Gitcoin DAO Tools",
    href: "/learning/5cbc223b-57d2-439e-8744-f8b97bc455cd",
    imageSrc: "/assets/images/logos/GitcoinDAO.png",
    imageAlt: "Gitcoin DAO Logo",
    description:
      "A short interactive learning module to help you get familiar with the GitcoinDAO tools.",
    comingSoon: false,
  },
  {
    id: 3,
    name: "Bankless DAO",
    href: "#",
    imageSrc: "/assets/images/logos/Bankless-stones.png",
    imageAlt: "Bankless DAO Logo",
    description:
      "Learn about the mission, vision, values and how to get started in the role that feels best for you.",
    comingSoon: true,
  },
  {
    id: 4,
    name: "She256 Fellowships",
    href: "#",
    imageSrc: "/assets/images/logos/she256.svg",
    imageAlt: "She256 Logo",
    description:
      "A fun, interactive learning module that shows you how to start your own She256 Fellowship.",
    comingSoon: true,
  },
  {
    id: 5,
    name: "Harmony",
    href: "#",
    imageSrc: "/assets/images/logos/harmony-logo.png",
    imageAlt: "Harmony Logo",
    description:
      "A Level1 guide to layer2. Learn about roll-ups and cross-chain transactions.",
    comingSoon: true,
  },
  {
    id: 6,
    name: "Mintgate",
    href: "#",
    imageSrc: "/assets/images/logos/mintgate-logo.jpeg",
    imageAlt: "Mintgate Logo",
    description:
      "Token-gated whaat? Learn about the mintgate and how to get started.",
    comingSoon: true,
  },
];

const emergingLevels = [
  {
    id: 1,
    name: "Trauma Informed",
    href: "#",
    imageSrc: "/assets/images/logos/culture.jpeg",
    imageAlt: "Aragon Network DAO Join the Fight",
    description:
      "Gain awareness of what it means to go through trauma and how it impacts the way we interact with each other.",
    comingSoon: true,
  },
  {
    id: 2,
    name: "Mental Health First Aid",
    href: "#",
    imageSrc: "/assets/images/logos/mental-health-matters.png",
    imageAlt: "Gitcoin DAO Logo",
    description:
      "Learn how to get the most out of your mental health and how to help others.",
    comingSoon: true,
  },
  {
    id: 3,
    name: "Growth Mindset",
    href: "#",
    imageSrc: "/assets/images/logos/growth-mindset.png",
    imageAlt: "Bankless DAO Logo",
    description:
      "Learn about the growth mindset with tips and tricks on navigating the unknown.",
    comingSoon: true,
  },
];

const microLevels = [
  {
    id: 1,
    name: "Discord",
    href: "#",
    imageSrc: "/assets/images/logos/discord-logo.jpeg",
    imageAlt: "Aragon Network DAO Join the Fight",
    description:
      "A tool used by many communities. Learn the ins and outs, tips and tricks and help others do the same.",
    comingSoon: true,
  },
  {
    id: 2,
    name: "Git: Version Control",
    href: "#",
    imageSrc: "/assets/images/logos/git-logo.jpeg",
    imageAlt: "Git Logo",
    description:
      "Fork, pull, and merge. Git is a great way to collaborate on code, text and other documents.",
    comingSoon: true,
  },
  {
    id: 3,
    name: "Wallets",
    href: "#",
    imageSrc: "/assets/images/logos/wallet.png",
    imageAlt: "Wallet image",
    description:
      "Learn about the mission, vision, values and how to get started in the role that feels best for you.",
    comingSoon: true,
  },
  {
    id: 4,
    name: "NFTs",
    href: "#",
    imageSrc: "/assets/images/logos/nft-lego-logo.png",
    imageAlt: "NFT Cover",
    description:
      "A fun, interactive learning module that shows you how to start your own She256 Fellowship.",
    comingSoon: true,
  },
  {
    id: 5,
    name: "POAPs",
    href: "#",
    imageSrc: "/assets/images/logos/poap-wallpaper.jpeg",
    imageAlt: "Harmony Logo",
    description:
      "A Level1 guide to layer2. Learn about roll-ups and cross-chain transactions.",
    comingSoon: true,
  },
];

const Catalogue = () => {
  return (
    <div className="bg-base">
      {/* Popular */}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-3xl text-primary">Popular:</h2>
        <p className="text-lg mb-8">
          You&#39;re in good company. Here are some of the most popular Level1s.
        </p>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-24">
          {levels.map((level) => (
            <Link key={level.id} href={level.href}>
              <a className="group">
                <div className="relative bg-gray-300 w-full h-36 rounded-lg overflow-hidden group-hover:opacity-75">
                  <Image
                    src={level.imageSrc}
                    alt={level.imageAlt}
                    layout="fill"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium  text-base-content">
                  {level.name}
                </h3>
                <p className="mt-1 text-base-content">{level.description}</p>
                {level.comingSoon ? (
                  <div className="status mt-2">
                    <div className="badge badge-secondary badge-outline">
                      Coming Soon
                    </div>
                  </div>
                ) : (
                  <div className="status mt-2">
                    <div className="badge badge-primary badge-outline">New</div>
                  </div>
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* Emerging */}
      <div className="max-w-2xl mx-auto pb-16 px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-3xl text-primary">Emerging:</h2>
        <p className="text-lg mb-8">
          Lead the way with these up and coming Level1s.
        </p>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-24">
          {emergingLevels.map((level) => (
            <Link key={level.id} href={level.href}>
              <a className="group">
                <div className="relative w-full h-36 rounded-lg overflow-hidden group-hover:opacity-75">
                  <Image
                    src={level.imageSrc}
                    alt={level.imageAlt}
                    layout="fill"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium  text-base-content">
                  {level.name}
                </h3>
                <p className="mt-1 text-base-content">{level.description}</p>
                {level.comingSoon ? (
                  <div className="status mt-2">
                    <div className="badge badge-secondary badge-outline">
                      Coming Soon
                    </div>
                  </div>
                ) : (
                  <div className="status mt-2">
                    <div className="badge badge-primary badge-outline">New</div>
                  </div>
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* Micro Levels */}
      <div
        className="max-w-2xl pb-16 mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        id="micro"
      >
        <h2 className="font-bold text-3xl text-primary">Micro:</h2>
        <p className="text-lg mb-8">
          Level1s that take 20 minutes or less to complete
        </p>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 xl:gap-x-12">
          {microLevels.map((level) => (
            <Link key={level.id} href={level.href}>
              <a className="group">
                <div className="relative w-full h-36 rounded-lg overflow-hidden group-hover:opacity-75">
                  <Image
                    src={level.imageSrc}
                    alt={level.imageAlt}
                    layout="fill"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium  text-base-content">
                  {level.name}
                </h3>
                <p className="mt-1 text-base-content">{level.description}</p>
                {level.comingSoon ? (
                  <div className="status mt-2">
                    <div className="badge badge-secondary badge-outline">
                      Coming Soon
                    </div>
                  </div>
                ) : (
                  <div className="status mt-2">
                    <div className="badge badge-primary badge-outline">New</div>
                  </div>
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
