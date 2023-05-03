import Image from "next/image";

import { Inter } from "next/font/google";
import SideBar from "./components/SideBar";
import HomeSection from "./components/MainSection";

import BackgroundAnimation from "./components/BgAnimation";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider>
      <main className="flex flex-col lg:flex-row  md:flex-row w-full m-auto justify-around my-3 p-3">
        <BackgroundAnimation />
        <div className=" col-span-12  bg-gray-900  text-white  p-5  text-center  rounded-2xl dark:bg-[#02855a]  dark:shadow-lg ">
          <SideBar />
        </div>
        <div className=" bg-gray-900  text-white rounded-2xl md:w-8/12 w-full dark:bg-[#faf7f7] dark:shadow-lg mt-5 md:mt-0  ">
          <HomeSection />
        </div>
      </main>
    </Provider>
  );
}
