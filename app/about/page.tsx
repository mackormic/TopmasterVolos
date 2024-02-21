"use client";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import LayoutWrapper from "@/components/LayoutWrapper";
// import profileAboutImg from "@/public/images/masha.webp";
import profileAboutImg from "/public/images/aboutPhoto.jpg";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import Experience from "@/components/Experience";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full items-center justify-center flex-col dark:text-light">
        <LayoutWrapper className="xl:pt-16">
          <AnimatedText
            className="mb-6 sm:mb-16 !text-4xl sm:!text-6xl md:text-7xl  lg:!text-8xl"
            text="Страсть питает цель!"
          />

          <div className="grid w-full grid-cols-8 gap-8 sm:gap-16">
            <div className="col-span-8 flex flex-col items-start justify-start xl:col-span-3 order-2 md:order-1  md:col-span-4">
              <h2 className="mb-4 font-bold text-lg uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                <span className="text-primary dark:text-primaryDark">
                  Привет!{" "}
                </span>{" "}
                Меня зовут Маша, мне 26 лет. ﻿﻿Родилась я в маленьком городе
                Дрогичин, Брестской обл. И у меня есть 3 родных брата.
              </p>
              <p className="font-medium my-4">
                В 2021 году я прошла свое первое обучение и с тех пор являюсь
                мастером в сфере реконструкции и восстановлении волос. Мне
                нравиться дарить красоту, а главное здоровье Вашим волосам.
              </p>
              <p className="font-medium my-4">
                Ежегодное обучение у топовых технологов и мастеров Беларуси и
                России. Работа с ведущими компаниями в свере красоты волос.
              </p>

              <p className="font-medium">
                В настоящее время являюсь топ-мастером и обучающим наставником в
                сфере холодного восстановления, реконструкции, кератинного
                выпрямления и ботоксного пинания волос.
              </p>
            </div>
            <div
              className="col-span-8 relative h-max p-8 border-2 border-solid border-dark bg-light rounded-2xl dark:bg-dark dark:border-light
            xl:col-span-3 order-1 md:order-2  md:col-span-4"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark/75 rounded-[2rem] dark:bg-light" />
              <Image
                src={profileAboutImg}
                alt="Masha"
                className=" w-full h-auto rounded-2xl"
              />
            </div>
            <div className=" col-span-8 xl:col-span-2 flex flex-row xl:flex-col xl:items-end items-center justify-between  order-3 ">
              <div className="flex flex-col  justify-center items-center xl:items-end">
                <span className="inline-block font-bold text-4xl md:text-7xl sm:text-5xl">
                  <AnimatedNumbers value={10258} />+
                </span>
                <h2
                  className=" text-base sm:text-lg md:text-xl  font-medium capitalize text-dark/75 dark:text-light/75 
                text-center xl:text-end"
                >
                  отработанные часы
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center xl:items-end ">
                <span className="inline-block font-bold text-4xl md:text-7xl sm:text-5xl">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2
                  className=" text-base sm:text-lg md:text-xl  font-medium capitalize text-dark/75 dark:text-light/75 
                text-center xl:text-end"
                >
                  количество клиентов
                </h2>
              </div>
              <div className="flex flex-col  justify-center  items-center xl:items-end">
                <span className="inline-block font-bold text-4xl md:text-7xl sm:text-5xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2
                  className=" text-base sm:text-lg md:text-xl  font-medium capitalize text-dark/75 dark:text-light/75 
                text-center xl:text-end"
                >
                  годовой опыт
                </h2>
              </div>
            </div>
          </div>
          <Experience />
        </LayoutWrapper>
      </main>
    </>
  );
};

export default About;
