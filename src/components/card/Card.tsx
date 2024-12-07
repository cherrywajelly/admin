import clsx from 'clsx';
import { CardProps } from './Card.types';

const styleVar = {
  container:
    'flex flex-col w-full p-6 box-border rounded-[20px] border border-gray-10 bg-white shadow-custom',
};

export const Card = (props: CardProps) => {
  const { title, subTitle, children, className } = props;
  return (
    <div className={clsx(styleVar.container, className)}>
      {title && (
        <div className="break-keep">
          <div className="text-body1 text-gray-80">{title}</div>
          {/* <div className="">{subTitle}</div> */}
          <span />
        </div>
      )}

      <div className="">{children}</div>
    </div>
  );
};
