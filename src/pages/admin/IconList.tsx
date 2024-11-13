import { ReactNode, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import { ListElemProps } from '../../types/Props';
import { ApprovalState } from '../../types/Enums';

const IconList = (): ReactNode => {
  const [iconList, setIconList] = useState<ListElemProps[]>([]);
  
  useEffect(() => {
    setIconList([
      { id: 0, title: '노노노', subtitle: '에이핑크', image: '/images/empty.png', state: ApprovalState.PENDING },
      { id: 1, title: '반짝반짝', subtitle: '걸스데이', image: '/images/empty.png', state: ApprovalState.APPROVED },
      { id: 2, title: '럽미라잇', subtitle: '엑소', image: '/images/empty.png', state: ApprovalState.REJECTED },
      { id: 3, title: '고속도로 로망스', subtitle: '윤종신', image: '/images/empty.png', state: ApprovalState.PENDING },
      { id: 4, title: '행운을 빌어줘어어', subtitle: '원필', image: '/images/empty.png', state: ApprovalState.APPROVED },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {iconList.map((icon: ListElemProps, idx: number) => (
        <ListElem 
          key={idx} 
          id={icon.id}
          title={icon.title} 
          subtitle={icon.subtitle} 
          image={icon.image} 
          state={icon.state} 
          divider={idx < iconList.length - 1} 
        />
      ))}
    </div>
  );
};

export default IconList;
