import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps, ListElemProps } from '../../types/Props';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';

const CreatorList = (): ReactNode => {
  const [creatorList, setCreatorList] = useState<ListElemProps[]>([]);
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    console.log(id);
    setSelectedMenu('제작자 상세');
    navigate(`/admin/creators/${id}`);
  };

  useEffect((): void => {
    setCreatorList([
      { id: 0, title: 'Cherry', image: '/images/empty.png', buttons: [] },
      { id: 1, title: 'Wade', image: '/images/empty.png', buttons: [] },
      { id: 2, title: 'Julia', image: '/images/empty.png', buttons: [] },
      { id: 3, title: 'Kelly', image: '/images/empty.png', buttons: [] },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {creatorList.map((creator: ListElemProps, idx: number) => (
        <ListElem
          key={idx}
          id={creator.id}
          title={creator.title}
          image={creator.image}
          divider={idx < creatorList.length - 1}
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
