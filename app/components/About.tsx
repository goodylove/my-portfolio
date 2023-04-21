import { aboutMe } from "@/data/page-data";
import Image, { StaticImageData } from "next/image";

interface aboutMeProps {
  data: {
    title: string[];
    skills: {
      name: string;
      img: string;
    }[];
  };
}

const About = ({ data }: aboutMeProps) => {
  return (
    <div className="">
      <h4 className="pl-3 pr-3">
        {data.title.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </h4>
      <div className="m-4">
        <h2 className="text-xl p-3">My Skills</h2>
        <ul className="grid md:grid-cols-3 gap-6 content-center pl-2 sm:grid-cols-2 grid-col-1 justify-center">
          {data.skills.map((item, index) => {
            return (
              <li key={index} className=" ">
                <div className="w-[200px] h-[100px] border-[1px] rounded-md overflow-hidden bg-blue-400 ">
                  <Image
                    src={item.img}
                    priority
                    width={200}
                    height={200}
                    alt="image"
                    className=""
                  />
                </div>
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
