import { aboutMe } from "@/data/page-data";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface aboutMeProps {
  data: {
    title: string[];

    experiences: {
      role: string;
      description: string;
    }[];
  };
}

const About = ({ data }: aboutMeProps) => {
  return (
    <div className="">
      <h4 className="pl-3 pr-3 text-sm">
        {data.title.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </h4>
      <div className="pl-2 m-2">
        <span className=" text-xl border-b-4 border-blue-400 ">
          My Experinces
        </span>
      </div>
      <div>
        <ul>
          {data.experiences.map((text, index) => {
            return (
              <li key={index} className="p-2 flex flex-col">
                <span className="text-mdl text-blue-400">{text.role}</span>
                <span className="text-sm">{text.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pl-3  mb-2 mt-2">
        <Link href="tel:+234-9068-557-284">
          <button className="bg-blue-400 rounded-md text-white p-2 shadow-md">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
