import { useState } from 'react';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.037176696586!2d18.945484376953587!3d50.29123389881446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d27094acb749%3A0x62b31822dc0b905b!2sBiuro%20Rachunkowe%20Podatnik%20Wie%C5%84czys%C5%82awa%20%C5%9Aliwi%C5%84ska!5e0!3m2!1spl!2spl!4v1748707893270!5m2!1spl!2spl';

// Same size and mobile scaling as the original iframe (550x300, scaled to 75% below xs)
const sizeClassName = 'w-[550px] h-[300px] shrink-0 -mx-6 xs:mx-0 scale-75 xs:scale-100';

// The map loads only after a click, so Google receives no visitor data before that
export default function GoogleMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Mapa Google"
        className={sizeClassName}
        src={MAP_SRC}
        width="550"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  }

  return (
    <div
      className={`${sizeClassName} flex flex-col items-center justify-center bg-light-bg/90 rounded-sm text-dark-text text-center px-6`}
    >
      <p>Mapę dostarcza Google. Jej wczytanie przekazuje do Google dane, m.in. Twój adres IP.</p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="mx-auto my-4 rounded-sm border border-dark-text shadow-lg shadow-dark-text/20 hover:text-main hover:border-main hover:shadow-dark-text/10 cursor-pointer px-6 py-2 font-semibold transition duration-100"
      >
        Pokaż mapę
      </button>
    </div>
  );
}
