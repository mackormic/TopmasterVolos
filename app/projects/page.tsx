"use client";
import AnimatedText from "@/components/AnimatedText";

import Link from "next/link";
import Image from "next/image";

import { InstagramIcon } from "@/components/Icon";
import { motion } from "framer-motion";
import project1 from "@/public/Images/projectsImg/OIG1.jpg";
import project2 from "@/public/Images/projectsImg/OIG3.jpg";
import project3 from "@/public/Images/projectsImg/OIG2.jpg";
import project4 from "@/public/Images/projectsImg/OIG7.jpg";
import project5 from "@/public/Images/projectsImg/OIG8.png";
import project6 from "@/public/Images/projectsImg/OIG10.png";
import TransitionEffect from "@/components/TransitionEffect";
import LayoutWrapper from "@/components/LayoutWrapper";
import type { StaticImageData } from "next/image";

const FramerImage = motion(Image);

const FeatureProject = ({
  type,
  title,
  img,
  summary,
  link,
}: {
  type: string;
  title: string;
  img: StaticImageData;
  summary: string;
  link: string;
}) => {
  return (
    <article
      className="w-full flex items-center justify-between
    sm:rounded-3xl border border-solid border-dark bg-light  dark:bg-dark dark:border-light shadow-2xl relative 
    flex-col lg:flex-row  rounded-2xl rounded-br-3xl sm:rounded-br-2xl  p-8 lg:p-12"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark dark:bg-light rounded-[2.5rem] rounded-br-3xl
      xs:-right-2 xs:w-[100%] sm:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        className=" cursor-pointer overflow-hidden rounded-lg w-full lg:w-1/2"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6 pl-0 pt-6 lg:pt-0">
        <span className="text-primary dark:text-primaryDark font-medium sm:text-xl text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left sm:text-4xl font-bold dark:text-light text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 sm:font-medium text-dark dark:text-light text-sm">
          {summary}
        </p>
        <AnimatedText
          text="195 рублей"
          className="!text-3xl md:!text-5xl lg:!text-6xl  xl:!text-6xl   !text-left
                "
        />
        <div className="my-2 flex items-center">
          <motion.a
            href={link}
            target={"_blank"}
            className="w-6 mx-1 "
            whileHover={{ y: -2, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon className="" />
          </motion.a>
          <motion.a
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark font-semibold p-2  sm:px-6 
           px-4 text-sm sm:text-lg"
            whileHover={{ y: -2, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            Visit Instagram
          </motion.a>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  type,
  title,
  img,
  link,
  text,
}: {
  type: string;
  title: string;
  img: StaticImageData;
  text: string;
  link: string;
}) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light  dark:bg-dark  dark:border-light p-6 relative
    xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark  dark:bg-light  rounded-[2rem] rounded-br-3xl
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
           lg:text-2xl md:text-base"
          >
            {title}
          </h2>
        </Link>
        <h3 className="text-2xl font-bold text-dark/75 dark:text-light/75">
          {text}
        </h3>

        <div className=" w-full my-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" font-semibold  text-lg underline  lg:text-lg md:text-base"
          >
            Visit Insta
          </Link>
          <Link href={link} target="_blank" className="w-8 md:w-6">
            <InstagramIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <LayoutWrapper className="pt-16">
          <AnimatedText
            className="!text-4xl md:!text-6xl   xl:!text-8xl  mb-8 sm:mb-16  "
            text="Комплексные предложения для Вас"
          />

          <div
            className="grid grid-cols-12 gap-24 xl:gap-y-32
          lg:gap-x-16 md:gap-x-8 gap-x-4 sm:gap-y-24 "
          >
            <div className="col-span-12">
              <FeatureProject
                img={project1}
                title="«Здоровые волосы»"
                summary="Данный комлекс включает пилинг + холодное восстановление + реконструкция
                Осмотр кожи под трихоскопом в подарок.
                Предложение для любой длины и густоты
                "
                link="https://www.instagram.com/p/C215JnvtLSv/"
                type="Весенний комплекс"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 ">
              <Project
                img={project2}
                title="«Блондинкам можно всё»"
                link="https://www.instagram.com/reel/C3W9HMINs3Z/"
                type="Комплекс"
                text="220 рублей"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <Project
                img={project3}
                title="Выпрямляем и питаем"
                link="https://www.instagram.com/topmaster_volos/"
                type="Комплекс"
                text="250 рублей"
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                img={project4}
                title="Кудри или неКудри"
                summary="Кудрявые волосы - естественно надо выпрямить, прямые волосы - естественно надо окудрить
                "
                link="https://www.instagram.com/stories/highlights/18004128095291139/"
                type="Специальный комплекс"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <Project
                img={project5}
                title="Любая процедура"
                link="https://www.instagram.com/p/CbpIc6boWjA/"
                type="Сертификат"
                text=""
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <Project
                img={project6}
                title="Бесплатная консультация"
                link="https://www.instagram.com/p/CzoFvufNvgM/"
                type="Консультация"
                text=""
              />
            </div>
          </div>
        </LayoutWrapper>
      </main>
    </>
  );
};

export default Projects;
