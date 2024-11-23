import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps, Creator } from '../../types/Props';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';

const CreatorList = (): ReactNode => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    console.log(id);
    setSelectedMenu('제작자 상세');
    navigate(`/admin/creators/${id}`);
  };

  useEffect((): void => {
    setCreators([
      { id: 0, nickname: 'Cherry', profilePicture: '/images/empty.png' },
      { id: 1, nickname: 'Wade', profilePicture: '/images/empty.png' },
      { id: 2, nickname: 'Julia', profilePicture: '/images/empty.png' },
      { id: 3, nickname: 'Kelly', profilePicture: '/images/empty.png' },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {creators.map((creator: Creator, idx: number) => (
        <ListElem
          key={idx}
          title={creator.nickname}
          image={creator.profilePicture}
          divider={idx < creators.length - 1}
          buttons={[
            <Button
              text="상세 보기"
              styles="!bg-secondary-main !text-white !w-40 border-none"
              onClick={() => handleButtonClick(creator.id)}
            />,
          ]}
        />
      ))}
    </div>
  );
};

export default CreatorList;
