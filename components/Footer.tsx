import Link from "next/link";

import LayoutWrapper from "./LayoutWrapper";
import { InstagramIcon } from "./Icon";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-base sm:text-lg  dark:text-light dark:border-light "
    >
      <LayoutWrapper className="!py-6 md:py-8 flex flex-col md:flex-row items-center justify-between">
        <span>
          {new Date().getFullYear()}
          <span className="text-primary dark:text-primaryDark">&copy;</span> All
          rights reserved.
        </span>
        <div className="flex items-center md:py-2">
          <Link
            className="flex items-center "
            href="https://www.instagram.com/topmaster_volos/"
            target={"_blank"}
          >
            <span className="text-primary dark:text-primaryDark">
              <InstagramIcon className="" />
            </span>
            topmaster_volos
          </Link>{" "}
        </div>

        <Link
          href="tel:+375295760929"
          target="_blank"
          className="text-dark/75 dark:text-light/75 "
        >
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            ✎
          </span>
          + 375 29 576 09 29
        </Link>
      </LayoutWrapper>
    </footer>
  );
};

export default Footer;
