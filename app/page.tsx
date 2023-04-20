import Image from "next/image";
import { Inter } from "next/font/google";
import SideBar from "./components/SideBar";
import HomeSection from "./components/MainSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row  md:flex-row w-full m-auto justify-around my-3 p-3">
      <div className=" col-span-12  bg-black text-white  p-5  text-center  rounded-2xl ">
        <SideBar />
      </div>
      <div className=" bg-black text-white rounded-2xl md:w-8/12 w-full ">
        <HomeSection />
      </div>
    </main>
  );
}
