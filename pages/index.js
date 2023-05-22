import Head from 'next/head';

import Deco9Black from '@/components/logos/Deco9Black';

export default function Home({ image }) {
  return (
    <main className="flex flex-col w-screen h-screen items-center justify-start pt-16 sm:pt-40 overflow-hidden">
      <Head>
        <title>deco9+ | Tu casa, tu estilo. Diseño de Interiores</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="diseño de interiores, espacios interiores, diseño de hogar, casa, arquitectura de interiores, remodelación, interiores"
        />
        <meta
          name="description"
          content="Deco9+ transforma tus espacios en auténticos refugios de estilo, fusionando tu esencia con un diseño innovador para proporcionarte una experiencia inolvidable"
        />
        <meta
          property="og:title"
          content="deco9+ | Tu casa, tu estilo. Diseño de Interiores"
        />
        <meta property="og:url" content="https://deco9.cl" />
        <meta property="og:image" content={image?.url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Deco9+ transforma tus espacios en auténticos refugios de estilo, fusionando tu esencia con un diseño innovador para proporcionarte una experiencia inolvidable"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="deco9+ | Tu casa, tu estilo. Diseño de Interiores"
        />
        <meta
          name="twitter:description"
          content="Deco9+ transforma tus espacios en auténticos refugios de estilo, fusionando tu esencia con un diseño innovador para proporcionarte una experiencia inolvidable"
        />
        <meta name="twitter:image" content={image?.url} />
        <meta name="author" content="Diego Orrego Brito" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://deco9.cl" key="canonical" />
      </Head>
      <Deco9Black className="w-96" />
      <h1 className="text-white pr-4 text-3xl font-bold">Tu casa, tu estilo</h1>
    </main>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      image: {
        url: 'https://ik.imagekit.io/dior7woku/deco9_cl/previewPhoto.webp?updatedAt=1684772578682',
      },
    },
  };
};
