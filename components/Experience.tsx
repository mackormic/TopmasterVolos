"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring" }}
      >
        <h3 className="font-bold text-xs sm:text-lg md-text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {address} | {time}
        </span>
        <p className="font-medium w-full text-sm md:text-lg">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32 md:mb-4">
      <h2 className="font-bold text-center sm:text-6xl md:text-8xl w-full mb-16 md:mb-20  ">
        Exper
        <span className="text-primary dark:text-primaryDark">i</span>
        ence
      </h2>

      <div
        ref={ref}
        className="w-full sm:w-[90%] md:w-[75%]  mx-auto relative "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute  top-0 md:w-[4px] h-full bg-dark origin-top dark:bg-light 
          w-[2px] sm:left-[28px] left-[19px]"
        />

        <ul className="w-full flex items-start justify-between flex-col ml-4 xs:ml-2">
          <Details
            position="Начинающий мастер"
            company="технолог: Екатерина Сирисько"
            companyLink="www.google.com"
            time="Зима 2021"
            address="Минск"
            work='Успешно прошла полный курс обучения "Все что нужно знать о кератине ботоксе и нанопластике" '
          />
          <Details
            position="Мастер"
            company="технолог: Божена Леоник"
            companyLink="www.google.com"
            time="Лето 2021"
            address="Гродно"
            work="Освоила полный курс по холодному восстановлению волос. 
            Ампульный ботокс KV-1, KACH, Felps RP, Ybera Genoma, Split Fix, Donatt"
          />

          <Details
            position="Топ-мастер"
            company="международный технолог: Ирина Миранюк"
            companyLink="www.google.com"
            time="Весна 2022"
            address="Минск"
            work='Успешно прошла авторский курс "Топ-мастер о котором мечтают клиенты". 
            5-ступенчатое система диагности волос. Разбор химических составов. Авторская техника выполнения процедур.
            Навыки взпимодействия с клиентом'
          />
          <Details
            position="Экперт в сфере волос"
            company="технолог: Виткория Лисецкая"
            companyLink="www.google.com"
            time="Лето 2022"
            address="Минск"
            work="Успешно окончила курс повышения квалификации по реконструкции и модификации волос.
            Авторская техника выполнения процедур. Работа с подложками Limba Cosmetics"
          />
          <Details
            position="Экперт в сфере волос"
            company="международный технолог: Валерия Низовая"
            companyLink="www.google.com"
            time="Лето 2023"
            address="Минск"
            work='Успешно прошла курс "Все тонкости в работе с холодным восстановлением". 
            Трихология. Подбор домашнего ухода для волос и кожи головы
            '
          />
          <Details
            position="Экперт в сфере волос"
            company="международный технолог: Валерия Субботина"
            companyLink="www.google.com"
            time="Осень 2023"
            address="Уфа"
            work='Успешно прослушала теоритические курсы на темы:
            "Секреты совершенства", "Идеальное полотно", "WOW-эффект", "Разбор составов"            
            '
          />
          <Details
            position="Экперт в сфере волос"
            company="технолог-колорист: Ксения Зубарик"
            companyLink="https://www.instagram.com/p/C0Ezq69t4mB/"
            time="Осень 2023"
            address="Минск"
            work='Успешно прошла курс "Перманентное и полуперманентное окрашивание волос на
            бренде Alfaparf Milano. Подбор домашнего ухода для волос Alfaparf Milano"  
            '
          />
          <Details
            position="Технолог"
            company="международный технолог: Валерия Субботина"
            companyLink="www.google.com"
            time="Весна 2024"
            address="Уфа"
            work=" Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
             ea commodo consequat. Duis aute irure dolor in reprehenderit 
             in voluptate velit esse cillum dolore eu fugiat nulla          
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
