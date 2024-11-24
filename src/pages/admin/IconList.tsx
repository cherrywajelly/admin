import { ReactNode, useContext, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import { ContextProps, IconGroup } from '../../types/Props';
import { ApprovalState } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';

const IconList = (): ReactNode => {
  const [icons, setIcons] = useState<IconGroup[]>([]);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    console.log(id);
    setSelectedMenu('아이콘 상세');
    navigate(`/admin/icons/${id}`);
  };

  useEffect((): void => {
    setIcons([
      {
        id: 0,
        title: '노노노',
        creator: '에이핑크',
        headImage: '/images/empty.png',
        approvalState: ApprovalState.PENDING,
      },
      {
        id: 1,
        title: '반짝반짝',
        creator: '걸스데이',
        headImage: '/images/empty.png',
        approvalState: ApprovalState.APPROVED,
      },
      {
        id: 2,
        title: '럽미라잇',
        creator: '엑소',
        headImage: '/images/empty.png',
        approvalState: ApprovalState.REJECTED,
      },
      {
        id: 3,
        title: '고속도로 로망스',
        creator: '윤종신',
        headImage: '/images/empty.png',
        approvalState: ApprovalState.PENDING,
      },
      {
        id: 4,
        title: '행운을 빌어줘어어',
        creator: '원필',
        headImage: '/images/empty.png',
        approvalState: ApprovalState.APPROVED,
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {icons.map((icon: IconGroup, idx: number) => (
        <ListElem
          key={idx}
          title={icon.title}
          subtitle={icon.creator}
          image={icon.headImage}
          divider={idx < icons.length - 1}
          buttons={[
            <Button
              text={icon.approvalState as string}
            />,
            <Button
              text="상세 보기"
              onClick={(): void => handleButtonClick(icon.id)}
            />,
          ]}
        />
      ))}
    </div>
  );
};

export default IconList;
