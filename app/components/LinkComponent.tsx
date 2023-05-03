import Link from "next/link";
import { IconType } from "react-icons/lib";

type LinkTypeProps = {
  github?: string;
  pageLink: string;
  icon: React.ReactNode;
  text: string;
};

export const LinkComponent = ({
  github,
  icon,
  text,
  pageLink,
}: LinkTypeProps) => {
  let getUndefind;
  if (github === undefined) {
    getUndefind = pageLink;
  } else {
    getUndefind = github;
  }
  console.log(getUndefind);
  return (
    <>
      <Link
        href={getUndefind}
        className="flex items-center px-4 py-2 space-x-3 "
        target="blank"
      >
        {icon} <span>{text}</span>
      </Link>
    </>
  );
};
