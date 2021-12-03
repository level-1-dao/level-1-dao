import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Aragon Ambassador Program',
    href: '#',
    price: '$48',
    imageSrc: '/assets/images/Aragon-wallpaper.png',
    imageAlt: 'Aragon Network DAO Join the Fight',
    description:
      'An interactive introduction to the Aragon Network DAO and the Ambassador program.',
  },
  {
    id: 2,
    name: 'Gitcoin DAO Tools',
    href: '#',
    price: '$35',
    imageSrc: '/assets/images/gitcoinDAO.png',
    imageAlt: 'Gitcoin DAO Logo',
    description:
      'A short interactive learning module to help you get familiar with the GitcoinDAO tools.',
  },
  {
    id: 3,
    name: 'Bankless DAO',
    href: '#',
    price: '$89',
    imageSrc: '/assets/images/Bankless-stones.png',
    imageAlt: 'Bankless DAO Logo',
    description:
      'Learn about the mission, vision, values and how to get started in the role that feels best for you.',
  },
  {
    id: 4,
    name: 'She256 Fellowships',
    href: '#',
    price: '$35',
    imageSrc: '/assets/images/she256.svg',
    imageAlt: 'She256 Logo',
    description:
      'A fun, interactive learning module that shows you how to start your own She256 Fellowship.',
  },
  {
    id: 5,
    name: 'Harmony',
    href: '#',
    price: '$35',
    imageSrc: '/assets/images/harmony-logo.png',
    imageAlt: 'Harmony Logo',
    description:
      'A Level1 guide to layer2. Learn about roll-ups and cross-chain transactions.',
  },
  {
    id: 6,
    name: 'Mintgate',
    href: '#',
    price: '$35',
    imageSrc: '/assets/images/mintgate-logo.jpeg',
    imageAlt: 'Mintgate Logo',
    description:
      'Token-gated whaat? Learn about the mintgate and how to get started.',
  },
];

const Catalogue = () => {
  return (
    <div className="bg-base">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-2xl mb-8">Popular levels:</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-24">
          {products.map((product) => (
            <Link key={product.id} href={product.href}>
              <a className="group">
                <div className="relative w-full h-36 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="fill"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium  text-base-content">
                  {product.name}
                </h3>
                <p className="mt-1 text-base-content">{product.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
