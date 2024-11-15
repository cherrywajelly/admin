import { ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProps, ListElemProps } from '../../types/Props';
import { ApprovalState } from '../../types/Enums';
import ListElem from '../../components/ListElem.tsx';
import Button from '../../components/Button.tsx';
import Context from '../../contexts/Context.tsx';

const IconList = (): ReactNode => {
  const [iconList, setIconList] = useState<ListElemProps[]>([]);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    console.log(id);
    setSelectedMenu('아이콘 상세');
    navigate(`/creator/icons/${id}`);
  };

  useEffect(() => {
    setIconList([
      {
        id: 0,
        title: '노노노',
        image: '/images/empty.png',
        state: ApprovalState.PENDING,
        buttons: [],
      },
      {
        id: 1,
        title: '반짝반짝',
        image: '/images/empty.png',
        state: ApprovalState.APPROVED,
        buttons: [],
      },
      {
        id: 2,
        title: '럽미라잇',
        image: '/images/empty.png',
        state: ApprovalState.REJECTED,
        buttons: [],
      },
      {
        id: 3,
        title: '고속도로 로망스',
        image: '/images/empty.png',
        state: ApprovalState.PENDING,
        buttons: [],
      },
      {
        id: 4,
        title: '행운을 빌어줘어어',
        image: '/images/empty.png',
        state: ApprovalState.APPROVED,
        buttons: [],
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {iconList.map((icon: ListElemProps, idx: number) => (
        <ListElem
          key={idx}
          title={icon.title}
          subtitle={icon.subtitle}
          image={icon.image}
          state={icon.state}
          divider={idx < iconList.length - 1}
          buttons={[
            <Button
              text={icon.state as string}
              styles="!bg-secondary-main !text-white !w-40 border-none"
            />,
            <Button
              text="상세 보기"
              styles="!bg-secondary-main !text-white !w-40 border-none"
              onClick={(): void => handleButtonClick(icon.id ?? 0)}
            />,
          ]}
        />
      ))}
    </div>
  );
};

export default IconList;
