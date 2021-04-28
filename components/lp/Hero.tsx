import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-yellow-500 h-screen flex items-center relative">
      <Image layout="fill" src="/hero-lg.png" alt=""></Image>
      <div className="container relative">
        <p className="font-bold text-white text-4xl leading-loose mb-6">
          おい、イベントを
          <br />
          はじめよう。
        </p>
        <a
          href=""
          className="rounded-full inline-block px-6 py-4 bg-white shadow font-bold"
        >
          アカウントを作成
        </a>
      </div>
    </div>
  );
};

export default Hero;
