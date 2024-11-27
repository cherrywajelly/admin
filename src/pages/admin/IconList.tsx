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
        title: '루돌프 토스트',
        creator: '박하준',
        headImage: '/images/christmas/r1.png',
        approvalState: ApprovalState.PENDING,
      },
      {
        id: 1,
        title: '산타 토스트',
        creator: '정지현',
        headImage: '/images/christmas/s1.png',
        approvalState: ApprovalState.APPROVED,
      },
      {
        id: 2,
        title: '홀리 잼',
        creator: '이타원',
        headImage: '/images/christmas/h1.png',
        approvalState: ApprovalState.REJECTED,
      },
      {
        id: 3,
        title: '몰리 잼',
        creator: '원해영',
        headImage: '/images/christmas/m1.png',
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
