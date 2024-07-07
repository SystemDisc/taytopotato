'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { MouseEvent, useRef, useState } from 'react';
import './home.css';

export default function Home() {
  const mainRef = useRef<HTMLSpanElement>(null);

  const [fadeOut, setFadeOut] = useState(false);

  const animate = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!fadeOut) {
      setFadeOut(true);
    }
    const divElem = document.createElement('div');
    divElem.classList.add('magic');
    divElem.style.position = 'absolute';
    divElem.style.top = `${e.pageY - 50}px`;
    divElem.style.left = `${e.pageX - 50}px`
    mainRef.current?.appendChild(divElem);
    setTimeout(() => {
      mainRef.current?.removeChild(divElem);
    }, 1000);
  }

  return (
    <main ref={mainRef} className='flex items-center justify-center bg-[url("/potatoes.jpg")] bg-cover bg-center bg-fixed overflow-hidden h-[100dvh] w-screen relative cursor-pointer' onClick={animate}>
      <Image className='h-full w-auto pointer-events-none select-none object-contain' src='/taytopotato.png' width={1400} height={2000} alt='Tayto Potato' />
      <section className={classNames('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full w-max bg-white shadow-lg shadow-neutral-500 border border-neutral-300 rounded-md p-4 opacity-100 transition-all duration-1000', {
        '!opacity-0': fadeOut,
      })}>
        <p>Tap or click the screen!</p>
      </section>
    </main>
  )
}
