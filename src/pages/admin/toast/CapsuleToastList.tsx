import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CapsuleToast } from '../../../types/Types';
import ListElem from '../../../components/ListElem';
import Button from '../../../components/Button';
import { getCapsuleToasts } from '../../../api/admin/capsuleToast';

const CapsuleToastListPage = (): ReactNode => {
  const navigate = useNavigate();
  const [capsuleToasts, setCapsuleToasts] = useState<CapsuleToast[]>([]);

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/capsuleToasts/${id}`);
  };

  useEffect((): void => {
    const fetchCapsuleToastList = async () => {
      const data = await getCapsuleToasts();
      setCapsuleToasts(data);
    };

    fetchCapsuleToastList();
  }, []);

  return (
    <div>
      {capsuleToasts.map((capsuleToast: CapsuleToast, idx: number) => (
        <ListElem
          key={idx}
          image={capsuleToast.image}
          title={capsuleToast.title}
          subtitle={capsuleToast.group}
          background="bg-white"
          divider={idx < capsuleToasts.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(capsuleToast.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default CapsuleToastListPage;
