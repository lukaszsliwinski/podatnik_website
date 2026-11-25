import Head from 'next/head';
import { Quicksand } from 'next/font/google';

import Landing from '@/sections/Landing';
import About from '@/sections/About';
import Office from '@/sections/Office';
import Offer from '@/sections/Offer';
import Contact from '@/sections/Contact';
import Rodo from '@/sections/Rodo';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export default function Home() {
  return (
    <div
      className={`${quicksand.className} bg-light-bg text-dark-text font-[family-name:var(--font-quicksand)] tracking-wider leading-6.5 font-light max-sm:text-xs/5 text-[15px]`}
    >
      <Head>
        <title>Biuro Rachunkowe Chorzów – Księgowość, Kadry i Płace | Podatnik</title>
        <meta
          name="description"
          content="Profesjonalna księgowość, kadry i płace oraz rozliczenia podatkowe dla firm i osób fizycznych. Biuro Rachunkowe Podatnik w Chorzowie."
        />
        <link rel="canonical" href="https://podatnik-chorzow.pl/" />
      </Head>
      <Landing />
      <main className="w-screen overflow-x-hidden px-3 xs:px-6 md:px-12 lg:px-0">
        <About />
        <Office />
        <Offer />
        <Rodo />
      </main>
      <Contact />
    </div>
  );
}
