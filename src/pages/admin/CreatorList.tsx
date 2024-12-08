import { ReactNode, useEffect, useState } from 'react';
import { Creator } from '../../types/Props';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { getCreators } from '../../api/admin/creator';

const CreatorListPage = (): ReactNode => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const navigate = useNavigate();

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/creators/${id}`);
  };

  useEffect((): void => {
    const fetchCreators = async () => {
      const data = await getCreators();
      setCreators(data);
    };

    fetchCreators();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {creators.map((creator: Creator, idx: number) => (
        <ListElem
          key={idx}
          title={creator.nickname}
          image={creator.profilePicture}
          divider={idx < creators.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(creator.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default CreatorListPage;
