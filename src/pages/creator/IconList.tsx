import { ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProps, IconGroup } from '../../types/Props';
import { ApprovalState } from '../../types/Enums';
import ListElem from '../../components/ListElem.tsx';
import Button from '../../components/Button.tsx';
import Context from '../../contexts/Context.tsx';

const IconList = (): ReactNode => {
  const [iconList, setIconList] = useState<IconGroup[]>([]);

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
        title: '루돌프 토스트',
        headImage: '/images/christmas/r1.png',
        approvalState: ApprovalState.PENDING,
      },
      {
        id: 1,
        title: '산타 토스트',
        headImage: '/images/christmas/s1.png',
        approvalState: ApprovalState.APPROVED,
      },
      {
        id: 2,
        title: '홀리 잼',
        headImage: '/images/christmas/h1.png',
        approvalState: ApprovalState.REJECTED,
      },
      {
        id: 3,
        title: '몰리 잼',
        headImage: '/images/christmas/m1.png',
        approvalState: ApprovalState.APPROVED,
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {iconList.map((icon: IconGroup, idx: number) => (
        <ListElem
          key={idx}
          title={icon.title}
          image={icon.headImage}
          divider={idx < iconList.length - 1}
          buttons={[
            <Button
              text={icon.approvalState as string}
            />,
            <Button
              text="상세 보기"
              onClick={(): void => handleButtonClick(icon.id ?? 0)}
            />,
          ]}
        />
      ))}
    </div>
  );
};

export default IconList;
