import { useState } from 'react';
import { motion, easeOut } from 'motion/react';
import Image from 'next/image';

import GoogleMap from '@/components/GoogleMap';
import Header from '@/components/Header';

const images = [
  '/office-photo-1.webp',
  '/office-photo-2.webp',
  '/office-photo-3.webp',
  '/office-photo-4.webp'
];

export default function Office() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(images.length - 1);

  const textVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const galleryVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  return (
    <section className="flex flex-col justify-center items-center" id="office">
      {/* Children inherit the animation state, so text and gallery appear together */}
      <motion.div
        className="lg:max-w-4xl mt-26 mb-16 md:mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="col-span-2 order-1 xl:order-2 my-auto" variants={textVariants}>
          <Header text="Biuro" />
          <p className="text-justify font-light">
            Oferuję kompleksową obsługę księgową dla firm z&nbsp;różnych branż. Prowadzę <span className="font-semibold">księgi rachunkowe, podatkową księgę przychodów i&nbsp;rozchodów, ryczałt od przychodów ewidencjonowanych</span>, a&nbsp;także pełną <span className="font-semibold">obsługę kadr i&nbsp;płac</span> oraz <span className="font-semibold">rozliczeń podatkowych i&nbsp;ZUS</span> — wszystko w&nbsp;pełnej zgodności z&nbsp;obowiązującymi przepisami.
            <br /><br />
            W codziennej pracy stawiam na <span className="font-semibold">indywidualne podejście, terminowość i&nbsp;rzetelność</span>. Dbam o <span className="font-semibold">skrupulatność, poufność danych i&nbsp;przejrzystą komunikację</span> — zawiłe przepisy przekładam na proste i&nbsp;praktyczne rozwiązania, tak aby ułatwiać przedsiębiorcom pewne i&nbsp;świadome prowadzenie biznesu.
            <br /><br />
            Obsługuję firmy m.in. z&nbsp;branży: <span className="font-semibold">budowlanej, samochodowej, medycznej, paramedycznej, IT, architektonicznej, projektowej, handlowej, finansowej, ubezpieczeniowej, sportowej, beauty oraz motoryzacyjnej.</span>
            <br /><br />
          </p>
        </motion.div>
        {/* Gallery: the hovered photo expands, the others shrink to narrow strips */}
        <motion.div
          className="flex col-span-3 max-w-4xl w-full overflow-hidden mx-auto sm:my-0 rounded-sm mb-8"
          onMouseLeave={() => setActivePhotoIdx(activePhotoIdx)}
          variants={galleryVariants}
        >
          {images
            .slice()
            .reverse()
            .map((image, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActivePhotoIdx(idx)}
                className={`
                relative flex-shrink-0 h-96 transition-all duration-500 ease-in-out
                ${activePhotoIdx === idx ? 'w-2/3 opacity-100' : 'w-1/9 opacity-30'}
                ${idx !== 0 ? 'border-l-4 border-light-bg' : ''}
              `}
              >
                <Image
                  src={image}
                  alt={`Biuro Rachunkowe Podatnik – zdjęcie ${idx + 1}`}
                  fill
                  sizes="(min-width: 1024px) 600px, 66vw"
                  className="object-cover pointer-events-none"
                />
                <div className="absolute inset-0 transition-all duration-500 ease-in-out"></div>
              </div>
            ))}
        </motion.div>
      </motion.div>

      <div className="flex justify-around h-68 xs:h-96 w-[95vw] max-w-7xl bg-main-bg rounded-sm shadow-lg">
        <div
          className="md:px-10 w-80 xs:w-sm sm:w-md lg:w-full flex justify-center items-center scroll-mt-24"
          id="adres"
        >
          <GoogleMap />
        </div>
        <div className="hidden md:block w-px bg-light-bg my-8"></div>
        <div className="hidden md:flex w-4/5 h-48 flex-col justify-around pl-10 lg:pl-18 my-auto text-light-text text-base">
          <p>
            ul. Dąbrowskiego 58/6
            <br />
            41-500 Chorzów
          </p>
          <p>
            <span className="inline-block w-20">wt - śr:</span> <b>14:00 - 20:00</b>
            <br />
            <span className="inline-block w-20">czw - pt:</span> <b>9:00 - 14:00</b>
          </p>
        </div>
      </div>
    </section>
  );
}
