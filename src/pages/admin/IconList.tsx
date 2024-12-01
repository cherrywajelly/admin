import { ReactNode, useContext, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import { ContextProps } from '../../types/Props';
import { IconGroup } from '../../types/Types';
import { AdminMenu, ApprovalState } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { getIconGroups } from '../../api/admin/iconGroup';

const IconListPage = (): ReactNode => {
  const [icons, setIcons] = useState<IconGroup[]>([]);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.ICON_DETAIL);
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
