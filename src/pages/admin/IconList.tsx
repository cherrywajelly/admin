import { ReactNode, useContext, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import { ContextProps } from '../../types/Props';
import { IconGroupDetail } from '../../types/Types';
import { AdminMenu, ApprovalState } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';

const IconListPage = (): ReactNode => {
  const [icons, setIcons] = useState<IconGroupDetail[]>([]);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.ICON_DETAIL);
    navigate(`/admin/icons/${id}`);
  };

  useEffect((): void => {
    setIcons([
      {
        title: '루돌프 토스트',
        creator: '박하준',
        headImage: '/images/christmas/r1.png',
        approvalState: ApprovalState.PENDING,
        description: '아이콘 그룹 1',
        iconImages: [],
        soldIconNumber: 0,
        revenue: 0,
      },
      {
        title: '산타 토스트',
        creator: '정지현',
        headImage: '/images/christmas/s1.png',
        approvalState: ApprovalState.APPROVED,
        description: '아이콘 그룹 1',
        iconImages: [],
        soldIconNumber: 0,
        revenue: 0,
      },
      {
        title: '홀리 잼',
        creator: '이타원',
        headImage: '/images/christmas/h1.png',
        approvalState: ApprovalState.REJECTED,
        description: '아이콘 그룹 1',
        iconImages: [],
        soldIconNumber: 0,
        revenue: 0,
      },
      {
        title: '몰리 잼',
        creator: '원해영',
        headImage: '/images/christmas/m1.png',
        approvalState: ApprovalState.APPROVED,
        description: '아이콘 그룹 1',
        iconImages: [],
        soldIconNumber: 0,
        revenue: 0,
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {icons.map((icon: IconGroupDetail, idx: number) => (
        <ListElem
          key={idx}
          title={icon.title}
          subtitle={icon.creator}
          image={icon.headImage}
          background={icon.approvalState === ApprovalState.PENDING ? 'bg-ivory' : 'bg-white'}
          divider={idx < icons.length - 1}
          buttons={[
            <Button text={icon.approvalState as string} />,
            <Button text="상세 보기" onClick={(): void => handleButtonClick(0)} />,
            // <Button text="상세 보기" onClick={(): void => handleButtonClick(icon.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default IconListPage;
