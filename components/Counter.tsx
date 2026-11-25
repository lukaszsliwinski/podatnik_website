import { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
import { ICounter } from '@/types/types';

export default function Counter({ number, text, animationTime }: ICounter) {
  // Server-rendered HTML gets the final value, counting from zero starts once in view
  const [total, setTotal] = useState<number>(number);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView || !number) return;

    setTotal(0);
    let counter = 0;
    const i = setInterval(() => {
      setTotal(counter);
      counter++;
      if (counter > number) {
        clearInterval(i);
      }
    }, animationTime / number);

    return () => clearInterval(i);
  }, [isInView, number, animationTime]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex justify-center items-center text-3xl xs:text-5xl size-20 xs:size-26 mb-2 shadow-md rounded-full font-normal">{total.toString()}</div>
      <p className="text-center text-xs lg:text-sm max-w-38 mx-1 font-semibold">{text}</p>
    </div>
  );
}
