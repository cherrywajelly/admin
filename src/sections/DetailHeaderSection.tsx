import { ReactNode } from "react";
import { DetailHeaderSectionProps } from "../types/Props";

const DetailHeaderSection = (props: DetailHeaderSectionProps): ReactNode => {
  const { title } = props;

  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default DetailHeaderSection;
