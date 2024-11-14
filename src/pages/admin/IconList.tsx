import { ReactNode, useContext, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import { ContextProps, ListElemProps } from '../../types/Props';
import { ApprovalState } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';

const IconList = (): ReactNode => {
  const [iconList, setIconList] = useState<ListElemProps[]>([]);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    console.log(id);
    setSelectedMenu('아이콘 상세');
    navigate(`/admin/icons/${id}`);
  };

  useEffect((): void => {
    setIconList([
      {
        id: 0,
        title: '노노노',
        subtitle: '에이핑크',
        image: '/images/empty.png',
        state: ApprovalState.PENDING,
        buttons: [],
      },
      {
        id: 1,
        title: '반짝반짝',
        subtitle: '걸스데이',
        image: '/images/empty.png',
        state: ApprovalState.APPROVED,
        buttons: [],
      },
      {
        id: 2,
        title: '럽미라잇',
        subtitle: '엑소',
        image: '/images/empty.png',
        state: ApprovalState.REJECTED,
        buttons: [],
      },
      {
        id: 3,
        title: '고속도로 로망스',
        subtitle: '윤종신',
        image: '/images/empty.png',
        state: ApprovalState.PENDING,
        buttons: [],
      },
      {
        id: 4,
        title: '행운을 빌어줘어어',
        subtitle: '원필',
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
          id={icon.id}
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
              onClick={(): void => handleButtonClick(icon.id)}
            />,
          ]}
        />
      ))}
    </div>
  );
};

export default IconList;
