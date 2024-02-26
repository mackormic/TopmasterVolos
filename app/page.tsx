import Image from "next/image";

import myprofileImg from "@/public/Images/1.png";
import LayoutWrapper from "@/components/LayoutWrapper";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <LayoutWrapper className="!pt-0 md:pt-6 sm:pt-3">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="w-full md:w-1/2 ">
              <Image
                src={myprofileImg}
                alt="profilePhoto"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center self-center ">
              <AnimatedText
                text="Верну здоровье Вашим волосам!"
                className="!text-3xl md:!text-5xl lg:!text-6xl  xl:!text-6xl   !text-center
                xl:!text-left lg:!text-center"
              />

              <p className="my-4 text-xs  sm:text-sm md:text-base  font-medium ">
                Топ-мастер в свере восстановления и модификации волос. Подберу
                индивидуальную процедуру для ваших волос и расскажу секреты
                ухода. Дарю улыбки каждому клиенту. После моих процедур
                Рапунцель нервно курит в сторонке.
              </p>
              <div className="flex items-center  mt-2 self-center lg:self-start">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  download={true}
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark px-4 rounded-lg md:text-lg font-semibold
                   hover:bg-light hover:text-dark
                   border-2 border-solid border-transparent hover:border-dark
                    dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    p-2 md:p-2.5 md:px-6 text-base"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  className="ml-4  font-medium capitalize underline text-dark  dark:text-light text-base md:text-lg"
                  href="/contacts"
                  target="_blank"
                >
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </main>
    </>
  );
}
