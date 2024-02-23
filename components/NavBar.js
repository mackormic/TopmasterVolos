"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, InstagramIcon, SunIcon, TelegramIcon } from "./Icon";

const CustomLink = ({ href, title, className = "" }) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute -bottom-0.5 left-0 
      group-hover:w-full transition-[width] ease duration-500
      ${path === href ? "w-full" : "w-0"}
      dark:bg-light
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClickMobile = () => {
    toggle();
    router.push(href);
  };
  const path = usePathname();
  return (
    <button
      onClick={handleClickMobile}
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute -bottom-0.5 left-0 
      group-hover:w-full transition-[width] ease duration-500
      ${path === href ? "w-full" : "w-0"}
      dark:bg-dark
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-8 py-8 font-medium flex items-center justify-between
      dark:text-light relative z-10  xl:px-32 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className="flex lg:hidden flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`block bg-dark dark:bg-light h-0.5 w-6 rounded-sm 
          ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`block bg-dark dark:bg-light h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`block bg-dark dark:bg-light h-0.5 w-6 rounded-sm 
          ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } transition-all duration-300 ease-out`}
        ></span>
      </button>

      <div className="w-full lg:flex justify-between items-center hidden">
        <nav>
          <CustomLink href="/" title="Главная" className="mr-4" />
          <CustomLink href="/about" title="О себе" className="mr-4" />
          <CustomLink href="/projects" title="Процедуры" className="mr-4" />
          <CustomLink href="/contacts" title="Контакты" className="mr-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://web.telegram.org/k/"
            target={"_blank"}
            className="w-6 mx-1 sm:mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TelegramIcon className="" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/topmaster_volos/"
            target={"_blank"}
            className="w-6 mx-1 sm:ml-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon className="" />
          </motion.a>

          <button
            className={`ml-4  flex items-center justify-center p-1 rounded-full
          ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center 
      fixed top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%]
      bg-dark/50 dark:bg-light/75 rounded-lg py-32 backdrop-blur-md"
        >
          <nav className="flex flex-col justify-between items-center">
            <CustomMobileLink
              href="/"
              title="Главная"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="О себе"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Процедуры"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contacts"
              title="Контакты"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://web.telegram.org/k/"
              target={"_blank"}
              className="w-6 mx-2 sm:mx-3 text-light dark:text-dark"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TelegramIcon className="" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/topmaster_volos/"
              target={"_blank"}
              className="w-6 mx-2 sm:mx-3 text-light dark:text-dark"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon className="" />
            </motion.a>

            <button
              className={`ml-3  flex items-center justify-center p-1 rounded-full
          ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
