"use client";

import { FunctionComponent, useState } from "react";
import { Iprojects } from "@/types";

import Image from "next/image";

import ModalComp from "./ModalComponents";

const ProjectCard: FunctionComponent<{ data: Iprojects }> = ({
  data: { name, description, img, technology, github, pageLink },
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  console.log(img);

  return (
    <div>
      <Image
        src={img}
        alt={name}
        className="cursor-pointer object-cover"
        width={300}
        height={300}
        priority
        onClick={() => setShowDetails(true)}
      />
      <p className="my-2 text-center dark:text-[#02855a] cursor-pointer">
        {name}
      </p>

      {showDetails && (
        <ModalComp
          name={name}
          description={description}
          img={img}
          technology={technology}
          github={github}
          pageLink={pageLink}
          closed={setShowDetails}
          showDetails={showDetails}
        />
      )}
    </div>
  );
};

export default ProjectCard;
