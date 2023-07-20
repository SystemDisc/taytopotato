'use client';

import Image from 'next/image'
import './home.css'
import { useRef, useState } from 'react';

export default function Home() {
  // const spanRef = useRef<HTMLSpanElement>(null);

  // const [loading, setLoading] = useState(false);

  // const animate = () => {
  //   if (loading === true) {
  //     return;
  //   }
  //   setLoading(true);
  //   spanRef.current?.classList.add('magic');
  //   setTimeout(() => {
  //     spanRef.current?.classList.remove('magic');
  //     setLoading(false);
  //   }, 1000);
  // }

  return (
    <main className='flex items-center justify-center bg-[url("/potatoes.jpg")] bg-cover bg-center bg-fixed'>
      <span className='magic'><Image className='h-[200vh] w-[auto]' src='/taytopotato.png' width={1400} height={2000} alt='Tayto Potato' /></span>
    </main>
  )
}
