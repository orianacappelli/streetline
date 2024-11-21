import Image from 'next/image';

const HomeHero = () => {
  return (
    <Image
      src={`/images/imgs/hero.svg`}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: '100%', height: 'auto' }} // optional
      alt='hero'
    />
  );
};

export default HomeHero;