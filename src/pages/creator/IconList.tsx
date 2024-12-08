import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApprovalState } from '../../types/Enums';
import ListElem from '../../components/ListElem.tsx';
import Button from '../../components/Button.tsx';
import { getIconGroups } from '../../api/creator/iconGroup.ts';
import { IconGroup } from '../../types/Types.tsx';

const IconListPage = (): ReactNode => {
  const [iconList, setIconList] = useState<IconGroup[]>([]);

  const navigate = useNavigate();

  const handleButtonClick = (id: number): void => {
    navigate(`/creator/icons/${id}`);
  };

  useEffect(() => {
    const fetchIconGroups = async () => {
      const data = await getIconGroups();
      setIconList(data);
    };

    fetchIconGroups();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {iconList.map((icon: IconGroup, idx: number) => (
        <ListElem
          key={idx}
          title={icon.title}
          image={icon.headImage}
          divider={idx < iconList.length - 1}
          background={icon.approvalState === ApprovalState.PENDING ? 'bg-ivory' : 'bg-white'}
          buttons={[
            <Button text={icon.approvalState as string} />,
            <Button text="상세 보기" onClick={(): void => handleButtonClick(icon.id ?? 0)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default IconListPage;
