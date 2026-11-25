import { motion, easeOut } from 'motion/react';
import Image from 'next/image';

import cert1 from '@/public/cert1.webp';
import cert2 from '@/public/cert2.webp';
import kibr from '@/public/kibr.webp';
import orly from '@/public/orly.webp';

import Counter from '@/components/Counter';
import Header from '@/components/Header';

export default function About() {
  const years = new Date().getFullYear() - 2010;

  const textVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const cert1Variants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const cert2Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  return (
    <section className="flex flex-col justify-center items-center" id="about">
      {/* Children inherit the animation state, so text and certificates appear together */}
      <motion.div
        className="grid lg:grid-cols-2 sm:gap-y-8 mt-26 mb-16 md:mb-24 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="my-auto bg-wh" variants={textVariants}>
          <Header text="O mnie" />
          <p className="text-justify font-light">
            Nazywam się <span className="font-semibold">Wieńczysława Śliwińska</span> i&nbsp;od wielu lat specjalizuję się w&nbsp;kompleksowej obsłudze księgowej firm - niezależnie od ich branży czy formy działalności. Posiadam <span className="font-semibold">certyfikat księgowy Ministerstwa Finansów</span> (nr 43037/2010), dyplom Akademii Ekonomicznej w&nbsp;Katowicach oraz ponad 20&nbsp;lat doświadczenia na stanowisku Głównej Księgowej. Jestem członkiem założycielem <span className="font-semibold">Krajowej Izby Biur Rachunkowych</span> oraz członkiem <span className="font-semibold">Stowarzyszenia Księgowych w&nbsp;Polsce</span>, oddział w&nbsp;Katowicach. Regularnie poszerzam wiedzę, uczestnicząc w&nbsp;specjalistycznych szkoleniach i&nbsp;na bieżąco śledząc zmiany w&nbsp;przepisach.
            <br /><br />
            Od {years}&nbsp;lat prowadzę <span className="font-semibold">Biuro Rachunkowe „Podatnik”</span> w&nbsp;Chorzowie, gdzie z&nbsp;pełnym zaangażowaniem wspieram przedsiębiorców w&nbsp;bezpiecznym, zgodnym z&nbsp;przepisami i&nbsp;efektywnym prowadzeniu ich finansów. Księgowość to dla mnie nie tylko zawód, ale także pasja i&nbsp;realny sposób, by pomagać firmom rosnąć, podejmować świadome decyzje i&nbsp;działać spokojnie w&nbsp;dynamicznie zmieniającym się otoczeniu prawnym. Moim priorytetem jest odciążenie klientów z&nbsp;obowiązków księgowych, aby mogli skupić się na tym, co najważniejsze — rozwoju swojej działalności.
            <br /><br />
            Zapraszam do współpracy firmy poszukujące solidnego wsparcia księgowego opartego na profesjonalizmie i&nbsp;zaangażowaniu.
          </p>
        </motion.div>

        <motion.div className="flex items-center max-w-xl lg:max-w-sm mx-auto max-lg:px-2 max-lg:py-4" variants={cert1Variants}>
          <Image
            className="shadow"
            src={cert1}
            alt="Certyfikat księgowy Ministerstwa Finansów"
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 576px, 100vw"
          />
        </motion.div>

        <motion.div className="lg:col-span-2 max-w-xl mx-auto max-lg:px-2 max-lg:pb-4" variants={cert2Variants}>
          <Image
            className="shadow"
            src={cert2}
            alt="Certyfikat członka założyciela KIBR"
            sizes="(min-width: 640px) 576px, 100vw"
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row justify-around h-64 md:h-48 lg:h-64 w-[95vw] max-w-7xl bg-main-bg rounded-sm shadow-lg">
        <div className="mx-auto md:w-full flex justify-around items-center px-4 xl:px-20">
          <a className="mx-2" href="https://www.kibr.pl/" target="_blank" rel="noopener noreferrer">
            <Image className="h-16 md:h-24 lg:h-28 w-auto" src={kibr} alt="Logo Krajowej Izby Biur Rachunkowych" />
          </a>
          <a
            className="mx-2"
            href="https://orlyrachunkowosci.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="h-16 md:h-24 lg:h-28 w-auto" src={orly} alt="Logo Orły Rachunkowości" />
          </a>
        </div>
        <div className="hidden md:block w-px bg-light-bg my-8"></div>
        <div className="xs:w-sm sm:w-xl mx-auto md:w-full flex justify-around items-center px-4 xl:px-20 text-light-text">
          <Counter number={35} text={'LAT DOŚWIADCZENIA'} animationTime={1500} />
          <Counter number={120} text={'ZADOWOLONYCH KLIENTÓW'} animationTime={1500} />
        </div>
      </div>
    </section>
  );
}
