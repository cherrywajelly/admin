import { ReactNode } from "react";
import { TableHeaderProps } from "../types/Props";

const TableHeader = (props: TableHeaderProps): ReactNode => {
  const { headers } = props;

  return (
    <div className="flex w-full py-3 px-4">
      {headers.map((header: { width: string; text: string }, idx: number): ReactNode => (
        <div className={`w-${header.width} font-bold text-center`} key={idx}>{header.text}</div>
      ))}
    </div>
  );
};

export default TableHeader;
