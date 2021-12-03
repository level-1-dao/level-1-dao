import Image from 'next/image';
import Link from 'next/link';

const levels = [
  {
    id: 1,
    name: 'Aragon Ambassador Program',
    href: '#',
    imageSrc: '/assets/images/logos/Aragon-wallpaper.png',
    imageAlt: 'Aragon Network DAO Join the Fight',
    description:
      'An interactive introduction to the Aragon Network DAO and the Ambassador program.',
  },
  {
    id: 2,
    name: 'Gitcoin DAO Tools',
    href: '#',
    imageSrc: '/assets/images/logos/gitcoinDAO.png',
    imageAlt: 'Gitcoin DAO Logo',
    description:
      'A short interactive learning module to help you get familiar with the GitcoinDAO tools.',
  },
  {
    id: 3,
    name: 'Bankless DAO',
    href: '#',
    imageSrc: '/assets/images/logos/Bankless-stones.png',
    imageAlt: 'Bankless DAO Logo',
    description:
      'Learn about the mission, vision, values and how to get started in the role that feels best for you.',
  },
  {
    id: 4,
    name: 'She256 Fellowships',
    href: '#',
    imageSrc: '/assets/images/logos/she256.svg',
    imageAlt: 'She256 Logo',
    description:
      'A fun, interactive learning module that shows you how to start your own She256 Fellowship.',
  },
  {
    id: 5,
    name: 'Harmony',
    href: '#',
    imageSrc: '/assets/images/logos/harmony-logo.png',
    imageAlt: 'Harmony Logo',
    description:
      'A Level1 guide to layer2. Learn about roll-ups and cross-chain transactions.',
  },
  {
    id: 6,
    name: 'Mintgate',
    href: '#',
    imageSrc: '/assets/images/logos/mintgate-logo.jpeg',
    imageAlt: 'Mintgate Logo',
    description:
      'Token-gated whaat? Learn about the mintgate and how to get started.',
  },
];

const microLevels = [
  {
    id: 1,
    name: 'Discord',
    href: '#',
    imageSrc: '/assets/images/logos/discord-logo.jpeg',
    imageAlt: 'Aragon Network DAO Join the Fight',
    description:
      'An interactive introduction to the Aragon Network DAO and the Ambassador program.',
  },
  {
    id: 2,
    name: 'Git: Version Control',
    href: '#',
    imageSrc: '/assets/images/logos/git.png',
    imageAlt: 'Git Logo',
    description:
      'A short interactive learning module to help you get familiar with the GitcoinDAO tools.',
  },
  {
    id: 3,
    name: 'Wallets',
    href: '#',
    imageSrc: '/assets/images/logos/wallet.png',
    imageAlt: 'Wallet image',
    description:
      'Learn about the mission, vision, values and how to get started in the role that feels best for you.',
  },
  {
    id: 4,
    name: 'NFTs',
    href: '#',
    imageSrc: '/assets/images/logos/she256.svg',
    imageAlt: 'She256 Logo',
    description:
      'A fun, interactive learning module that shows you how to start your own She256 Fellowship.',
  },
  {
    id: 5,
    name: 'POAPs',
    href: '#',
    imageSrc: '/assets/images/logos/harmony-logo.png',
    imageAlt: 'Harmony Logo',
    description:
      'A Level1 guide to layer2. Learn about roll-ups and cross-chain transactions.',
  },
];

const Catalogue = () => {
  return (
    <div className="bg-base">
      {/* Popular */}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-2xl mb-8">Popular levels:</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-24">
          {levels.map((level) => (
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
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* Micro Levels */}
      <div className="max-w-2xl pb-16 mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-2xl mb-8">Micro levels:</h2>
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
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
