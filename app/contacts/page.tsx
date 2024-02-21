import Image from "next/image";
import contactImg from "@/public/Images/contactsImg/12.png";

import LayoutWrapper from "@/components/LayoutWrapper";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import TransitionEffect from "@/components/TransitionEffect";

const Contacts = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <LayoutWrapper className="!pt-0 md:pt-6 sm:pt-3">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-2">
            <div className="w-full md:w-1/2 ">
              <Image
                src={contactImg}
                alt="codeBucks"
                className="w-full h-auto hidden lg:inline-block"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center self-center ">
              <h2 className="font-bold text-lg uppercase text-dark/75 dark:text-light/75">
                Address
              </h2>
              <Link
                href="https://www.google.com/maps/place/Germes/@53.8654631,27.522339,17z/data=!4m6!3m5!1s0x46dbd1af7ac10ac1:0xa5dc40b1bd2f4048!8m2!3d53.8652515!4d27.5242015!16s%2Fg%2F11h51jrwr4?hl=vi&entry=ttu"
                target="_blank"
                className="text-dark/75 dark:text-light/75 my-0 text-xs  sm:text-sm md:text-base  font-medium "
              >
                <span className="text-primary dark:text-primaryDark text-2xl px-1">
                  ↳
                </span>
                BC Hermes, Kasinca 11a, Minsk
              </Link>

              <h2 className="font-bold text-lg uppercase text-dark/75 dark:text-light/75">
                Phone
              </h2>
              <Link
                href="tel:+375295760929"
                target="_blank"
                className="text-dark/75 dark:text-light/75 my-0 text-xs  sm:text-sm md:text-base  font-medium "
              >
                <span className="text-primary dark:text-primaryDark text-2xl px-1">
                  ✎
                </span>
                + 375 29 576 09 29
              </Link>
              <h2 className="font-bold text-lg uppercase text-dark/75 dark:text-light/75">
                Mail
              </h2>
              <Link
                href="mailto:topmaster_volos@gmail.com"
                target="_blank"
                className="text-dark/75 dark:text-light/75 my-0 text-xs  sm:text-sm md:text-base  font-medium "
              >
                <span className="text-primary dark:text-primaryDark text-2xl px-1">
                  🕊
                </span>
                topmaster_volos@gmail.com
              </Link>
            </div>
          </div>
        </LayoutWrapper>
      </main>
    </>
  );
};

export default Contacts;
