"use client";

import { project } from "@/data/page-data";
import { FunctionComponent, useState } from "react";
import { Iprojects } from "@/types";
import Image from "next/image";

import ModalComp from "./ModalComponents";

const ProjectCard: FunctionComponent<{ data: Iprojects }> = ({
  data: { name, description, img, technology, github, pageLink },
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="rounded-md shodow-lg">
      <Image
        src={img}
        alt="project-image"
        className="cursor-pointer"
        width={300}
        height={300}
        priority
        onClick={() => setShowDetails(true)}
      />
      <p className="my-2 text-center">{name}</p>

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
