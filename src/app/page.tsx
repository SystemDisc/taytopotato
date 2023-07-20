'use client';

import Image from 'next/image'
import './home.css'
import { MouseEvent, useRef, useState } from 'react';

export default function Home() {
  const mainRef = useRef<HTMLSpanElement>(null);

  const animate = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
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
    <main ref={mainRef} className='flex items-center justify-center bg-[url("/potatoes.jpg")] bg-cover bg-center bg-fixed overflow-hidden min-h-[150vh] w-screen relative cursor-pointer' onClick={animate}>
      <Image className='w-full h-auto pointer-events-none select-none' src='/taytopotato.png' width={1400} height={2000} alt='Tayto Potato' />
    </main>
  )
}
