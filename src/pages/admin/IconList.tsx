import { ReactNode, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import { IconGroup } from '../../types/Types';
import { ApprovalState } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { getIconGroups } from '../../api/admin/iconGroup';

const IconListPage = (): ReactNode => {
  const [icons, setIcons] = useState<IconGroup[]>([]);

  const navigate = useNavigate();

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/icons/${id}`);
  };

  useEffect((): void => {
    const fetchIconGroups = async () => {
      const data = await getIconGroups();
      setIcons(data);
    };

    fetchIconGroups();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {icons.map((icon: IconGroup, idx: number) => (
        <ListElem
          key={idx}
          title={icon.title}
          image={icon.headImage}
          background={icon.approvalState === ApprovalState.PENDING ? 'bg-ivory' : 'bg-white'}
          divider={idx < icons.length - 1}
          buttons={[
            <Button text={icon.approvalState as string} />,
            <Button text="상세 보기" onClick={(): void => handleButtonClick(icon.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default IconListPage;
