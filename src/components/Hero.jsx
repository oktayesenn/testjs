import { motion } from "framer-motion";
import { Suspense } from 'react';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import ceaser from "../assets/ceaser.avif";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-white' />
          <div className='w-1 sm:h-80 h-40 bg-white' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-white'>Oktay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            New York based Software Developer <br className='sm:block hidden' />
            
          </p>

        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
        </a>
      </div>
    </section>
  );
};

export default Hero;