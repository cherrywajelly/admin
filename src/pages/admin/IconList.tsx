import { ReactNode, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import { ListElemProps } from '../../types/Props';

const IconList = (): ReactNode => {
  const [iconList, setIconList] = useState<ListElemProps[]>([]);
  
  useEffect(() => {
    setIconList([
      { title: '노노노', subtitle: '에이핑크', image: '/images/empty.png' },
      { title: '반짝반짝', subtitle: '걸스데이', image: '/images/empty.png' },
      { title: '럽미라잇', subtitle: '엑소', image: '/images/empty.png' },
      { title: '고속도로 로망스', subtitle: '윤종신', image: '/images/empty.png' },
      { title: '행운을 빌어줘어어', subtitle: '원필', image: '/images/empty.png' },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {iconList.map((icon: ListElemProps, idx: number) => (
        <ListElem key={idx} title={icon.title} subtitle={icon.subtitle} image={icon.image} divider={idx < iconList.length - 1} />
      ))}
    </div>
  );
};

export default IconList;
