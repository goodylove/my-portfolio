import { language, tools } from "@/data/page-data";
import { IconType } from "react-icons/lib";
import Bar from "./Bar";

export interface skillProps {
  data: {
    name: string;
    level: string;
    Icon: IconType;
  };
}

const Resume = () => {
  return (
    <div className="p-3">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="p-2 dark:text-black">FrameWork and Languages</h5>
          <div>
            {language.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="dark:text-black">Tools</h5>
          <div>
            {tools.map((tools) => (
              <Bar data={tools} key={tools.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
